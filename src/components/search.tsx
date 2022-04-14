import React, { useState, useEffect } from "react";
import "../css/search.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { SearchData, searchMovies } from "../API/data";
import Loading from "./loading";

const Search = () => {
  const [movies, setMovies] = useState<SearchData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [query, setQuery] = useState<string>("");
  async function getAPI() {
    const result = await searchMovies(query);
    setMovies(result.movieList);
    setTotalCount(result.totCnt);
    setLoading(false);
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };
  useEffect(() => {
    if (query === "") return;

    getAPI();
  }, [query]);
  return (
    <>
      <div className="search">
        <label htmlFor="query" style={{ display: "none" }}>
          query input
        </label>
        <input
          onChange={handleInputChange}
          name="query"
          placeholder="Enter Movie Title.."
          maxLength={30}
        ></input>

        <AiOutlineSearch
          style={{ transform: "translateX(-130%)", fontSize: "2.5rem" }}
        />
      </div>
      {query === "" || totalCount === 0 ? (
        <div className="nothing">There is no result.</div>
      ) : loading ? (
        <Loading />
      ) : (
        <div style={{ color: "white" }}>{totalCount}</div>
      )}
    </>
  );
};

export default Search;
