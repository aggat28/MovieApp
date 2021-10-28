import React from "react";
import Movie from "../movie/movie.jsx";
import './moviesList.scss';

export default function MoviesList(props) {

    return (
    <>
        <div className="movie_container" >
            {   
                props.movies.map((movie) => (
                    <Movie key={movie.id} {...movie}/>))
            }
        </div>
    </>
    )
}