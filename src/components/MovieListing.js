import React from 'react'
import { Link } from 'react-router-dom'

const MovieListing = (props) => {
  return (
    <div className='container d-flex flex-wrap flex-md-row flex-column'>
            {props.movies.map((movie) =>
                    <Link to={movie.id} className='movie-list-item my-3 mx-2 align-self-center'>
                        <img key={movie.id} src={movie.smallPoster} alt={movie.title} />
                        <div className='movie-list-item-title'>{movie.title}</div>
                    </Link>
            )}
    </div>
  )
}

export default MovieListing;