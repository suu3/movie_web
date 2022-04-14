import React from "react";
import { MovieData } from "../API/data";
import { useNavigate } from "react-router-dom";
import {
  AiFillStar,
  AiOutlineFileText,
  AiOutlineFieldTime,
} from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";

interface MovieProps {
  movie: MovieData;
}
const Movie: React.FC<MovieProps> = ({ movie }) => {
  const history = useNavigate();
  const handleClick = () => {
    history(`/${movie.id}/detail`, {
      state: {
        title: movie.title,
        description_full: movie.description_full,
        medium_cover_image: movie.medium_cover_image,
        background_image:
          movie.background_image === null ? null : movie.background_image,
        rating: movie.rating,
        runtime: movie.runtime,
        genres: movie.genres,
      },
    });
  };
  return (
    <li className="movie" onClick={handleClick}>
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
          <p className="row">
            <label className="label">
              <AiFillStar style={{ marginRight: ".2rem" }} />
              Rating
            </label>
            {movie.rating}
          </p>
          <p className="row">
            <label className="label">
              <AiOutlineFieldTime style={{ marginRight: ".2rem" }} />
              Running Time
            </label>
            {movie.runtime}
          </p>
          <div className="row">
            <label className="label">
              <BiCategoryAlt style={{ marginRight: ".2rem" }} />
              Genres
            </label>
            <ul>
              {movie.genres.map((genre: string, index: number) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
          </div>
          <p className="row">
            <label className="label">
              <AiOutlineFileText style={{ marginRight: ".2rem" }} />
              Summary
            </label>
          </p>
          <p className="row">
            {movie.summary.length > 180
              ? movie.summary.slice(0, 180) + "..."
              : movie.summary}
          </p>
        </div>
      </div>
    </li>
  );
};

export default Movie;
