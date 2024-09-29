import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Movies = () => {
  const [movies, setMovies] = useState([]); // All movies
  const [filteredMovies, setFilteredMovies] = useState([]); // Filtered movies
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Search input states
  const [titleInput, setTitleInput] = useState('');
  const [directorInput, setDirectorInput] = useState('');
  const [genreInput, setGenreInput] = useState('');

  const url = 'http://localhost:3001'; // Ensure the correct API endpoint

  // Fetch movies when the component mounts
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

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
          setMovies(data); // Store all movies
          setFilteredMovies(data); // Initialize with all movies
        } else {
          setError('Failed to fetch movies.');
        }
      } catch (err) {
        setError('Error fetching movies.');
      }

      setLoading(false);
    };

    fetchMovies();
  }, []);

  // Handle search and filter based on title, director, and genre
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form submission behavior

    const filtered = movies.filter((movie) => {
      const titleMatch = titleInput ? movie.title.toLowerCase().includes(titleInput.toLowerCase()) : true;
      const directorMatch = directorInput ? movie.director.toLowerCase().includes(directorInput.toLowerCase()) : true;
      const genreMatch = genreInput ? movie.genre.toLowerCase().includes(genreInput.toLowerCase()) : true;

      return titleMatch && directorMatch && genreMatch; // All conditions must be true
    });

    setFilteredMovies(filtered); // Update the state with filtered results
  };

  return (
    <div className="container mt-5">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="row g-3 mb-4">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Title"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Director"
            value={directorInput}
            onChange={(e) => setDirectorInput(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Genre"
            value={genreInput}
            onChange={(e) => setGenreInput(e.target.value)}
          />
        </div>
        <div className="col-md-12 text-center">
          <button type="submit" className="btn btn-primary">Search</button>
        </div>
      </form>

      {/* Loading and Error States */}
      {loading && <p>Loading movies...</p>}
      {error && <p className="text-danger">Error: {error}</p>}

      {/* Movie List */}
      <div className="row">
      {filteredMovies.length > 0 ? (
  filteredMovies.map((movie) => (
    <div className="col-md-3 mb-3" key={movie.movie_id}> {/* Use movie_id here */}
      <Cards
        movie_id={movie.movie_id} // Pass movie_id as id
        title={movie.title}
        director={movie.director}
        year={movie.year}
        genre={movie.genre}
      />
    </div>
        ))
      ) : (
        !loading && <p>No movies found</p>
      )}
      </div>
    </div>
  );
};

export default Movies;
