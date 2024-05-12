import React, { useState } from "react";
import "./FilterBar.css";

// Filter by genre and rating
function FilterBar({ setGenreFilter, setRatingFilter }) {
  const [activeGenre, setActiveGenre] = useState('ALL');
  const [activeRating, setActiveRating] = useState('ALL');

  const genres = ["ALL", "Action", "Adventure", "Supernatural", "Romance", "Horror", "Comedy", "Fantasy"];
  const ratings = ["ALL", "5", "4", "3", "2", "1"];

  const handleGenreClick = (genre) => {
    setActiveGenre(genre);
    setGenreFilter(genre);
  };

  const handleRatingClick = (rating) => {
    setActiveRating(rating);
    setRatingFilter(rating);
  };

  return (
    <div className="filter-bar">
      <div>
        <label>Genre:</label>
        <div>
          {genres.map(genre => (
            <button
              key={genre}
              onClick={() => handleGenreClick(genre)}
              className={activeGenre === genre ? "active" : ""}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>
      <div>
        <label>Rating:</label>
        <div>
          {ratings.map(rating => (
            <button
              key={rating}
              onClick={() => handleRatingClick(rating)}
              className={activeRating === rating ? "active" : ""}
            >
              {rating}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
