import { BrowserRouter, Routes, Route } from "react-router-dom";
//index.js 파일명을 적지않아도 자동으로 적용이 되어 폴더명만 적는다.
import { Main, Movie, Book } from "./component/pages";
import { TopNav } from "./component/organisms";

//https://reactrouter.com/
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
