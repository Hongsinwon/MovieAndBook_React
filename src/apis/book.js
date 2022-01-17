import axios from "axios";

export const getBookList = async (params) => {
  const { data } = await axios.get("/v1/search/book.json", {
    headers: {
      "X-Naver-Client-Id": "y0X6A9DNHYg_o_EIHtNm",
      "X-Naver-Client-Secret": "K0CQnEHgjy",
    },
    params,
  });

  return data;
};
