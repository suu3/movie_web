import React, { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { searchMovies } from "API/data";
import { SearchData } from "types/common";

interface Props {
  setReady: React.Dispatch<React.SetStateAction<boolean>>;
  setMovies: React.Dispatch<React.SetStateAction<SearchData[]>>;
  setRange: React.Dispatch<React.SetStateAction<string>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
const SearchInput = ({ setReady, setMovies, setRange, setLoading }: Props) => {
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
  );
};

export default SearchInput;
