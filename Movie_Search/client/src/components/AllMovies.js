import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  const url = 'http://localhost:3001';
  
  //Fetch movies from the backend and Fetch movies when the component mounts
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
  
          // Set movies state if there are movies
          if (data.length > 0) {
            setMovies(data);
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
  }, []);  // The empty array makes sure this runs only once when the component mounts
 

  return (
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
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
};

export default AllMovies;
