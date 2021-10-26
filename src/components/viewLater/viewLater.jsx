import React, { useContext } from "react";
import './viewLater.scss';
import Movie from '../movie/movie';
import {ViewLaterContext} from '../../contexts/viewLaterContext.jsx';


export default function ViewLater() {

    const {viewLater} = useContext(ViewLaterContext);
    localStorage.setItem('view_later', JSON.stringify(viewLater));
    
    let movies = JSON.parse(localStorage.getItem('view_later'));
    console.log(movies);

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


                    // проверка на одиннаковые фильмы ???????


                    <Movie key={movie.id} {...movie}/>
                )
                })
            }
        </div>
    )
    
}  