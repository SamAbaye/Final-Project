import React from "react";


const Cards = ({ title, year, genre, director, movie_id}) => {
  return (
    <div
      className="card bg-dark text-white"
      style={{
        width: "200px",
        borderRadius: "10px",
        margin: "10px",
      }}
    >
      <img
        className="card-img-top"
        src='../Movie_Background.png'  
        alt={title}
        style={{
          height: "150px", // Adjust as needed
          objectFit: "cover", // Ensures the image fits without distortion
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px"
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{movie_id}</h5>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Director: {director}</p>
        <p className="card-text">Year: {year}</p>
        <p className="card-text">Genre: {genre}</p>
      </div>
    </div>
  );
}

export default Cards;
