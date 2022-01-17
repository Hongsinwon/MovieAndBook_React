import { useState, useEffect } from "react";
import { InputText, Form, BtnSubmit } from "../atoms";
import { BookList, Pagination  } from "../organisms";
import { getBookList } from "../../apis/book";

const Book = () => {
  const [value, setValue] = useState("");
  const [bookList, setBookList] = useState([]);
  const [total, setTotal] = useState(0); //빈칸으로 두면 초기값으로  undefined가 들어갑니다 
  const [query, setQuery] =useState("");
  const [page, setPage] = useState(1); 

useEffect (() => {
  searchBook();
}, [page, query])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPage(1)
    setQuery(value)
  };

  const searchBook = async() => {
    const start = page * 10 -9
    const params = {query, start};
    const { items, total } = await getBookList(params);
    setBookList(items);
    setTotal(total) //api total
  } 

  return (
    <div>
      <h1>Book</h1>
      <Form onSubmit={handleSubmit}>
        <InputText onChange={(e) => setValue(e.target.value)} />
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