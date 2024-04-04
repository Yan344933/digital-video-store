import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';

const MovieDetailPage = () => {

    const { movieId } = useParams();

    const [movie, setMovie] = useState({});

    useEffect(() => {

        fetch(`http://localhost:5000/movies/${movieId}`, {
            method: 'get'
        }).then((res) => {
            return res.json()
        }).then((data) => {
            setMovie(data.body[0])
        });

    }, [movieId])

    return (
        <div className='row my-4 justify-content-center'>
            <div className='container row col-5 justify-content-start'>
                <div className='col-4 ms-5'>
                    <img src={movie.smallPoster} className="img-fluid movie-small-poster" alt={movie.title}></img>
                </div>
                <div className='col-7 text-start'>
                    <div className='row'>
                        <h1>{movie.title}</h1>
                        <div className='text-light'>
                            {movie.description}
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-6'>
                            <button type="button" className="btn btn-primary">Rent For ${movie.rentalPrice}</button>

                        </div>
                        <div className='col-6'>
                            <button type="button" className="btn btn-primary">Purchase For ${movie.purchasePrice}</button>

                        </div>
                    </div>
                </div>
            </div>
            <div className='col-7 movie-big-poster-container justify-content-end'>
                <img src={movie.bigPoster} className="movie-big-poster" alt={movie.title}></img>
            </div>
        </div>
    )
}

export default MovieDetailPage