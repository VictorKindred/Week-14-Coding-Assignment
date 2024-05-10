import React from "react";

function AnimeCard({ anime }) {
  return (
    <div className="anime-card">
      <h3>{anime.name}</h3>
      <p>Genre: {anime.genre.join(', ')}</p>
      <p>Rating: {anime.rating}</p>
      <p>Comments: {anime.comments}</p>
    </div>
  );
}
export default AnimeCard
