import React from "react";
import { SearchData } from "types/common";

interface Props {
  movie: SearchData;
}
const Movie = ({ movie }: Props) => {
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
};

export default Movie;
