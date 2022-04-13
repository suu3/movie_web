import React from "react";
import { MovieData } from "./data";
import Movie from "./movie";
import "../css/movies.scss";

interface MoviesProps {
  movies: MovieData[];
}
const Movies: React.FC<MoviesProps> = (props) => {
  return (
    <ul className="movies">
      {props.movies &&
        props.movies.map((movie: MovieData) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
    </ul>
  );
};

export default Movies;
