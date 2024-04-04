import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const ListingPage = () => {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {

    fetch(`http://localhost:5000/?title=${search}`, {
      method: 'get'
    }).then((res) => {
      return res.json()
    }).then((data) => {
      if (data.body)
        setMovies(data.body[0])
      else setMovies([])
    });

  }, [search])

  return (
    <div className='row px-5 justify-content-center'>
      <div className='row align-items-center'>
        <h1 className='text-start ms-3 my-3 col-12 col-md-4'>
          Movies & TV Shows
        </h1>
        <div className='col-12 col-md-6 text-end'>
          <input type='search' className='form-control' placeholder='Search Title' value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className='container d-flex flex-wrap flex-md-row flex-column gx-5'>
        {movies.map((movie) =>
          <Link to={movie.id} className='movie-list-item my-3 mx-3 align-self-center' key={movie.id}>
            <img key={movie.id} src={movie.smallPoster} alt={movie.title} />
          </Link>
        )}
      </div>
    </div>
  )
}

export default ListingPage