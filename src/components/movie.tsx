import React from "react";
import { MovieData } from "./data";

interface MovieProps {
  movie: MovieData;
}
const Movie: React.FC<MovieProps> = ({ movie }) => {
  return (
    <li className="movie">
      <div
        className="movie_item"
        style={{
          background: `url(${movie.background_image})`,
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          zIndex: -2,
          position: "relative",
        }}
      >
        <img alt="poster" src={movie.medium_cover_image} />
        <div className="texts">
          <h2>{movie.title}</h2>
          <p>{movie.rating}</p>
          <p>{movie.runtime}</p>
          <p>
            {movie.genres.map((genre: string) => (
              <div>{genre}</div>
            ))}
          </p>
        </div>
      </div>
    </li>
  );
};

export default Movie;
