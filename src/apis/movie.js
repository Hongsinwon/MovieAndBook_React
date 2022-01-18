import { instance } from ".";

export const getMovieList = async (params) => {
  // 첫번째 인자는 api의 주소를 적어준다.
  // 두번째 인자는 query: value이 params에 담겨 넘어온다  params <- 객체

  // 개발용으로 package.json에서 "proxy": "https://openapi.naver.com"을 진행. 빌드할땐 사용하지 못한다 text용.
  //https://openapi.naver.com/v1/search/movie.json
  const { data } = await instance.get("/v1/search/movie.json", {
    params,
  });

  //console.log(data);
  return data;
};
