import React from 'react'
import MoviesList from './MoviesList'

function Main({trendingMovies}) {
    return (
        <div>
            <h1>Main</h1>
            <MoviesList trendingMovies={trendingMovies}/>
            <br />
            <br />
        </div>
    )
}

export default Main