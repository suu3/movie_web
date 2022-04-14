import React, { useState, useEffect } from "react";
import { MovieData } from "../API/data";
import "../css/carousel.scss";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import styled from "styled-components";
import { cursorTo } from "readline";

interface CarouselProps {
  movies: MovieData[];
}

const Carousel: React.FC<CarouselProps> = (props) => {
  const handleLeftArrow = () => {
    const updateMovies = [...movies];
    const element = updateMovies.shift() as MovieData;
    updateMovies.push(element);
    setMovies(updateMovies);
  };
  const handleRightArrow = () => {
    const updateMovies = [...movies];
    const element = updateMovies.pop() as MovieData;
    updateMovies.unshift(element);
    setMovies(updateMovies);
  };
  const handleMouseOver = (e: React.MouseEvent<HTMLImageElement>) => {
    e.currentTarget.style.opacity = "50%";
    e.currentTarget.style.cursor = "pointer";
  };
  const handleMouseOut = (e: React.MouseEvent<HTMLImageElement>) => {
    e.currentTarget.style.opacity = "100%";
  };

  const [movies, setMovies] = useState<MovieData[]>([]);
  useEffect(() => {
    setMovies(props.movies);
  }, []);
  return (
    <div className="carousel-wrap">
      <BiChevronLeftCircle onClick={handleLeftArrow} className="leftArrow" />
      <div className="carousel-container">
        <ul className="carousel">
          {movies &&
            movies.map((movie: MovieData, index: number) => {
              return (
                <li key={index}>
                  <img
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    alt="poster"
                    src={movie.medium_cover_image}
                  />
                </li>
              );
            })}
        </ul>
      </div>
      <BiChevronRightCircle onClick={handleRightArrow} className="rightArrow" />
    </div>
  );
};

export default Carousel;
