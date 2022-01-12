import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, Movie, Book } from "./component/pages";
import { TopNav } from "./component/organisms";

const Router = () => {
  return (
    <BrowserRouter>
      <TopNav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
