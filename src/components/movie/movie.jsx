import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import './movie.scss';
import { Modal, Button, Card, Form, FormControl, FloatingLabel} from 'react-bootstrap';
import getFilmsInfo from "../../services/getFilmsInfo.js";
import {UserContext} from '../../contexts/userContext';
import {ViewLaterContext} from '../../contexts/viewLaterContext';
import pushViewLater from '../../services/viewLater/pushViewLater'

 function Movie(movie){
    const {isLoginUser, user} = useContext(UserContext);

    const {setViewLater, viewLater} = useContext(ViewLaterContext);
     
    const [show, setShow] = useState(false);
 

    const handleCloseMovieInfo = () => {
        setShowId(false);
        setShow(false)};
    const handleShowMovieInfo = () => {
        setShow(true)};

    const [film, setFilm] = useState('');

    useEffect(() => {
        getFilmsInfo(movie.id).then((data) => {
            setFilm(data);
            // console.log(data);
        })
    }, []);

    const [showId, setShowId] = useState(false);


    const handleViewLater = () => {

        console.log(user.uid, movie.id);
        const isExt = !!viewLater.find(vl => vl.id === movie.id);
        if(isExt) {
            // is exist
            return;
        }
        pushViewLater({userId: user.uid, movieId: movie.id})
            .then(() => {
               
                setViewLater([...viewLater, movie]);

                setShowId(true);
                console.log('push');
            })
            .catch(() => {
                console.log('error');
            })

    }
    
    const handleDeleteViewLater = () => {
        let item = JSON.parse(localStorage.getItem('view_later'));
        console.log(item);
        console.log(movie.id);
        // for(var i=0;i<item.length;i++)
        //   {
        //     if(item[i].id === movie.id)
        //     {
        //         item.splice(i,1);
        //     setViewLater(item);

        //       break;
        //     }
        //     console.log(item);
        //     localStorage.setItem('view_later', JSON.stringify(viewLater));

        //   }
    }
    

    const [comment, setComment] = useState('');
    const handleChangeComment = (e) => {
        console.log(e.target.value);
        setComment(e.target.value);
    }

    const [pushComment, setPushComment] = useState([]);
    const handlePushComment = () => {
        setPushComment([...comment, comment]);
    }

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
        <Modal show={show} onHide={handleCloseMovieInfo} size="lg" style={{minWidth: '300px'}}>
            <Modal.Header closeButton style={{minWidth: '300px' }}>
                <Modal.Title> {film.title} </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{minWidth: '300px', maxWidth: '45rem' }} className="d-flex justify-content-space-between">
                <Card style={{minWidth: '300px', maxWidth: '45rem', border: 'none' }} className="row d-flex justify-content-center align-items-center">
                    <div className="d-flex justify-content-space-between" style={{minWidth: '300px', maxWidth: '45rem' }}>
                        <Card.Img className="d-none d-lg-block" style={{minWidth: '250px', maxHeight: '420px' }} src={IMG_API + film.poster_path}  />
                        <Card.Body >
                            <Card.Title> overview: </Card.Title>
                            <Card.Text style={{textAlign: 'justify'}}> {film.overview} </Card.Text>

                            <Card.Title> tagline: </Card.Title>
                            <Card.Text> {film.tagline}</Card.Text>
                            
                            <Card.Title> status: </Card.Title>
                            <Card.Text> {film.status}</Card.Text>

                            <Card.Title> runtime: </Card.Title>
                            <Card.Text> {film.runtime} minutes </Card.Text>

                        </Card.Body> 
                    </div>               
                </Card>
                
            </Modal.Body>

                        {
                        isLoginUser? (
                                <div>
                            <div className="d-flex justify-content-center" style={{width: '100%'}}>
                                <Button onClick={handleViewLater} className="m-3" style={{width: '120px', height: '38px'}} variant="danger"> view later </Button>
                                <Button onClick={handleDeleteViewLater}className="m-3" style={{width: '200px'}} variant="primary"> delete from view later </Button>
                            </div>

                                <FormControl          
                                                    value={pushComment}
                                                    as="textarea"
                                                    placeholder="Your comment here"
                                                    style={{ height: '90px', width: '98%', margin: 'auto' }}/>

                                <Form.Group className="m-3" >
                                    <FloatingLabel controlId="floatingTextarea2" label="Comment">
                                        <FormControl 
                                                    onChange={handleChangeComment}
                                                    as="textarea"
                                                    placeholder="Leave a comment here"
                                                    style={{ height: '100px' }}/>
                                    </FloatingLabel>
                                    <div className="d-flex justify-content-end">
                                        <Button onClick={handlePushComment} className="m-3" variant="secondary"> save comment </Button>
                                    </div>
                                </Form.Group>
                                </div>
                            ) : ('')
                        }
                        
        </Modal>
    </>
    )
}

export default Movie;