import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Hero = (props) => {
    
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='custom-carousel-container'>
      {props.images.map((element) => 
          <Carousel.Item>
            <img
              src={element.src} 
              key={element.id} 
              alt={element.id} 
              className='custom-carousel-item'
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        )}
      
    </Carousel>
  )
}


export default Hero;