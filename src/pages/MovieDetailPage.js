import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import movieContext from '../context/movieContext'

const MovieDetailPage = () => {

    const { movieId } = useParams();

    const movie = useContext(movieContext).movies.filter((e) => e.id === movieId)[0]

    console.log(useContext(movieContext).movies)
    return (
        <div>
            <Header />
            <div className='row my-4 justify-content-center'>
                <div className='container row col-5 justify-content-start'>
                    <div className='col-4 ms-5'>
                        <img src={movie.smallPoster} className="img-fluid movie-small-poster" alt={movie.title}></img>
                    </div>
                    <div className='col-7 text-start'>
                        <div className='row'>
                            <h1>{movie.title}</h1>
                            <div className='text-light'>
                                {movie.Description}
                            </div>
                        </div>
                        <div className='row mt-5'>
                            <div className='col-6'>
                                <button type="button" class="btn btn-primary">Rent For ${movie.RentalPrice}</button>

                            </div>
                            <div className='col-6'>
                                <button type="button" class="btn btn-primary">Purchase For ${movie.PurchasePrice}</button>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-7 movie-big-poster-container justify-content-end'>
                    <img src={movie.bigPoster} className="movie-big-poster" alt={movie.title}></img>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default MovieDetailPage