import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MovieDetail: React.FC = (props) => {
  let location = useLocation();
  let navigate = useNavigate();
  useEffect(() => {
    if (location.state === undefined) {
      navigate("/");
    }
  });
  return <div>detail</div>;
};

export default MovieDetail;
