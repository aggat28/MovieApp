import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import './movie.scss';
import { Modal, Button, Card, FormControl, InputGroup } from 'react-bootstrap';
import {UserContext} from '../../contexts/userContext'

import getFilmsInfo from "../../services/getFilmsInfo.js";
import { Link } from 'react-router-dom';


 function Movie(movie){
    const {isLoginUser} = useContext(UserContext);
    // const {setIsLoginUser} = useContext(UserContext);
    
    const [show, setShow] = useState(false);

    const handleCloseMovieInfo = () => setShow(false);
    const handleShowMovieInfo = () => {
    // console.log(movie.id);
        setShow(true)};
    const [film, setFilm] = useState('');

    useEffect(() => {
        getFilmsInfo(movie.id).then((data) => {
            setFilm(data)
        })
    }, []);


    const IMG_API = "https://image.tmdb.org/t/p/w1280";

    return (
        <>
        <div className="movie" id={movie.id} onClick={handleShowMovieInfo}>
            <img  src={IMG_API + movie.poster_path} alt={movie.title} id="movie_img"/>
            <div className="movie_info">
                <span style={{textAlign: 'center'}}> {movie.title} </span>
                <span className="movie_year"> {moment(movie.release_date).format('YYYY')} </span>

                <span className="vote_avarege"> {movie.vote_average} </span>
            </div>
            
        </div>
        <Modal show={show} onHide={handleCloseMovieInfo} size="lg" style={{minWidth: '427px'}}>
            <Modal.Header closeButton style={{minWidth: '427px' }}>
                <Modal.Title> {film.title} </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{minWidth: '427px', maxWidth: '45rem' }} className="d-flex justify-content-space-between">
                <Card style={{minWidth: '427px', maxWidth: '45rem', border: 'none' }} className="row d-flex justify-content-center align-items-center">
                    <div className="d-flex justify-content-space-between" style={{minWidth: '427px', maxWidth: '45rem' }}>
                        <Card.Img style={{minWidth: '250px', maxHeight: '420px' }} src={IMG_API + film.poster_path}  />
                        <Card.Body >
                            <Card.Title> overview: </Card.Title>
                            <Card.Text style={{textAlign: 'justify'}}> {film.overview} </Card.Text>

                            <Card.Title> tagline: </Card.Title>
                            <Card.Text> {film.tagline}</Card.Text>
                            
                            <Card.Title> status: </Card.Title>
                            <Card.Text> {film.status}</Card.Text>

                            <Card.Title> runtime: </Card.Title>
                            <Card.Text> {film.runtime} minutes</Card.Text>
                            <Button variant="danger"> view later </Button>

                        </Card.Body> 
                    </div>               
                </Card>
            </Modal.Body>
            {
                isLoginUser? (
                <Modal.Footer>
                    <InputGroup className="mb-1" size="lg">
                        <FormControl as="textarea" aria-label="With textarea" />
                    </InputGroup>
                        <Button variant="secondary" id="button-addon2"> save comment </Button>
                </Modal.Footer>
                ) : (
                    <Modal.Footer>
                        <div>If you want to leave a comment, please 
                        <Link to='/login'> log in </Link>.</div>
                    </Modal.Footer>
                )
            }
            
        </Modal>
        
      
    </>
    )
}

export default Movie;