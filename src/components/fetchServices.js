import axios from "axios";


export const getTrending = async (API_KEY) => {
  return axios
    .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

export const getPopular = async (API_KEY) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

export const getTopRated = async (API_KEY) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

export const getUpcoming = async (API_KEY) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

export const getMovieDetails = async (API_KEY, id) => {
  console.log(id);
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    )
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

export const searchMovies = async (API_KEY, query) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${encodeURI(
        query
      )}&page=1&include_adult=false`
    )
    .then((res) => res.data)
    .catch((err) => console.error(err));
};
