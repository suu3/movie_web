import React, { useState, useEffect, useRef } from "react";
import { MovieData } from "../API/data";
import "../css/carousel.scss";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

interface CarouselProps {
  movies: MovieData[];
}

const Carousel: React.FC<CarouselProps> = (props) => {
  const history = useNavigate();
  const handleClick = (movie: MovieData) => {
    history(`/${movie.id}/detail`, {
      state: {
        title: movie.title,
        medium_cover_image: movie.medium_cover_image,
        background_image:
          movie.background_image === null ? null : movie.background_image,
        rating: movie.rating,
        runtime: movie.runtime,
        genres: movie.genres,
        description_full: movie.description_full,
      },
    });
  };

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
    e.currentTarget.style.opacity = "60%";
    e.currentTarget.style.cursor = "pointer";
    e.currentTarget.style.zIndex = "-2";
    const url = e.currentTarget.dataset["url"];
    if (backgroundDiv.current !== null) {
      backgroundDiv.current.style.background = `no-repeat center/130% url(${url})`;
    }
  };
  const handleMouseOut = (e: React.MouseEvent<HTMLImageElement>) => {
    e.currentTarget.style.opacity = "100%";
    e.currentTarget.style.zIndex = "2";
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
                <li key={index} onClick={() => handleClick(movie)}>
                  <div className="movie-title">{movie.title}</div>
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
