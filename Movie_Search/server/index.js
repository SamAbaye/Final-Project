require('dotenv').config();
const express = require('express');
const app = express();
const pool = require("../db");
const cors = require('cors');
const e = require('cors');

app.use(express.json());
app.use(cors());
const url = process.env.DB_URL;

console.log(url);

const getMovies = async () => {
    try {
        const movies = await pool.query(
            'SELECT * FROM movies'
        );
        return movies.rows;
    } catch (error) {
        console.error(error);
    }
};

// This is a get request where we get all the movies from the database and send it to the client using title as a query 
app.get('/search', async (req, res) => {
    try {  
        console.log("url" + url);
            const title = req.query.title;
            console.log(title);
            const movieSearch = await pool.query(
                'SELECT * FROM movies WHERE title ILIKE ($1)',
                [`%${title}%`]
            );
            console.log(movieSearch.rows);

         if(movieSearch.rows.length === 0){
           return res.status(404).json("Movie not Found!")
        }

            res.json(movieSearch.rows);
         } 
    catch (error) {
        console.error(error);
        res.status(500).json("Internal server Error");
    }

});

// This is a post request where we add a new movie to the database
app.post('/addMovie', async (req, res) => {
    try {
        const {movie_id, title, director, budget, description, genre, year, date, runtime, summary } = req.body;
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
            'SELECT * FROM movies WHERE movie_id = $1 AND title = $2 AND director = $3',
            [movie_id, title, director]
        );
// If movie already exists, return Movie already exists else insert new movie
        if (existingMovie.rows.length > 0) {
            return res.status(400).json("Movie already exists");
        } else {
            const newMovie = await pool.query(
            'INSERT INTO movies (movie_id, title, director, budget, description, genre, year, date, runtime, summary) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
            [movie_id, title, director, budget, description, genre, year, date, runtime, summary]
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
        // Check if movie_id is a number
        if (!movie_id) {
            return res.status(400).json("Please enter all fields");
        }
        // Check if movie_id is a positive number
        console.log(movie_id);
        if (isNaN(movie_id)) {
            return res.status(400).json("Movie ID must be a number");
        }
        // Check if movie_id is a positive number
        if (movie_id <= 0) {
            return res.status(400).json("Movie ID must be positive");
        }
        // Check if movie exists
        const  existingMovie = await pool.query(
            'SELECT * FROM movies WHERE movie_id = $1',
            [movie_id]
        )
        if (existingMovie.rows.length === 0) {
            return res.status(404).json("Movie not found");
        } else  {
            // Delete movie
            const deleteMovie = await pool.query(
            'DELETE FROM movies WHERE movie_id = $1',
            [movie_id]
        );
        res.json("Movie was deleted");}
        
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal server Error");
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
        res.json("Movie was updated");}

    } catch (error) {
        console.error(error);
        res.status(500).json("Internal server Error");
    }
});
const PORT = 3001;
app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
});


















