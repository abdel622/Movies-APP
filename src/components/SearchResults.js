import React from "react";
import starLogo from "../static/images/ant-design_star-filled.svg";
import { Link } from "react-router-dom";

import {API_KEY, BASE_URL, DEFAULT_IMG} from "./const";



function SearchResults({ searchedMovies }) {
  return (
    <div className="movies-list">
      {searchedMovies.map((movie) => {
        return (
          <div style={{ width: "250px" }}>
            <Link to={`/movies/${movie.id}`} key={movie.id} className="movie">
              <div
                className="card-movie"
                style={{
                  width: "200px",
                  height: "350px",
                  backgroundImage: `url(${BASE_URL}${movie.poster_path}`,
                }}
              >
                <div className="title-card">
                  <h1>{!!movie.title ? movie.title : movie.original_name}</h1>
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
          </div>
        );
      })}
    </div>
  );
}
export default SearchResults;
