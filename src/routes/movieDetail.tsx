import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "styles/movieDetail.scss";
import { MovieData } from "types/common";
import MovieContent from "components/movieDetail/movie-content";
import CommentList from "components/movieDetail/comment-list";

const MovieDetail: React.FC = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<MovieData>(undefined!);
  useEffect(() => {
    if (location.state === undefined) {
      navigate("/");
      return;
    }
    setMovie(location.state as MovieData);
  }, []);

  return (
    <>
      <MovieContent movie={movie} />
      <CommentList />
    </>
  );
};

export default MovieDetail;
