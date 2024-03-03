import React from 'react'

const FeaturedTV = (props) => {
  return (
    <div className='features-container'>
        <div>
            <h2>Featured TV shows</h2>
        </div>
        <div className='row row-cols-auto row-cols-xl-6'>
            {props.movies.map((element)=>
                <img className='features col my-3 my-xl-0' key={element.id} src={element.smallPoster} alt={element.title} />
            )}
        </div>
        
    </div>
  )
}

export default FeaturedTV;