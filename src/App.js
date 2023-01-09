import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import LoadingSpinner from "./UI/LoadingSpinner";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoviesHandler = () => {
    setIsLoading(true);
    fetch("https://swapi.dev/api/films/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMovies(transformedMovies);
        setIsLoading(false);
      });
  };

  return (
    <>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>Found no movies.</p>}
        {isLoading && <LoadingSpinner />}
      </section>
    </>
  );
}

export default App;
