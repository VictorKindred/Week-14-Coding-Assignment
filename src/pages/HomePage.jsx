// Existing imports
import React, { useState, useEffect } from "react";
import MovieCard from "../Components/MovieCard";
import FilterBar from "../Components/FilterBar";
import movies from "../data/movie";
import "./HomePage.css";

function HomePage() {
  const [genreFilter, setGenreFilter] = useState("ALL");
  const [ratingFilter, setRatingFilter] = useState("ALL");
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    genre: "",
    synopsis: "",
    stars: "",
  });

  const addReviewToMovie = (movieId, review) => {
    const updatedMovies = filteredMovies.map((movie) =>
      movie.id === movieId
        ? { ...movie, reviews: [...movie.reviews, review] }
        : movie
    );
    setFilteredMovies(updatedMovies);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setFormData((prevFormData) => ({
        ...prevFormData,
        image: URL.createObjectURL(img),
      }));
    }
  };

  const handleNewMovie = () => {
    setFilteredMovies([
      ...filteredMovies,
      {
        ...formData,
        id: filteredMovies.length + 1,
        reviews: [], // Start with an empty array for reviews
        genre: formData.genre.split(",").map((g) => g.trim()), // Convert the string input to an array
      },
    ]);
    setShowForm(false); // Hide form after submission
    setFormData({ title: "", image: "", genre: "", synopsis: "", stars: "" }); // Reset form fields
  };

  useEffect(() => {
    let newFilteredMovies = movies.filter((movie) => {
      const genreMatch =
        genreFilter === "ALL" || movie.genre.includes(genreFilter);
      const ratingMatch =
        ratingFilter === "ALL" || movie.stars.toString() === ratingFilter;
      return genreMatch && ratingMatch;
    });
    setFilteredMovies(newFilteredMovies);
  }, [genreFilter, ratingFilter]);

  return (
    <div className="home-container">
      <div className="filter-container">
        <FilterBar
          setGenreFilter={setGenreFilter}
          setRatingFilter={setRatingFilter}
        />
        <button onClick={() => setShowForm(!showForm)}>Add New Movie</button>
      </div>
      {showForm && (
        <div className="new-movie-form">
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleInputChange}
          />
          <input type="file" onChange={handleImageChange} />
          <input
            type="text"
            name="genre"
            placeholder="Genre"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="synopsis"
            placeholder="Synopsis"
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="stars"
            placeholder="Star Rating"
            min="1"
            max="5"
            onChange={handleInputChange}
          />
          <button onClick={handleNewMovie}>Submit New Movie</button>
        </div>
      )}
      <div className="movies-container">
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            addReview={addReviewToMovie}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
