import React, { useState, useRef } from "react";
import "styles/search.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { searchMovies } from "API/data";
import { SearchData } from "types/common";
import Loading from "components/loading";
import { BiCalendarStar } from "react-icons/bi";

const Search = () => {
  const [range, setRange] = useState<string>("");
  const [ready, setReady] = useState<boolean>(true);
  const [movies, setMovies] = useState<SearchData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const inputRef = useRef<HTMLInputElement>(null!);
  async function getAPI(text: string) {
    const result = await searchMovies(text);
    if (result === undefined) {
      setReady(true);
      return;
    }
    setMovies(result.dailyBoxOfficeList);
    setRange(result.showRange);
    setLoading(false);
  }
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const text = inputRef.current?.value;
      if (text === "") return;
      setReady(false);
      setLoading(true);
      getAPI(text);
      inputRef.current.value = "";
    }
  };
  return (
    <>
      <div className="search">
        <label htmlFor="query" style={{ display: "none" }}>
          query input
        </label>
        <input
          ref={inputRef}
          onKeyPress={handleKeyPress}
          name="query"
          placeholder="box office ranking of 'yyyymmdd'"
          maxLength={30}
        ></input>

        <AiOutlineSearch
          style={{ transform: "translateX(-130%)", fontSize: "2.5rem" }}
        />
      </div>
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
              return (
                <li className="search-movie">
                  <div className="ranking">{movie.rank}</div>
                  <div className="movie-info">
                    <h4>{movie.movieNm}</h4>
                    <div>
                      <label>Open Date</label>
                      <div>{movie.openDt}</div>
                      <label>Audience Count</label>
                      <div>{movie.audiCnt}</div>
                      <label>Sales Count</label>
                      <div>{movie.salesAcc}</div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
};

export default Search;
