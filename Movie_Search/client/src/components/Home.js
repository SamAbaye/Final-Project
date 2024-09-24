import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Movies from "./Movies";
import Admin from "./Admin";
import AllMovies from "./AllMovies";
import Search from "./Search";
const Home = () => {
    const navigate = useNavigate();
    
    const [searchInputValue, setSearchInputValue] = useState('');
    const url = 'http://localhost:3001';
    const handleSearchInputChange = (event) => {
        setSearchInputValue(event.target.value);
    };
    const handleSearch = () => {
        if (!searchInputValue.trim()) return;
        navigate(`/search?q=${encodeURIComponent(searchInputValue)}`);
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };
    return (
        <div className="home vh-100 vw-100 text-center bg-light overflow-auto">
            <ul className="nav nav-pills mb-3 bg-black justify-content-center p-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active font-Lato" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-movies-tab" data-bs-toggle="pill" data-bs-target="#pills-movies" type="button" role="tab" aria-controls="pills-movies" aria-selected="false">Movies</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-admin" type="button" role="tab" aria-controls="pills-admin" aria-selected="false">Admin</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className='nav-link' id="pills-search-tab" data-bs-toggle="pill" data-bs-target="#pills-search" type="button" role="tab" aria-controls="pills-search" aria-selected="false">Search</button>
                </li>
                <form class="d-flex" role="search">
                    <input class="form-control  " type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit" onClick={handleSearch} >Search</button>   
                </form>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div className="container mt-5">
                        <h1 className="display-4 font-monospace">Welcome to Movie Search</h1>
                        <p className="lead font-Lato">Search for your favorite movies and enjoy your time here.</p>
                    </div>
                    <Movies />
                </div>
                <div className="tab-pane fade" id="pills-admin" role="tabpanel" aria-labelledby="pills-admin-tab">
                    <div className="container mt-5">
                        <h2 className="display-4 font-monospace">Admin Panel</h2>
                        <p className="lead font-Lato">Manage movies and users here.</p>
                    <Admin />
                    </div>
                </div>
                <div className="tab-pane fade" id="pills-movies" role="tabpanel" aria-labelledby="pills-movies-tab">
                    <div className="container mt-5">
                        <h2 className="display-4 font-monospace">Movies</h2>
                        <p className="lead font-Lato">Browse and discover amazing movies.</p>
                        <AllMovies />
                    </div>
                </div>
                <div className="tab-pane fade" id="pills-search" role="tabpanel" aria-labelledby="pills-search-tab">
                    <div className="container mt-5">
                        <h2 className="display-4 font-monospace">Search</h2>
                        <p className="lead font-Lato">Search for your favorite movies and enjoy your time here.</p>
                        <Search />
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Home;    