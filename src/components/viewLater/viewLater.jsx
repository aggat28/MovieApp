import React, { useContext, useEffect } from "react";
import './viewLater.scss';
import Movie from '../movie/movie';
import {ViewLaterContext} from '../../contexts/viewLaterContext.jsx';


export default function ViewLater() {


    const {viewLater, setViewLater} = useContext(ViewLaterContext);

    localStorage.setItem('view_later', JSON.stringify(viewLater));

    
        let movies = JSON.parse(localStorage.getItem('view_later'));
        console.log(viewLater);
        console.log(movies);

        // if(movies)
        // {
        //     setViewLater({...viewLater, viewLater});
        // }


    // function isAddedToCart(id) {
    //     console.log(id);
    //     const carts = localStorage.getItem('carts');
    //     return carts.some(cart => cart.id === id);
    // }

    return (
        <div className="main_container">
            {
                movies.map((movie) => {
                return (

                    <Movie key={movie.id} {...movie}/>
                )
                })
            }
        </div>
    )
    
}  