require('dotenv').config();
const express = require('express');
const app = express();
const pool = require("../db");
const cors = require('cors');


app.use(express.json());
app.use(cors());
const url = process.env.DB_URL;


// This is a get request where we get all the movies from the database and send it to the client using title as a query 
app.get("/search", async (req, res) => {
    try {
      const { Title, Director, Genre, Year } = req.query;
   
   
      // Convert empty strings to null for better handling
      const titleParam = Title ? `%${Title}%` : null;
      const directorParam = Director ? `%${Director}%` : null;
      const genreParam = Genre ? `%${Genre}%` : null;
      const yearParam = Year ? Year : null;
   
   
      // Query the database with explicit type casting for parameters
      const result = await pool.query(
        `SELECT * FROM movies
         WHERE
         ($1::text IS NULL OR Title ILIKE $1) AND
         ($2::text IS NULL OR Director ILIKE $2) AND
         ($3::text IS NULL OR Genre ILIKE $3) AND
         ($4::int IS NULL OR Year = $4)`,
        [titleParam, directorParam, genreParam, yearParam]
      );

      res.status(200).json(result.rows);

    } catch (err) {
      console.error(err.message);
      res.status(500).json("Internal Server Error");
    }
   });
   

// This is a post request where we add a new movie to the database
app.post('/addMovie', async (req, res) => {
    try {
        const { title, director, budget, description, genre, year, date, runtime, summary } = req.body;
        if (!title || !director || !budget || !description || !genre || !year || !date || !runtime || !summary) {
            return res.status(400).json("Please enter all fields");
        } 
        // Check if budget and runtime are numbers       
        if (isNaN(budget) || isNaN(runtime)) {
            return res.status(400).json("Budget and Runtime must be numbers");
        } 
        // Check if budget and runtime are positive        
        if (budget <= 0 || runtime <= 0) {
            return res.status(400).json("Budget and Runtime must be positive");
        } 
        // Check if movie already exists
        const existingMovie = await pool.query(
            'SELECT * FROM movies WHERE title = $1 AND director = $2',
            [title, director]
        );
        // If movie already exists, return Movie already exists else insert new movie
        if (existingMovie.rows.length > 0) {
            return res.status(400).json("Movie already exists");
        } else {
            const newMovie = await pool.query(
            'INSERT INTO movies (title, director, budget, description, genre, year, date, runtime, summary) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
            [title, director, budget, description, genre, year, date, runtime, summary]
        );
        res.json(newMovie.rows[0]);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal server Error");
    }
});

// This is a delete request where we delete a movie from the database
app.delete('/deleteMovie', async (req, res) => {
    try {
        const { movie_id } = req.body;

        // Check if the movie exists
        const existingMovie = await pool.query(
            'SELECT * FROM movies WHERE movie_id = $1',
            [movie_id]
        );

        if (existingMovie.rows.length === 0) {
            return res.status(404).json({ status: "Movie not found" }); // Changed to return JSON
        } 

        // Delete the movie
        await pool.query(
            'DELETE FROM movies WHERE movie_id = $1',
            [movie_id]
        );
        res.status(200).json({ status: "Movie was deleted" }); // Return JSON

    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "Internal server error" }); // Return JSON
    }
});


app.put('/editMovie', async (req, res) => {
    try {
        const {movie_id, title, director, description, genre, year } = req.body;

        const  existingMovie = await pool.query(
            'SELECT * FROM movies WHERE movie_id = $1',
            [movie_id]
        )
        if (existingMovie.rows.length === 0) {
            return res.status(404).json("Movie not found");
        } else  {
            // Update movie
            const updateMovie = await pool.query(
            'UPDATE movies SET title = $1, director = $2,  description = $3, genre = $4, year = $5 WHERE movie_id = $6',
            [title, director, description, genre, year, movie_id]
        );
        res.status(200).json("Movie was updated");}

    } catch (error) {
        console.error(error);
        res.status(500).json("Internal server Error");
    }
});
const PORT = 3001;
app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
});


















