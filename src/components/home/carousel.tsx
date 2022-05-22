import React, { useState, useEffect, useRef } from "react";
import { MovieData } from "types/common";
import "styles/carousel.scss";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

interface CarouselProps {
  movies: MovieData[];
}

const Carousel: React.FC<CarouselProps> = (props) => {
  const [isMouseOver, setIsMouseOver] = useState<boolean[]>();
  const [backgroundUrl, setBackgroundUrl] = useState<string>("");
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

  const handleMouseOver = (index: number) => {
    setBackgroundUrl(movies[index].background_image);
    setIsMouseOver((prev) => {
      if (prev) {
        const newArray = [...prev];
        newArray[index] = true;
        return newArray;
      }
    });
  };
  const handleMouseOut = (index: number) => {
    setBackgroundUrl("");
    setIsMouseOver((prev) => {
      if (prev) {
        const newArray = [...prev];
        newArray[index] = false;
        return newArray;
      }
    });
  };

  const [movies, setMovies] = useState<MovieData[]>([]);
  useEffect(() => {
    setMovies(props.movies);
    setIsMouseOver(Array(props.movies.length).fill(false));
  }, [props.movies]);
  return (
    <div
      className="carousel-wrap"
      style={
        backgroundUrl === ""
          ? { background: "none" }
          : { background: `no-repeat center/130% url(${backgroundUrl})` }
      }
    >
      <BiChevronLeftCircle onClick={handleLeftArrow} className="leftArrow" />
      <div className="carousel-container">
        <ul className="carousel">
          {movies &&
            movies.map((movie: MovieData, index: number) => {
              return (
                <li key={index} onClick={() => handleClick(movie)}>
                  <div className="movie-title">{movie.title}</div>
                  <img
                    style={
                      isMouseOver && isMouseOver[index]
                        ? {
                            opacity: "60%",
                            cursor: "pointer",
                            zIndex: "-2",
                          }
                        : {
                            opacity: "100%",
                            cursor: "pointer",
                            zIndex: "2",
                          }
                    }
                    data-url={movie.background_image}
                    onMouseOver={() => handleMouseOver(index)}
                    onMouseOut={() => handleMouseOut(index)}
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
