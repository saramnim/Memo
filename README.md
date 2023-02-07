# Memo
## 사용 스택
`node.js`, `express.js`</br>

## 시작 방법
`npm start`로 시작

## 페이지
1 단계: 서버 구현</br>
![image](https://user-images.githubusercontent.com/112938316/217218574-626577d3-a7a3-4956-906f-9b19c16f4f28.png)</br>
![image](https://user-images.githubusercontent.com/112938316/217218621-0c7ead1e-6748-4261-8025-f33787614b71.png)</br>
![image](https://user-images.githubusercontent.com/112938316/217218683-a7c1b501-a646-40fd-97c3-83d1af76b62e.png)</br>
위와 같은 오류 사항에 대한 메세지를 출력하도록 코드를 구성
```
app.use((err, req, res, next) => {
    res.status(500);
    res.json({
        result: 'fail',
        error: err.message,
    });
});
```

## 추후 예정
2단계: HTML 구성

3단계: CSS 구성

4단계: React 구성

5단계: TS 구성
