import React, { useState } from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import Stars from "./Stars";
import "./MovieCard.css";

function MovieCard({ movie, addReview }) {
  const [expanded, setExpanded] = useState(false);

  // Click card to expand details
  const toggleExpanded = (event) => {
    event.stopPropagation(); // Stops the click event from going further
    setExpanded(!expanded);
  };

  return (
    <div className="movie-card" onClick={toggleExpanded}>
      <img src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>Genre: {movie.genre.join(", ")}</p>
      <p>Synopsis: {movie.synopsis}</p>
      <Stars rating={movie.stars} />
      {expanded && (
        <div onClick={(e) => e.stopPropagation()}>
          <ReviewList reviews={movie.reviews} />
          <ReviewForm movieId={movie.id} addReview={addReview} />
        </div>
      )}
    </div>
  );
}

export default MovieCard;
