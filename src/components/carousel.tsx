import React, { useState, useEffect, useRef } from "react";
import { MovieData } from "../API/data";
import "../css/carousel.scss";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";

interface CarouselProps {
  movies: MovieData[];
}

const Carousel: React.FC<CarouselProps> = (props) => {
  const backgroundDiv = useRef<HTMLDivElement>(null);
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
    e.currentTarget.style.opacity = "70%";
    e.currentTarget.style.cursor = "pointer";
    const url = e.currentTarget.dataset["url"];
    console.log(url);
    console.log(backgroundDiv.current);
    if (backgroundDiv.current !== null) {
      backgroundDiv.current.style.background = `no-repeat center/130% url(${url})`;
    }
  };
  const handleMouseOut = (e: React.MouseEvent<HTMLImageElement>) => {
    e.currentTarget.style.opacity = "100%";
    if (backgroundDiv.current !== null) {
      backgroundDiv.current.style.background = "none";
    }
  };

  const [movies, setMovies] = useState<MovieData[]>([]);
  useEffect(() => {
    setMovies(props.movies);
  }, []);
  return (
    <div className="carousel-wrap" ref={backgroundDiv}>
      <BiChevronLeftCircle onClick={handleLeftArrow} className="leftArrow" />
      <div className="carousel-container">
        <ul className="carousel">
          {movies &&
            movies.map((movie: MovieData, index: number) => {
              return (
                <li key={index}>
                  <img
                    data-url={movie.background_image}
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
