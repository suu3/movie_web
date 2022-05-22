import React, { useState, useEffect } from "react";
import Carousel from "components/carousel";
import Loading from "components/loading";
import { getMovies } from "API/data";
import { MovieData } from "types/common";

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
    <>{loading ? <Loading /> : <Carousel movies={movies.slice(0, 10)} />}</>
  );
};

export default Home;
