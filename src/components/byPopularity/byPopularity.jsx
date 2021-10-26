import React, {useCallback, useContext, useEffect, useState} from "react";
import getFilmsByPopularity from "../../services/getFilmsByPopularity";
import getFilmsByName from "../../services/getFilmsByName";
import MoviesList from "../moviesList/moviesList";
import Search from "../search/search.jsx";
import PaginationPage from "../pagination/pagination.jsx";



import './byPopularity.scss';
import {LoaderContext} from "../../contexts/loaderContext";

export default function ByPopularity() {
    const {setisShowLoader} = useContext(LoaderContext);


    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);


    const handlePrevPage = () => {
        if(page <= 1) return;
        
        setPage(page <= 1 ? 1 : page - 1); 
    }
    const handleNextPage = () => {
        setPage(page + 1);
    }

    useEffect(() => {
        setisShowLoader(true)
        
        getFilmsByPopularity(page).then((data) => {
            setMovies(data.results)
        })
        .catch(() => {

        })
        .finally(() => setisShowLoader(false))
    }, [page]);

    const handleEnter = useCallback((search) => {
        if (!search.trim()) 
            return;
        
        // loader open
        getFilmsByName(search)
            .then(data => setMovies(data.results))
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                 // loader close
                console.log('always');
            })
    }, [])

    return (
        <>
        <div className="main_container">
            <Search handleEnter={handleEnter}/> 
            {
            movies?.length ? (
                    <MoviesList movies={movies}/>
                    ) : (<></>)}
        </div>
        <PaginationPage handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} />
        </>
    )
}
