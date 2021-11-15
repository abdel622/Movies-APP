import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import "./MovieDetails.css";

import movieTrailer from "movie-trailer";
import { getMovieDetails } from "./fetchServices";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import {API_KEY, BASE_URL, DEFAULT_IMG} from "./const";

const mvid = movieTrailer(null, { tmdbId: 161 }); // Content ID for "Ocean's Eleven"

function MovieDetails() {
  let { id } = useParams();

  const [movie, setMovie] = useState({});
  const [mvTrailerId, setMvTrailerId] = useState("");

  useEffect(() => {
    return getMovieDetails(API_KEY, id).then((data) => {
      setMovie(data);
      movieTrailer(null, { tmdbId: id, id: true }).then((response) =>
        setMvTrailerId(response)
      );
    });
  }, [id]);

  return (
    <div className="parent-div">
      <div className="bg-overlay"></div>
      {movie ? (
        <div className="movie-card">
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <div
                className="flexcontainer-img"
                style={{
                  backgroundImage: `url(${BASE_URL}${movie.poster_path}`,
                }}
              >
                <h1>{movie.original_title || movie.original_name}</h1>
                <img
                  src={`${BASE_URL}${movie.poster_path}`}
                  alt="poster"
                  className="poster-img"
                />
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className="overview">
                <h1>Overview</h1>
                <p>{movie.overview}</p>
                <div className="iframe-container">
                  <iframe
                    className="responsive-iframe"
                    src={`https://www.youtube.com/embed/${mvTrailerId}`}
                    frameBorder="0"
                  />
                </div>
                <p className="overview-links">
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      fontWeight: "600",
                    }}
                  >
                    Home
                  </Link>
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      ) : (
        <div>No Details!</div>
      )}
    </div>
  );
}

export default MovieDetails;
