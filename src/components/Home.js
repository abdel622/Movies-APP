import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import Main from "./MainSection/Main";
import Footer from "./Footer";
import SearchResults from "./SearchResults";
import {
  getTrending,
  getPopular,
  getTopRated,
  getUpcoming,
} from "./fetchServices";
import Carousel, {
  slidesToShowPlugin,
  arrowsPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import Container from "@material-ui/core/Container";
import Icon from "react-fa";
import "./Home.css";

import starLogo from "../static/images/ant-design_star-filled.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import {API_KEY, DEFAULT_IMG} from "./const";


let slides = [
  <img src="https://picsum.photos/800/300/?random" alt="1" />,
  <img src="https://picsum.photos/800/301/?random" alt="2" />,
  <img src="https://picsum.photos/800/302/?random" alt="3" />,
  <img src="https://picsum.photos/800/303/?random" alt="4" />,
  <img src="https://picsum.photos/800/304/?random" alt="5" />,
];

function Home() {
  const BASE_URL = "https://image.tmdb.org/t/p/w154";

  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [searchedKeyword, setSearchedKeyword] = useState("");
  const [isSearchKeyword, setIsSearchKeyword] = useState(false);
  const [searchedMovies, setSearchedMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const trendingMoviesApi = await getTrending(API_KEY);
      const popularMoviesApi = await getPopular(API_KEY);
      const topRatedMoviesApi = await getTopRated(API_KEY);
      const upcomingMoviesApi = await getUpcoming(API_KEY);
      console.log(trendingMovies);
      console.log(topRatedMovies);

      setTrendingMovies(trendingMoviesApi.results);
      setPopularMovies(popularMoviesApi.results);
      setTopRatedMovies(topRatedMoviesApi.results);
      setUpcomingMovies(upcomingMoviesApi.results);
    };
    fetchData();
  }, []);

  return (
    <div className="parent-div">
      <div className="bg-overlay"></div>
      <Navbar
        setSearchedKeyword={setSearchedKeyword}
        isSearchKeyword={isSearchKeyword}
        setIsSearchKeyword={setIsSearchKeyword}
        setSearchedMovies={setSearchedMovies}
        searchedKeyword={searchedKeyword}
      />

      {isSearchKeyword ? (
        <SearchResults searchedMovies={searchedMovies} />
      ) : (
        <Container maxWidth="lg" style={{ marginTop: "150px" }}>
          <div class="movies-carousel">
            <h1>Trending Movies</h1>
            <Carousel
              plugins={[
                "centered",
                "infinite",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 4,
                  },
                },
                {
                  resolve: arrowsPlugin,
                  options: {
                    arrowLeft: (
                      <button className="arrow-carousel">
                        <FontAwesomeIcon
                          icon={faChevronLeft}
                          inverse
                          size="3x"
                        />
                      </button>
                    ),
                    arrowLeftDisabled: (
                      <button className="arrow-carousel">
                        <FontAwesomeIcon
                          icon={faChevronLeft}
                          inverse
                          size="3x"
                        />
                      </button>
                    ),
                    arrowRight: (
                      <button className="arrow-carousel">
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          inverse
                          size="3x"
                        />
                      </button>
                    ),
                    arrowRightDisabled: (
                      <button className="arrow-carousel">
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          inverse
                          size="3x"
                        />
                      </button>
                    ),
                    addArrowClickHandler: true,
                  },
                },
              ]}
              breakpoints={{
                640: {
                  plugins: [
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                        numberOfSlides: 1,
                      },
                    },
                  ],
                },
                960: {
                  plugins: [
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                        numberOfSlides: 2,
                      },
                    },
                  ],
                },
              }}
            >
              {trendingMovies.map((movie, index) => {
                return (
                  <Link
                    to={`/movies/${movie.id}`}
                    key={movie.id}
                    className="movie"
                  >
                    <div
                      className="card-movie"
                      style={{
                        width: "200px",
                        height: "350px",
                        backgroundImage: `url(${BASE_URL}${movie.poster_path}`,
                      }}
                    >
                      <div className="title-card">
                        <h1>
                          {!!movie.title ? movie.title : movie.original_name}
                        </h1>
                      </div>
                      <div className="card-image">
                        <img
                          src={`${BASE_URL}${movie.poster_path}`}
                          style={{ width: "100%" }}
                          alt=""
                        />
                      </div>
                      <div className="movie-rating">
                        <img src={starLogo} />
                        <p>{movie.vote_average}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </Carousel>
          </div>

          <div class="movies-carousel">
            <h1>Popular Movies</h1>
            <Carousel
              plugins={[
                "centered",
                "infinite",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 4,
                  },
                },
                {
                  resolve: arrowsPlugin,
                  options: {
                    arrowLeft: (
                      <button className="arrow-carousel">
                        <FontAwesomeIcon
                          icon={faChevronLeft}
                          inverse
                          size="3x"
                        />
                      </button>
                    ),
                    arrowLeftDisabled: (
                      <button className="arrow-carousel">
                        <FontAwesomeIcon
                          icon={faChevronLeft}
                          inverse
                          size="3x"
                        />
                      </button>
                    ),
                    arrowRight: (
                      <button className="arrow-carousel">
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          inverse
                          size="3x"
                        />
                      </button>
                    ),
                    arrowRightDisabled: (
                      <button className="arrow-carousel">
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          inverse
                          size="3x"
                        />
                      </button>
                    ),
                    addArrowClickHandler: true,
                  },
                },
              ]}
              breakpoints={{
                640: {
                  plugins: [
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                        numberOfSlides: 1,
                      },
                    },
                  ],
                },
                960: {
                  plugins: [
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                        numberOfSlides: 2,
                      },
                    },
                  ],
                },
              }}
            >
              {popularMovies.map((movie, index) => {
                return (
                  <Link
                    to={`/movies/${movie.id}`}
                    key={movie.id}
                    className="movie"
                  >
                    <div
                      className="card-movie"
                      style={{
                        width: "200px",
                        height: "350px",
                        backgroundImage: `url(${BASE_URL}${movie.poster_path}`,
                      }}
                    >
                      <div className="title-card">
                        <h1>
                          {!!movie.title ? movie.title : movie.original_name}
                        </h1>
                      </div>
                      <div className="card-image">
                        <img
                          src={`${BASE_URL}${movie.poster_path}`}
                          style={{ width: "100%" }}
                          alt=""
                        />
                      </div>
                      <div className="movie-rating">
                        <img src={starLogo} />
                        <p>{movie.vote_average}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </Carousel>
          </div>

          <div class="movies-carousel">
            <h1>Top Rated Movies</h1>
            <Carousel
              plugins={[
                "centered",
                "infinite",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 4,
                  },
                },
                {
                  resolve: arrowsPlugin,
                  options: {
                    arrowLeft: (
                      <button className="arrow-carousel">
                        <FontAwesomeIcon
                          icon={faChevronLeft}
                          inverse
                          size="3x"
                        />
                      </button>
                    ),
                    arrowLeftDisabled: (
                      <button className="arrow-carousel">
                        <FontAwesomeIcon
                          icon={faChevronLeft}
                          inverse
                          size="3x"
                        />
                      </button>
                    ),
                    arrowRight: (
                      <button className="arrow-carousel">
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          inverse
                          size="3x"
                        />
                      </button>
                    ),
                    arrowRightDisabled: (
                      <button className="arrow-carousel">
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          inverse
                          size="3x"
                        />
                      </button>
                    ),
                    addArrowClickHandler: true,
                  },
                },
              ]}
              breakpoints={{
                640: {
                  plugins: [
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                        numberOfSlides: 1,
                      },
                    },
                  ],
                },
                960: {
                  plugins: [
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                        numberOfSlides: 2,
                      },
                    },
                  ],
                },
              }}
            >
              {topRatedMovies.map((movie, index) => {
                return (
                  <Link
                    to={`/movies/${movie.id}`}
                    key={movie.id}
                    className="movie"
                  >
                    <div
                      className="card-movie"
                      style={{
                        width: "200px",
                        height: "350px",
                        backgroundImage: `url(${BASE_URL}${movie.poster_path}`,
                      }}
                    >
                      <div className="title-card">
                        <h1>
                          {!!movie.title ? movie.title : movie.original_name}
                        </h1>
                      </div>
                      <div className="card-image">
                        <img
                          src={`${BASE_URL}${movie.poster_path}`}
                          style={{ width: "100%" }}
                          alt=""
                        />
                      </div>
                      <div className="movie-rating">
                        <img src={starLogo} />
                        <p>{movie.vote_average}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </Carousel>
          </div>

          <div class="movies-carousel">
            <h1>Upcoming Movies</h1>
            <Carousel
              plugins={[
                "centered",
                "infinite",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 4,
                  },
                },
                {
                  resolve: arrowsPlugin,
                  options: {
                    arrowLeft: (
                      <button className="arrow-carousel">
                        <FontAwesomeIcon
                          icon={faChevronLeft}
                          inverse
                          size="3x"
                        />
                      </button>
                    ),
                    arrowLeftDisabled: (
                      <button className="arrow-carousel">
                        <FontAwesomeIcon
                          icon={faChevronLeft}
                          inverse
                          size="3x"
                        />
                      </button>
                    ),
                    arrowRight: (
                      <button className="arrow-carousel">
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          inverse
                          size="3x"
                        />
                      </button>
                    ),
                    arrowRightDisabled: (
                      <button className="arrow-carousel">
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          inverse
                          size="3x"
                        />
                      </button>
                    ),
                    addArrowClickHandler: true,
                  },
                },
              ]}
              breakpoints={{
                640: {
                  plugins: [
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                        numberOfSlides: 1,
                      },
                    },
                  ],
                },
                960: {
                  plugins: [
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                        numberOfSlides: 2,
                      },
                    },
                  ],
                },
              }}
            >
              {upcomingMovies.map((movie, index) => {
                return (
                  <Link
                    to={`/movies/${movie.id}`}
                    key={movie.id}
                    className="movie"
                  >
                    <div
                      className="card-movie"
                      style={{
                        width: "200px",
                        height: "350px",
                        backgroundImage: `url(${BASE_URL}${movie.poster_path}`,
                      }}
                    >
                      <div className="title-card">
                        <h1>
                          {!!movie.title ? movie.title : movie.original_name}
                        </h1>
                      </div>
                      <div className="card-image">
                        <img
                          src={`${BASE_URL}${movie.poster_path}`}
                          style={{ width: "100%" }}
                          alt=""
                        />
                      </div>
                      <div className="movie-rating">
                        <img src={starLogo} />
                        <p>{movie.vote_average}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </Carousel>
          </div>
        </Container>
      )}
      <Footer />
    </div>
  );
}

export default Home;
