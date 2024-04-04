import React, { useState, useEffect } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Hero';
import FeaturedMovie from '../components/FeaturedMovie';
import FeaturedTV from '../components/FeaturedTV';
import Content from '../components/Content';

const Homepage = () => {

  const [featuredMovie, setFeaturedMovie] = useState([]);
  const [featuredTV, setFeaturedTV] = useState([]);

  useEffect(() => {
    
    fetch('http://localhost:5000/featured?type=TV')
    .then((res) => res.json())
    .then((data)=> {
      setFeaturedTV(data.body[0])
    });

    fetch('http://localhost:5000/featured?type=movie')
    .then((res) => res.json())
    .then((data)=> {
      setFeaturedMovie(data.body[0])
    });
  }, [])

  const carousel = [
    {"src": "https://m.media-amazon.com/images/S/sonata-images-prod/US_SVOD_Role_Play/e5549b68-683b-4c06-9031-e7587ee0dc27._UR3840,1440_SX2880_FMjpg_.jpeg",
    "title": "Role Play", 
    "active": true},
    
    {"src": "https://m.media-amazon.com/images/S/sonata-images-prod/US_TVOD_AquamanandTheLostKingdom_PVOD_SH/5e1f70d0-7164-4be4-b0e2-a2cb704cbf64._UR3840,1440_SX2880_FMjpg_.jpeg",
    "title": "Aquaman and The Lost Kingdom"},

    {"src": "https://m.media-amazon.com/images/S/sonata-images-prod/US_3P_TheColorPurple_Max_CS/d372605e-a525-45e2-a2d2-5f6cb34719d4._UR3840,1440_SX2160_FMwebp_.jpeg",
    "title": "The Color Purple"}
]

  return (
    <div>
        <Carousel images={carousel}/>
        <FeaturedMovie movies={featuredMovie} />
        <Content />
        <FeaturedTV movies={featuredTV} />
    </div>
  )
}

export default Homepage