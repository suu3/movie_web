import React, { useState, useEffect } from "react";
import Movies from "./movies";
import Loading from "./loading";
import PageNumber from "./PageNumber";
import { MovieData, getMovies } from "../API/data";
import "../css/list.scss";

const List: React.FC = () => {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  async function getAPI() {
    setMovies(await getMovies());
    setLoading(false);
  }
  const [page, setPage] = useState(1);
  const handlePageChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <div className="movie-list">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Movies movies={movies.slice((page - 1) * 4, page * 4)} />
          <PageNumber
            page={page}
            handlePageChange={handlePageChange}
            length={movies.length}
          />
        </>
      )}
    </div>
  );
};

export default List;
