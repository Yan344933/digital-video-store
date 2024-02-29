import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import movieContext from './context/movieContext';  
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListingPage from './pages/ListingPage';

function App() {

  const [movies, setMovies] = useState([]);
  const [carousel, setCarousel] = useState([]);
  const [contents, setContents] = useState([]);

  useEffect(() => {
    
    fetch('http://localhost:5000/carousel', {
      method: 'get'
    }).then((res) => {
        return res.json()
    }).then((data)=> setCarousel(data));

    fetch('http://localhost:5000/Movies', {
      method: 'get'
    }).then((res) => {
        return res.json()
    }).then((data)=> {
      setMovies(data)
    });

    fetch('http://localhost:5000/Contents', {
      method: 'get'
    }).then((res) => {
        return res.json()
    }).then((data)=> setContents(data));
  }, [])

  return (
    <movieContext.Provider value = {{carousel, movies, contents}}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element = {<Homepage />} />
            <Route path="/movie" element = {<ListingPage />} />
          </Routes>
        </BrowserRouter>
    </movieContext.Provider>
  );
}

export default App;


//npx json-server ./src/db.json --port 5000