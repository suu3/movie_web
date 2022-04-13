import React from "react";
import { MovieData } from "./data";

interface MovieProps {
  movie: MovieData;
}
const Movie: React.FC<MovieProps> = ({ movie }) => {
  return (
    <li className="movie">
      <img alt="poster" src={movie.medium_cover_image} />
      <div className="texts">
        <h2 key={movie.id}>{movie.title}</h2>
      </div>
    </li>
  );
};

export default Movie;
