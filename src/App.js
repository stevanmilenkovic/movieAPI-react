import {useEffect, useState} from "react";

import './App.css';
import MovieCard from "./MovieCard";

const apiKey = 'api_key=760caa41642a41aab133542c3d03b2ac';
const baseUrl = 'https://api.themoviedb.org/3';
const searchUrl = baseUrl + '/search/movie?' + apiKey;
const popularUrl = baseUrl + '/discover/movie?sort_by=popularity.desc&' + apiKey;
const bestDramasUrl = baseUrl + '/discover/movie?with_genres=18&primary_release_year=2014&' + apiKey;
const inTheatresUrl = baseUrl + '/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&' + apiKey;
const kidsMoviesUrl = baseUrl + '/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&' + apiKey;
const bestFrom2010Url = baseUrl + '/discover/movie?primary_release_year=2010&sort_by=vote_average.desc&' + apiKey;

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = (title) => {
        fetch(searchUrl + '&query=' + title).then(resp => resp.json()).then(data => setMovies(data.results))
        }

    useEffect(()=>{
        showMovies(popularUrl)
    }, [])

    const showMovies = (url) => {
        fetch(url).then(resp => resp.json()).then(data => setMovies(data.results))
    }


    return (
        <div className="container">
            <div className="header">
                <div className="popular category" onClick={()=>showMovies(popularUrl)}>Popular</div>
                <div className="best_dramas category" onClick={()=>showMovies(bestDramasUrl)}>Best Dramas</div>
                <div className="in_theatres category" onClick={()=>showMovies(inTheatresUrl)}>In Theatres</div>
                <div className="kids_movies category" onClick={()=>showMovies(kidsMoviesUrl)}>Kids Movies</div>
                <div className="best_from_2010 category" onClick={()=>showMovies(bestFrom2010Url)}>Best from 2010</div>
                <input className="search" value={searchTerm} placeholder="Search" 
                onChange={(e)=> setSearchTerm(e.target.value)} 
                onKeyDown={(e)=>{if (e.key === 'Enter'){searchMovies(searchTerm);setSearchTerm('')}}}/>
            </div>
            <div className="movies">
                {movies.map((movie)=>
                <MovieCard movie={movie}/>)}
            </div>
        </div>
    );
}

export default App;