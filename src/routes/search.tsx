import React, { useState, useRef } from "react";
import "styles/search.scss";

import { SearchData } from "types/common";
import Loading from "components/loading";
import { BiCalendarStar } from "react-icons/bi";
import Movie from "components/search/movie";
import SearchInput from "components/search/search-input";

const Search = () => {
  const [range, setRange] = useState<string>("");
  const [ready, setReady] = useState<boolean>(true);
  const [movies, setMovies] = useState<SearchData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
      <SearchInput
        setReady={setReady}
        setRange={setRange}
        setMovies={setMovies}
        setLoading={setLoading}
      />
      {ready ? (
        <div className="nothing">There is no result.</div>
      ) : loading ? (
        <Loading />
      ) : (
        <>
          <div className="show-range">
            <BiCalendarStar style={{ marginRight: ".8rem" }} />
            {range}
            <BiCalendarStar style={{ marginLeft: ".8rem" }} />
          </div>
          <ul className="search-ul">
            {movies.map((movie) => {
              return <Movie movie={movie} />;
            })}
          </ul>
        </>
      )}
    </>
  );
};

export default Search;
