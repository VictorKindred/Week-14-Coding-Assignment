import React, { useState } from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import Stars from "./Stars";
import "./MovieCard.css";

function MovieCard({ movie }) {
  // Manage whether card is expanded/collapsed
  const [expanded, setExpanded] = useState(false);

  // Change expanded state
  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <div className="movie-card" onClick={toggleExpanded}>
      <img src={movie.image} alt={movie.title}/>
      <h3>{movie.name}</h3>
      <p>Genre: {movie.genre.join(", ")}</p>
      <Stars rating={movie.stars} movieId={movie.id}/>
      {expanded && (
        <div>
          
          <ReviewList reviews={movie.reviews}/>
          <ReviewForm movieId={movie.id}/>
        </div>
      )}
    </div>
  );
}
export default MovieCard;
