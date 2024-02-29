import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MovieListing from '../components/MovieListing';
import movieContext from '../context/movieContext'

const ListingPage = () => {

    const movies = useContext(movieContext).movies;

  return (
    <div>
        <Header />
        <h1>Movies & TV Shows</h1>
        <MovieListing movies={movies}/>
        
        <Footer />
    </div>
  )
}

export default ListingPage