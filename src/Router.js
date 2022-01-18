import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TopNav } from "./component/organisms";
import { Main, Movie, Book, BookDetail } from "./component/pages";

const Router = () => {
  return (
    <BrowserRouter>
      <TopNav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/book" element={<Book />} />
        <Route path="/book/:isbn" element={<BookDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
