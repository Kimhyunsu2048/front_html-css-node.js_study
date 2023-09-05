// require --> import 를 뜻합니다.. 이 함수를 이용해서 특정 모듈을 코드내로 가져오는 역할을 합니다.
const http = require('http');

// createServer() 를 호출하면 내부적으로 요청과 응답을 처리할 수 있는 객체를 리턴합니다.
// 따라서 어떤 요청이 왔는지, 응답은 어떻게 할지를 정의 해야 하는데, 이 두개의 객체를 이용해서 콜백으로 처리합니다.
// Lambda 함수 : 화살표함수의 정식 이름.. 콜백을 정의할때 많이 사용하죠?

http.createServer((req,res)=>{
  // 응답객체를 이용해서 응답 헤더설정하고, data 도 보내볼게요..
  res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'}); //<html><head><body></body></head></html>
  res.write("<h1>Hello Node World</h1>");
  res.write("<p>안녕하세요..초보자분들!!</p>");
}).listen(9080, ()=>{
    console.log("9080 포트로 서버가 대기중입니다.");
});
// 위에서 http 서버를 생성했으면, 특정 포트를 열어서 응답을 기다리도록 합니다.. listen() 메서드에 정의하시면 됩니다.



