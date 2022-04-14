import React, { useState, useEffect } from "react";
import Movies from "./movies";
import Loading from "./loading";
import PageNumber from "./PageNumber";
import { MovieData, getMovies } from "../API/data";
import "../css/list.scss";
import { Animate } from "react-simple-animate";

const List: React.FC = () => {
  const [play, setPlay] = useState<boolean>(false);
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [sortBy, setSortBy] = useState<string>("rating");
  async function getAPI() {
    setMovies(await getMovies(sortBy));
    setLoading(false);
    setPlay(true);
  }
  const [page, setPage] = useState(1);
  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.currentTarget.value);
  };
  useEffect(() => {
    setPlay(false);
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
            <Animate
              play={play}
              duration={1}
              start={{ opacity: "0", transform: "translateY(30px)" }}
              end={{ opacity: "100", transform: "translateY(0)" }}
              easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
            >
              <Movies movies={movies.slice((page - 1) * 4, page * 4)} />
            </Animate>
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
