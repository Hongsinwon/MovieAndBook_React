import axios from "axios";

const instance = axios.create({
  headers: {
    "X-Naver-Client-Id": "네이버 API 아이디",
    "X-Naver-Client-Secret": "네이버 API 비밀번호",
  },
});

export { instance };
