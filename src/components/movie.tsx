import React from "react";
import { MovieData } from "./data";
import { useNavigate } from "react-router-dom";

interface MovieProps {
  movie: MovieData;
}
const Movie: React.FC<MovieProps> = ({ movie }) => {
  const history = useNavigate();
  const onClick = () => {
    history(`{/${movie.id}/detail}`, { state: { title: movie.title } });
  };
  return (
    <li className="movie" onClick={onClick}>
      <div
        className="movie_item"
        style={{
          background: `no-repeat center/130% url(${movie.background_image})`,
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
