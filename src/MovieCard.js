import React from "react";

const img_url = 'https://image.tmdb.org/t/p/w500'

const MovieCard = ({movie}) => {

    return (
        <div className="card">
            <img src={img_url + movie.poster_path !== 'N/A' ? img_url + movie.poster_path : 'https://via.placeholder.com/400'} 
            alt={movie.title} width='100%' />

            <div className="title_rating">
                <div className="title">{movie.title}</div>
                <div className="rating">{movie.vote_average}</div>
            </div>

            <div className="overview">
                <h3>Overview</h3>
                {movie.overview}</div>
        </div>
    )
}

export default MovieCard