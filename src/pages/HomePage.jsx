import React, { useState, useEffect } from "react";
import AnimeCard from "../Components/AnimeCard";
import FilterBar from "../Components/FilterBar";
import animes from "../data/anime";

function HomePage() {
  const [genreFilter, setGenreFilter] = useState("ALL"); //setting them to ALL means no filter
  const [ratingFilter, setRatingFilter] = useState("ALL");
  const [filteredAnimes, setFilteredAnimes] = useState(animes);

  useEffect(() => {
    // animes.filter filters the animes array and applies the "test" defined in the function 
    const filter = animes.filter(
      (anime) =>
        (genreFilter === "ALL" || anime.genre.includes(genreFilter)) &&
        (ratingFilter === "ALL" || anime.rating.toString() === ratingFilter)
    );
    setFilteredAnimes(filter);
  }, [genreFilter, ratingFilter]);

return (
    <div>
        <FilterBar setGenreFilter={setGenreFilter} setRatingFilter={setRatingFilter} />
        {filteredAnimes.map(anime => (
            <AnimeCard key ))}
    </div>
)





}
