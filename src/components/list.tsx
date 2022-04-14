import React, { useState, useEffect } from "react";
import Movies from "./movies";
import Loading from "./loading";
import { MovieData, getMovies } from "./data";

const List: React.FC = () => {
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
      {loading ? (
        <Loading />
      ) : (
        <>
          <Movies movies={movies} />
        </>
      )}
    </>
  );
};

export default List;
