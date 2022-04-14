import React, { useState, useEffect } from "react";
import Movies from "./movies";
import Loading from "./loading";
import PageNumber from "./PageNumber";
import { MovieData, getMovies } from "../API/data";
import "../css/list.scss";

const List: React.FC = () => {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [sortBy, setSortBy] = useState<string>("rating");
  async function getAPI() {
    setMovies(await getMovies(sortBy));
    setLoading(false);
  }
  const [page, setPage] = useState(1);
  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.currentTarget.value);
  };
  useEffect(() => {
    setLoading(true);
    getAPI();
  }, [sortBy]);

  return (
    <>
      <div className="sort_by">
        <label htmlFor="select">Sort By</label>
        <select onChange={handleSelectChange}>
          <option value="rating">Rating</option>
          <option value="year">Year</option>
          <option value="like_count">Like Count</option>
        </select>
      </div>
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
    </>
  );
};

export default List;
