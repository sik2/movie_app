import React from 'react';
import './Movie.css';
import propTypes from "prop-types";


function Movie({title, poster, genres, synopsis}) {
    return (
        <div className="Movie">
            <div className="Movie__Columns">
                <MoviePoster poster={poster} alt={title}/>
            </div>
                <div className="Movie__Columns">
                    <h1>{title}</h1>
                <div className="Movie_Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key = {index}/>)}
                </div>
                <p className="Movie__Synopsis">
                    {synopsis}
                </p>
            </div>




        </div>
    )
}


function MoviePoster({poster, alt}) {
    return (
        <img src={poster} alt={alt} title={alt} className= "MoviePoster" />
    )
}
function MovieGenre({genre}){
    return (
        <span className="Movie__Genre">{genre}</span>
    )
}

Movie.propTypes = {
        title: propTypes.string.isRequired,
        poster: propTypes.string.isRequired,
        genres: propTypes.array.isRequired,
        synopsis:propTypes.string.isRequired
}
MoviePoster.propTypes = {
    poster: propTypes.string.isRequired,
    alt: propTypes.string.isRequired
}
MovieGenre.propTypes = {
    genre:propTypes.string.isRequired
}

export default Movie;
