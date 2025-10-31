# movie app

---------------------------------------------------------
```
npm i axios
```
URL : https://yts.mx/api

JSON : 
Movie List : https://yts.mx/api/v2/list_movies.json
exp) https://yts.mx/api/v2/list_movies.json?quality=3D

Movie Details : movie_id or imdb_id
https://yts.mx/api/v2/movie_details.json?movie_id=10

크롬 확장프로그램 : JSON Formatter

----------------------------------------------------------

state => 
isLoading, setIsloading = useState();
movies, setMovies = useState();

-----------------------------------------------------------

# 서버와 api 통신 
  1. api 연결
  2. 통신 상태 
    ( 통신 중 ) : isLodaing = true
  3. 통신 완료 
    - isLoading = false

====> 함수 동작 
* async ~ await : 통신 상태에 들어가있는 함수에서 사용, 함수 기반이다

* Network tab 에서 데이터 연결 상태 확인 
- 200 요청 성공 ok
- 400 잘못된 요청 
- 401 인증 실패
- 403 접근 권한 없음
- 404 

2. 함수에 담기 

1회 mount ok
2회 재요청시 X , 대기상태로 만들어줘야 한다.
    그래서 ----> async ~ await 


- 조건부렌더링
-----------------------------------------
  return {
    (한 덩어리)
  } 
로 반환 -----------------------------------


- 삼항, 단항 조건 연산자 쓸때 주의점 
  - 최상위 요소 1개 
  - template 내부에서 (내부)에서 다시 스크립트 작성하려면
    다시 { } 내부에 작성해야 한다. 


# 클로저 closure 
- return 함수
- react -> 반환하는 방식이 closure 함수  
- { } 렉시컬 함수, (지역)변수 
  - 은닉성을 가진다. 


- key - 문자로 받는 이유 (영문, 한글(2), 숫자(4) 각각의 byte 크기 )


// ---------------------------------------------------------
# Router
```
npm i react-router-dom
```

Button
```
npm i styled-components
```
