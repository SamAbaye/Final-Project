import React, { useState, useEffect } from 'react';
import Cards from './Cards';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const url = 'http://localhost:3001';

    // Fetch movies from the backend when the component mounts
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(`${url}/search`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log(data);

                    // Check if the data length is greater than 5
                    if (data.length > 5) {
                        const movieSelection = data.slice(0, 4);
                        setMovies(movieSelection);  // Update the state with the new movies
                    }
                } else {
                    console.error('Failed to fetch movies. Status:', response.status);
                }
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        // Call the async function
        fetchMovies();
    }, []); // Empty array ensures the useEffect runs only once when the component mounts

    return (
        <div className="h-100 text-center overflow-auto">
            <div className="container mt-5">
                <div className="row">
                    {movies.length > 0 ? (
                        movies.map((movie) => (
                            <div className="col-md-3 mb-2" key={movie.id}>
                                <Cards
                                    title={movie.title}
                                    director={movie.director}
                                    year={movie.year}
                                    genre={movie.genre}
                                />
                            </div>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
