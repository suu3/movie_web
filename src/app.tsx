import "./app.scss";
import MovieDetail from "routes/movieDetail";
import Home from "routes/home";
import Header from "components/header";
import List from "routes/list";
import Title from "components/title";
import Search from "routes/search";
import { Animate } from "react-simple-animate";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "routes/layout";

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
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<List />} />
            <Route path="/search" element={<Search />} />
            <Route path="/:id/detail" element={<MovieDetail />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
