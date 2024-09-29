import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home'; // Use Home instead of HomePage
import Admin from './components/Admin';
import Movies from './components/Movies';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <div className='vh-100 vw-100 bg-light'>
            <Navbar/>
             <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/movies" element={<Movies />} />   
            </Routes>
            </div>
        </Router>
        
    );
};

export default App;
