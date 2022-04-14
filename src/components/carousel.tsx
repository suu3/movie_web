import React from "react";
import { MovieData } from "../API/data";
import "../css/carousel.scss";

interface CarouselProps {
  movies: MovieData[];
}
const Carousel: React.FC<CarouselProps> = (props) => {
  return (
    <ul className="carousel">
      {props.movies &&
        props.movies.map((movie: MovieData) => {
          return <div key={movie.id}>{movie.title}</div>;
        })}
    </ul>
  );
};

export default Carousel;
