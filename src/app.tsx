import "./app.scss";
import React, { useState, useEffect } from "react";
import Carousel from "./components/carousel";
import Movies from "./components/movies";
import Loading from "./components/loading";
import Title from "./components/title";
import { MovieData, getMovies } from "./components/data";

function App() {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  async function getAPI() {
    setMovies(await getMovies());
    setLoading(false);
  }

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <>
      <Title />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Carousel movies={movies.slice(0, 8)} />
          <Movies movies={movies} />
        </>
      )}
    </>
  );
}

export default App;
