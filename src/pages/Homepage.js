import React, {useContext} from 'react'
import movieContext from '../context/movieContext'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Hero';
import FeaturedMovie from '../components/FeaturedMovie';
import FeaturedTV from '../components/FeaturedTV';
import Content from '../components/Content';

const Homepage = () => {

  const context = useContext(movieContext);
  const featuredMovie = context.movies.filter((e)=> e.FeaturedMovie === 1);
  const featuredTV = context.movies.filter((e)=> e.FeaturedTV === 1);

  return (
    <div>
        <Header />
        <Carousel images={context.carousel}/>
        <FeaturedMovie movies={featuredMovie} />
        {context.contents.map((e)=> <Content content={e}/>)}
        <FeaturedTV movies={featuredTV} />

        
        <Footer />
    </div>
  )
}

export default Homepage