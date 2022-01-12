import axios from "axios";

export const getMovieList = async (params) => {
  // 첫번째 인자는 api의 주소를 적어준다.
  // 두번째 인자는 query: value이 params에 담겨 넘어온다  params <- 객체

  // 개발용으로 package.json에서 "proxy": "https://openapi.naver.com"을 진행. 빌드할땐 사용하지 못한다 text용.
  //https://openapi.naver.com/v1/search/movie.json
  const { data } = await axios.get("/v1/search/movie.json", {
    headers: {
      "X-Naver-Client-Id": "y0X6A9DNHYg_o_EIHtNm",
      "X-Naver-Client-Secret": "K0CQnEHgjy",
    },
    params,
  });

  console.log(data);
  return data;
};
