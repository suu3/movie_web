import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "../css/movieDetail.scss";
import { MovieData } from "../API/data";
import {
  AiOutlineUpload,
  AiFillStar,
  AiOutlineFileText,
  AiOutlineFieldTime,
  AiFillDelete,
} from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";

type commentList = {
  [key: string | number]: string;
};
const MovieDetail: React.FC = (props) => {
  const textArea = useRef<HTMLTextAreaElement>(null!);
  const location = useLocation();
  const navigate = useNavigate();
  const id = useParams().id;
  const [movie, setMovie] = useState<MovieData>(undefined!);
  const [commentList, setCommentList] = useState<commentList>({});
  useEffect(() => {
    if (location.state === undefined) {
      navigate("/");
      return;
    }
    setMovie(location.state as MovieData);
  });

  const handleClick = () => {
    const text = textArea.current?.value;
    if (text === "") return;
    const updateList: commentList = { ...commentList };
    updateList[Date.now()] = text;
    setCommentList(updateList);
    textArea.current.value = "";
  };
  const handleDelete = (key: string | number) => {
    const updateList: commentList = { ...commentList };
    delete updateList[key];
    setCommentList(updateList);
  };
  return (
    <>
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
      <div className="comment">
        <div className="comment-title">Comment</div>
        <div className="input-row">
          <textarea
            maxLength={100}
            placeholder="Enter Comment"
            ref={textArea}
          />
          <button onClick={handleClick}>
            <AiOutlineUpload />
          </button>
        </div>
        <div className="border"></div>
        <ul className="comment-list">
          {Object.keys(commentList).map((key: string | number) => {
            return (
              <li key={key}>
                {commentList[key]}
                <AiFillDelete
                  className="trash"
                  onClick={() => handleDelete(key)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MovieDetail;
