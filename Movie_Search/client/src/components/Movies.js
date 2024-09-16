import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const url = 'http://localhost:3001';

  // Fetch movies from the backend
  const getMovies = async () => {
    try {
      const response = await fetch(`${url}/search?title=The`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);

        // Set movies state if data is available
        if (data.length > 0) {
          setMovies(data);
        }
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  // Fetch movies when the component mounts
  useEffect(() => {
    getMovies();
  }, []); // Empty dependency array ensures it runs once on mount

  return (
    <div className="tc">
      <ul>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <Cards
              key={movie.id}
              title={movie.title}
              director={movie.director}
              year={movie.year}
              genre={movie.genre}
            />
          ))
        ) : (
          <p>No movies found</p>
        )}
      </ul>
    </div>
  );
};

export default Movies;
