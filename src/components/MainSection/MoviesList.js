import React from 'react'
import Movie from './Movie';

function MoviesList({ trendingMovies }) {
    return (
        <div>
            <h1>MovieList</h1>
            {trendingMovies.map((movie, index) => {
                return (
                    <div>
                        <Movie movie={movie} />
                    </div>
                )
            })}
        </div>
    )
}

export default MoviesList