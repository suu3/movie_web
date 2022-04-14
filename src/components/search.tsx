import React, { useState, useEffect } from "react";
import "../css/search.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { SearchData, searchMovies } from "./data";
import Loading from "./loading";

const Search = () => {
  const [movies, setMovies] = useState<SearchData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  async function getAPI() {
    console.log(await searchMovies());
    setLoading(false);
  }

  useEffect(() => {
    getAPI();
  }, []);
  return (
    <>
      <div className="search">
        <label htmlFor="query" style={{ display: "none" }}>
          query input
        </label>
        <input
          name="query"
          placeholder="Enter Movie Title.."
          maxLength={30}
        ></input>

        <AiOutlineSearch
          style={{ transform: "translateX(-130%)", fontSize: "2.5rem" }}
        />
      </div>
      {/* {loading ? <Loading /> : <div>{movies[0].title}</div>} */}
    </>
  );
};

export default Search;
