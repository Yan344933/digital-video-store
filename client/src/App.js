import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListingPage from './pages/ListingPage';
import MovieDetailPage from './pages/MovieDetailPage';
import UserProfile from './pages/UserProfile';
import Header from './components/Header';
import Footer from './components/Footer';
import userContext from './context/userContext';
import { useState } from 'react';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  return (
    <userContext.Provider value={{ isLoggedIn, setIsLoggedIn, username, setUsername }}>
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path="/" element={<Homepage />} />
          <Route path="/movie" element={<ListingPage />} />
          <Route path="/movie/:movieId" element={<MovieDetailPage />} />
          <Route path="/user" element={<UserProfile />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
