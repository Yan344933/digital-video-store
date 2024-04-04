import React from 'react'
import { Link } from 'react-router-dom'

const FeaturedTV = (props) => {
  return (
    <div className='features-container container'>
      <div>
        <h2>Featured TV shows</h2>
      </div>
      <div className='row row-cols-auto row-cols-xl-6'>
        {props.movies.map((element) =>
          <Link to={'/movie/' + element.id} key={element.id}>
            <img className='features col my-3 my-xl-0' key={element.id} src={element.smallPoster} alt={element.title} />
          </Link>
        )}
      </div>

    </div>
  )
}

export default FeaturedTV;