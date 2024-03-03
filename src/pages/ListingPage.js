import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import movieContext from '../context/movieContext';

const ListingPage = () => {

  const movies = useContext(movieContext).movies;

  return (
    <div>
      <Header />
      <div className='row px-5 justify-content-center'>
        <h1 className='text-start ms-3 my-3'>Movies & TV Shows</h1>
        <div className='container d-flex flex-wrap flex-md-row flex-column gx-5'>
            {movies.map((movie) =>
                    <Link to={movie.id} className='movie-list-item my-3 mx-2 align-self-center'>
                        <img key={movie.id} src={movie.smallPoster} alt={movie.title} />
                    </Link>
            )}
    </div>
      </div>


      <Footer />
    </div>
  )
}

export default ListingPage