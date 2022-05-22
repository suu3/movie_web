import React from "react";
import {
  AiFillStar,
  AiOutlineFileText,
  AiOutlineFieldTime,
} from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { Animate } from "react-simple-animate";
import { MovieData } from "types/common";

interface Props {
  movie: MovieData;
}
const MovieContent = ({ movie }: Props) => {
  return (
    <Animate
      duration={0.3}
      play={true}
      end={{ opacity: 1, filter: "blur(0)" }}
      start={{ opacity: 0, filter: "blur(10px)" }}
    >
      <li className="movieDetail">
        <div
          className="movie_item"
          style={{
            background: `no-repeat center/130% url(${movie?.background_image})`,
            backgroundRepeat: "no-repeat",
            objectFit: "cover",
            zIndex: -2,
            position: "relative",
          }}
        >
          <img alt="poster" src={movie?.medium_cover_image} />
          <div className="texts">
            <h2>{movie?.title}</h2>
            <p className="row">
              <label className="label">
                <AiFillStar style={{ marginRight: ".2rem" }} />
                Rating
              </label>
              {movie?.rating}
            </p>
            <p className="row">
              <label className="label">
                <AiOutlineFieldTime style={{ marginRight: ".2rem" }} />
                Running Time
              </label>
              {movie?.runtime}
            </p>
            <div className="row">
              <label className="label">
                <BiCategoryAlt style={{ marginRight: ".2rem" }} />
                Genres
              </label>
              <ul>
                {movie?.genres.map((genre: string, index: number) => (
                  <li key={index}>{genre}</li>
                ))}
              </ul>
            </div>
            <p className="row">
              <label className="label">
                <AiOutlineFileText style={{ marginRight: ".2rem" }} />
                Description
              </label>
            </p>
            <p className="row">{movie?.description_full}</p>
          </div>
        </div>
      </li>
    </Animate>
  );
};

export default React.memo(MovieContent);
