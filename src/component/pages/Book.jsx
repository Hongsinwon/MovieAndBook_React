import { useState, useEffect } from "react";
import { InputText, Form, BtnSubmit } from "../atoms";
import { BookList, Pagination  } from "../organisms";
import { getBookList } from "../../apis/book";
import { useNavigate, useLocation } from "react-router-dom";
import qs from "qs"

const Book = () => {
  const {search} = useLocation();
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [bookList, setBookList] = useState([]);
  const [total, setTotal] = useState(0); //빈칸으로 두면 초기값으로  undefined가 들어갑니다 
  const [query, setQuery] =useState("");
  const [page, setPage] = useState(1); 

useEffect (()=> {
  const { query, page } = qs.parse(search.slice(1))
  if(query) {
    setQuery(query)
    setValue(query)
  }
  if (page) {
    setPage(page)
  }
}, [search])

useEffect(() => {
  searchBook();
}, [page, query])


  const handleSubmit = async (e) => {
    e.preventDefault();
    setPage(1)
    setQuery(value)
  };

  const searchBook = async() => {
    if (!query) return; // 값이 없으면 에러가 나서 return처리
    const start = page * 10 -9
    const params = {query, start};
    const { items, total } = await getBookList(params);
    setBookList(items);
    setTotal(total) //api total

    const search = qs.stringify({query,page});
    navigate({search});
  } 

  return (
    <div>
      <h1>Book</h1>
      <Form onSubmit={handleSubmit}>
        <InputText value={value} onChange={(e) => setValue(e.target.value)} />
        <BtnSubmit>검색</BtnSubmit>
      </Form>
      <BookList 
      data={bookList} 
      />
      <Pagination 
      nowPage={page} 
      total={total} 
      onPageChange={(page) => setPage(page) 
      } />
    </div>
  );
};

export default Book;