import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
// import MovieDetails from '../MovieDetails';


function Movie({ movie }) {
    const BASE_URL = "https://image.tmdb.org/t/p/w500"
    return (
        <div>
            <h1>Movie</h1>
            <div>
                <h1>{!!movie.title ? movie.title : "Some Title"}</h1>
                <img src={`${BASE_URL}${movie.poster_path}`} alt="" />
                <button></button>
                <p>{movie.id}</p>
                
                <Link to={`/movies/${movie.id}`} key={movie.id} className='movie'>
                        Details
                        
                    </Link>
            </div>
        </div>
                )
                
}

export default Movie
