import { useState } from "react";
import styled from "styled-components";
import { MovieList } from "../organisms";
import { getMovieList } from "../../apis/movie"; // default를 하지 않아 {} 중괄호로 묶어주어야한다.

const Movie = () => {
  const [value, setValue] = useState("");
  const [movieList, setMovieList] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const params = {
      query: value,
    };
    const { items } = await getMovieList(params);
    setMovieList(items);
  };

  return (
    <div>
      <h1>movie</h1>
      <Form onSubmit={handleSubmit}>
        <InputText value={value} onChange={(e) => setValue(e.target.value)} />
        <BtnSubmit>검색</BtnSubmit>
      </Form>
      <MovieList data={movieList} />
    </div>
  );
};

const Form = styled.form`
  display: flex;
  padding: 10px;
`;

const InputText = styled.input`
  flex: 1;
  margin-right: 10px;
`;
const BtnSubmit = styled.button``;

export default Movie;
