import axios from "axios";

const instance = axios.create({
  headers: {
    "X-Naver-Client-Id": "y0X6A9DNHYg_o_EIHtNm",
    "X-Naver-Client-Secret": "K0CQnEHgjy",
  },
});

export { instance };
