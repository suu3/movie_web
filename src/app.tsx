import "./app.scss";
import React from "react";
import MovieDetail from "./components/movieDetail";
import Home from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id/detail" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
