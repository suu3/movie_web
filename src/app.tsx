import "./app.scss";
import MovieDetail from "./components/movieDetail";
import Home from "./components/home";
import Header from "./components/header";
import List from "./components/list";
import Title from "./components/title";
import Search from "./components/search";
import { Animate } from "react-simple-animate";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Animate
        play={true}
        end={{ opacity: 1, filter: "blur(0)" }}
        start={{ opacity: 0, filter: "blur(10px)" }}
      >
        <Title />
      </Animate>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/search" element={<Search />} />
          <Route path="/:id/detail" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
