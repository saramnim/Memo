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

## API
[API 문서](https://documenter.getpostman.com/view/24016515/2s935rJ2s6)</br>
`localhost:3000`을 변수 `{{HOST}}`로 저장</br>
![image](https://user-images.githubusercontent.com/112938316/217225568-456e9cb0-e925-499c-9de5-3c587426d23a.png)

- MeMo List</br>
![image](https://user-images.githubusercontent.com/112938316/217225690-1abf41cb-fbc9-4ce5-87aa-5042dbb8ca49.png)</br>
![image](https://user-images.githubusercontent.com/112938316/217225786-38d67963-dccb-4b82-b2bf-c401cde931ac.png)

- MeMo Detail</br>
![image](https://user-images.githubusercontent.com/112938316/217225856-45cfe1e9-ff31-4902-ad40-053fbdc9b08e.png)</br>
![image](https://user-images.githubusercontent.com/112938316/217225888-a99b7750-e93b-4f46-a267-a0c7777d92af.png)

- MeMo Create</br>
![image](https://user-images.githubusercontent.com/112938316/217226110-d69e809e-5218-4100-9256-c6577007bf0c.png)</br>
![image](https://user-images.githubusercontent.com/112938316/217226165-7c4439f4-7c39-4f0d-824a-563749951748.png)

- MeMo Edit</br>
![image](https://user-images.githubusercontent.com/112938316/217226262-ad06ab7d-9424-4ca8-b57a-e93b2b762130.png)</br>
![image](https://user-images.githubusercontent.com/112938316/217226310-c076cca1-b999-4b87-b949-5ff68acc807d.png)

- MeMo Delete</br>
![image](https://user-images.githubusercontent.com/112938316/217226359-b80d6e5e-5c06-4e95-b8ec-0f370a50f8ee.png)</br>
![image](https://user-images.githubusercontent.com/112938316/217226392-fcdc0a34-eb03-4740-a77c-3b632c75475f.png)

## 추후 예정
2단계: HTML 구성

3단계: CSS 구성

4단계: React 구성

5단계: TS 구성
