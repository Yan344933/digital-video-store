import React from 'react';

const Hero = (props) => {


  return (
    <div id="carousel" className="carousel slide " data-bs-ride="true">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner " data-bs-interval="7500">
        {props.images.map((element) =>
          <div className={element.active === true ? "carousel-item active" : "carousel-item"} key={element.title}>
            <img src={element.src} className="d-block img-fluid" alt={element.title} />
            <div className="carousel-caption d-block">
              <h1>{element.title}</h1>
            </div>

          </div>
        )}

      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}


export default Hero;