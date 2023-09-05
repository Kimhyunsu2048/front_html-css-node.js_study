// 이번에는 서버 객체를 생성해서 이벤트를 이용한 서버 start 를 해볼게요

const http = require('http');

// 서버 객체를 생성합니다.
const server = http.createServer((req,res)=>{
    // 응답객체를 이용해서 응답 헤더설정하고, data 도 보내볼게요..
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'}); //<html><head><body></body></head></html>
    res.write("<h1>Hello Node World</h1>");
    res.write("<p>이건 Node 서버2의 내용입니다.</p>");
  });
  // 서버 포트를 대기시킵니다.
  server.listen(9080);

  // 서버에 이벤트를 적용해서 콜백으로 요청 성공과 실패를 처리할게요.
  server.on('listening', ()=>{
    console.log("9080에서 서버 대기중");
  });

  // 아래의 error는 예외가 발생하는 경우 예외의 내용을 담은 객체가 던져지는데, 이를 error 라는 변수로 받겠다는 의미입니다.
  server.off('error',(error)=>{
    console.log(error);
  });




