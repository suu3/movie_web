import React, { useState, useEffect } from "react";
import Carousel from "./carousel";
import Movies from "./movies";
import Loading from "./loading";
import Title from "./title";
import { MovieData, getMovies } from "./data";

const Home: React.FC = () => {
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
};

export default Home;
