import React, { useState } from 'react';

const Search = () => {
    const [searchInputValue, setSearchInputValue] = useState(''); // Store the user's search input
    const [filteredMovies, setFilteredMovies] = useState([]); // Store the filtered results
    const [loading, setLoading] = useState(false); // Track the loading state
    const [error, setError] = useState(null); // Track any errors during fetching

    const url = 'http://localhost:3001'; 

    // Handle search filtering
    const handleSearch = async () => {
        if (!searchInputValue.trim()) return;

        setLoading(true); // Set loading state to true while fetching
        setError(null); // Clear previous errors
        setFilteredMovies([]); // Clear previous search results

        const searchQuery = searchInputValue.toLowerCase();

        try {
            // Fetch the movies based on the search query
            const response = await fetch(`${url}/search?query=${searchQuery}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch movies');
            }

            const data = await response.json();

            // Filter movies based on the search query with safe checks
            const filtered = data.filter(movie =>
                (movie.title && movie.title.toLowerCase().includes(searchQuery)) ||
                (movie.director && movie.director.toLowerCase().includes(searchQuery)) ||
                (movie.actor && movie.actor.toLowerCase().includes(searchQuery)) ||
                (movie.genre && movie.genre.toLowerCase().includes(searchQuery))
            );

            setFilteredMovies(filtered); // Update the filtered movies
        } catch (err) {
            setError(err.message); // Handle errors
        } finally {
            setLoading(false); // Stop loading state
        }
    };

    return (
            <div>
            <div className='container d-flex justify-content-center align-items-center m-3'>
            <input
                class="form-control"
                type="text"
                value={searchInputValue}
                onChange={(e) => setSearchInputValue(e.target.value)}
                placeholder="Search by title, director, actor, or genre"
            />
            <button onClick={handleSearch} class="btn btn-outline-success" type="submit">Search</button>

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            </div>
            <div className="container d-flex justify-content-center align-items-center">
            <div className="d-flex flex-wrap col-md-8">
                {filteredMovies.length > 0 ? (
                    filteredMovies.map(movie => (
                        <div
                            key={movie.id}
                            className="card bg-dark text-white"
                            style={{
                                width: "200px",
                                borderRadius: "10px",
                                margin: "10px",
                            }}
                        >
                            <img
                                className="card-img-top"
                                src="../Movie_Background.png"  // Replace with your movie image URL or movie.poster
                                alt={movie.title}
                                style={{
                                    height: "150px", // Adjust as needed
                                    objectFit: "cover", // Ensures the image fits without distortion
                                    borderTopLeftRadius: "10px",
                                    borderTopRightRadius: "10px"
                                }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{movie.title || 'No Title Available'}</h5>
                                <p className="card-text">Movie Id: {movie.movie_id || 'Unknown'}</p>
                                <p className="card-text">Director: {movie.director || 'Unknown'}</p>
                                <p className="card-text">Year: {movie.year || 'Unknown'}</p>
                                <p className="card-text">Genre: {movie.genre || 'Unknown'}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    !loading && <p className="text-center">No movies found</p>
                )}
            </div>
        </div>
        </div>
    );
};

export default Search;
