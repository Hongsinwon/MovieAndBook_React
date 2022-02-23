<b>[넵플러스 프로젝트] 2022.1.10 ~ 2022.2.23


  <h1> 네이버 API을 활용한 영화 & 책검색 프로젝트 - MOVE </br> https://search-reactapp.herokuapp.com/</h1>
  
## 주요 기능 
  1. 네이버 Api를 이용한 영화 & 책 검색 리스트 출력
  2. 영화 & 책 상세페이지로 이동
  
</br>
  
## 활용 기술
  1. html
  2. css
  3. React.js
  4. node.js
  5. express
  6. heroku
##### node.js + express (깃허브 주소 - https://github.com/Hongsinwon/MovieAndBook_React_Node)

</br>

## 개요 
- 네이버 API를 이용해 API사용의 이해와 프론트엔드에 한걸음 더 가까워 지는 프로젝트를 진행하였다.
- 배포를 하였을 때 발생하는 오류에 대해 해결하기 위해 구글링과 개발지식을 길러보는 학습을 진행하였다.
 

</br>

## 1. 문제이슈 - cors
> 교차 출처 리소스 공유(Cross-Origin Resource Sharing, CORS)는 추가 HTTP 헤더를 사용하여, 한 출처에서 실행 중인 웹 애플리케이션이 다른 출처의 선택한 자원에 접근할 수 있는 권한을 부여하도록 브라우저에 알려주는 체제이다. - MDN
> 
> 여기서 origin(출처) 이란 scheme(protocol), host(domain), port 로 구성된다.
> 
> protocol은 https:// Host는 www.google.com Port는 :443 이며, 동일 출처(Same Origin)란 scheme, host, port 가 모두 같을때를 말한다.
> 
> 또한 SOP(Same-Origin Policy)이란 같은 출처에서만 리소스를 공유할 수 있다는 규칙이다. 브라우저에서 다른 서버에서 요청할 경우에 해당되고, 브라우저를 거치지 않고 서버 간 통신을 할 때는 이 정책이 적용되지 않는다.
> 
> 그런데 이런 정책이 왜 존재할까? 만약 다른 출처의 어플리케이션이 서로 통신하는 것에 대해 아무런 제약도 존재하지 않는다면 악의를 가진 사용자가 소스 코드를 보고 CSRF(Cross-Site Request Forgery) 나 XSS(Cross-Site Scripting) 와 같은 방법을 사용하여 정보를 탈취할 수 있다.
> 
> CORS는 다른 출처의 리소스가 필요한 경우,  SOP를 우회하기 위한 여러가지 방법 중 가장 권장되는 방법이다.

</br>

cors 오류해결에 도움을 주었던 블로그 - https://xiubindev.tistory.com/115

</br> 

1. client/src/apis/index.js
 ```javascript
    import axios from "axios";

    const instance = axios.create({
     baseURL: "https://search-reactapp.herokuapp.com/", //heroku주소로 변경
      headers: {
       "X-Naver-Client-Id": "Client-Id를 넣어주세요",
       "X-Naver-Client-Secret": "Client-Secret를 넣어주세요",
      },
    });

    export { instance };
 ```
 
 </br> 
 
 2. server/router/index.js :: 서버 : Access-Control-Allow-Origin 헤더 세팅하기
 ```javascript
    //영화리스트
    router.get("/movie", async function (req, res, next) {
      const result = await getMovieList(req.query);
      res.header(
        "Access-Control-Allow-Origin",
        "https://search-reactapp.herokuapp.com/"
      );
      res.send(result);
    });
    
    //책리스트
    router.get("/book", async function (req, res, next) {
      const result = await getBookList(req.query);
      res.header(
        "Access-Control-Allow-Origin",
        "https://search-reactapp.herokuapp.com/"
      );
      res.send(result);
    });

    router.get("/book/:isbn", async function (req, res, next) {
      const { isbn } = req.params;
      const params = {
       d_isbn: isbn,
      };
      const result = await getBookDetail(params);
     res.header(
       "Access-Control-Allow-Origin",
       "https://search-reactapp.herokuapp.com/"
       );
      res.send(result);
    });

 ```
 
2. server/router/index.js 추가한 내용
 
  ```javascript
     res.header(
       "Access-Control-Allow-Origin",
       "https://search-reactapp.herokuapp.com/"
       );
 ```
 
 </br> 

3. app.js  :: 서버 : CORS 미들웨어 사용하기
  ```javascript
    const app = express();

    const __dirname = path.resolve();
    const port = process.env.PORT || "8080";

    const corsOptions = {
     origin: "https://search-reactapp.herokuapp.com/",
      credentials: true,
    };
    app.use(cors(corsOptions));
 ```

</br>

--------------------------------------------

</br>
 
 ## 완성된 페이지
 
#### 1. 메인
![메인](images/main.png)
 
#### 2. 영화 검색
![영화 검색](images/movie.png)
  
#### 3. 책 검색
![책 검색](images/book.png)
   
#### 4. 책 상세페이지
![책 상세페이지](images/detail.png)

