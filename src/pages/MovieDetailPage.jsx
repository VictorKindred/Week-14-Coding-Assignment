import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewList from "../Components/ReviewList";
import ReviewForm from "../Components/ReviewForm";
import MovieCard from "../Components/MovieCard";
import movies from "../data/movie";

function MovieDetailPage() {
  const { id } = useParams(); // Retrieve the movie ID from URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const foundMovie = movies.find((m) => m.id === parseInt(id));
    setMovie(foundMovie);
  }, [id]);

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} style={{ width: "200px" }} />
      <p>Genre: {movie.genre.join(", ")}</p>
      <p>Length: {movie.length} minutes</p>
      <Stars rating={movie.stars} />
      <ReviewList reviews={movie.reviews} />
      <ReviewForm movieId={movie.id} />
    </div>
  );
}

export default MovieDetailPage;
