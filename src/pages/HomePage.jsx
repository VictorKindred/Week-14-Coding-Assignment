import React, { useState, useEffect } from "react";
import MovieCard from "../Components/MovieCard";
import FilterBar from "../Components/FilterBar";
import movies from "../data/movie";

function HomePage() {
  const [genreFilter, setGenreFilter] = useState("ALL"); //setting them to ALL means no filter
  const [ratingFilter, setRatingFilter] = useState("ALL");
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    // movies.filter filters the movies array and applies the "test" defined in the function
    const filter = movies.filter(
      (movie) =>
        (genreFilter === "ALL" || movie.genre.includes(genreFilter)) &&
        (ratingFilter === "ALL" || movie.rating.toString() === ratingFilter)
    );
    setFilteredMovies(filter);
  }, [genreFilter, ratingFilter]);

  return (
    <div>
      <FilterBar
        setGenreFilter={setGenreFilter}
        setRatingFilter={setRatingFilter}
      />
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default HomePage;
