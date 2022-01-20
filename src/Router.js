import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TopNav } from "./component/organisms";
import { Main, Movie, Book, BookDetail } from "./component/pages";
// 라우터 v6 HOOK
// useLocation :: 현재 페이지 정보
// useParams :: 다이나믹 라우트 정보
// useNavigate :: 페이지 이동

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
