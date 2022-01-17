import { useState, useEffect } from "react";
import { InputText, Form, BtnSubmit } from "../atoms";
import { MovieList, Pagination  } from "../organisms";
import { getMovieList } from "../../apis/movie"; // default를 하지 않아 {} 중괄호로 묶어주어야한다.
import { countryList } from "../../datas"; //나라선택 Select List

const Movie = () => {
  const [page, setPage] = useState(1); //Pagination 을 누를때마다 page숫자가 변한다. (props로 받아옴)
  const [country, setCountry] = useState(countryList[0].code);  //country 값이 바뀔때마다 searchMovie() 실행
  const [value, setValue] = useState("");
  const [query, setQuery] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [total, setTotal] = useState(0); // items의 갯수


  useEffect(() => {
    searchMovie();
  }, [country, page, query]);//country, page, query 이 바뀔때마다 searchMovie(); 실행
  //value로 하지 않는 것이 setValue(e.target.value)이 될때마다 실행(한개 칠때마다 실행)

//setPage, setQuery 둘이 동시에 실행되기때문에 useEffect가 1번 카운팅된다.
  const handleSubmit = (e) => {
    e.preventDefault(); 
    setPage(1);//재검색했을때 기존페이지에 계속 머무는 것을 방지하기 위해.
    setQuery(value); //query안 value안에 추가될때 실행된다. 
  };

  //api 통신
  const searchMovie = async () => {
    if (!query) return; //value값이 없으면 return => 이걸 쓰면 400오류가 난다.
    const start = page * 10 - 9; // 1=1~10개, 2=11~20개, 3=21~30개, 4=31~40개, 5=41~50개...(페이지 시작을 알려준다.)
    //const params = {query: query(=value), country : country, start= page * 10 - 9;}
    const params = { query, start};
    if (country !== "ALL") {
      params.country = country; //All 이 아닐때 params에 country를 넣어라
    }
    const { items, total } = await getMovieList(params); // getMovieList가 비동기라 async/awiat 실행
    setMovieList(items);
    setTotal(total);
  };

  return (
    <div>
      <h1>movie</h1>
      <Form onSubmit={handleSubmit}>
      <select onChange={(e) => setCountry(e.target.value)}>
          {countryList.map(({ code, name }) => (
            <option value={code} key={code}>
              {name}
            </option>
          ))}
        </select>
        <InputText onChange={(e) => setValue(e.target.value)} />
        <BtnSubmit>검색</BtnSubmit>
      </Form>
      <MovieList data={movieList} />
      <Pagination 
      total={total} 
      onPageChange={(page) => setPage(page)} 
      nowPage={page} 
      />
    </div>
  );
};

export default Movie;