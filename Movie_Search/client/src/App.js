import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home'; // Use Home instead of HomePage
import Search from './components/Search';
import Admin from './components/Admin';
import AllMovies from './components/AllMovies';
import Movies from './components/Movies';

const App = () => {
    return (
        <Router>
             <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/allmovies" element={<AllMovies />} />
                    <Route path="/movies" element={<Movies />} />   
            </Routes>
        </Router>
        
    );
};

export default App;
