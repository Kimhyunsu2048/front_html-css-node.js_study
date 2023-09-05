// 이 스크립트에서는 요청이 오면 응답으로 server3.html 을 보냅니다.
// 그럴러면, html 파일을 읽어 들인후(inputstream) 해당 내용을 담은 버퍼메모리를 flush 하는 구조를 갖게됩니다.
// 이때 파일을 읽는 기능의 모듈이 필요한데, 이름이 fs 입니다.
// 그리고, 이 파일을 읽고, 버퍼에 담는 동안엔 절대 사용자에게는 응답이 되면 안되기 때문에
// promise를 이용해서 파일을 모두 read 확인이 된후 flush 되도록 해야 합니다.
// 따라서 promises 를 이용하고 함수에는 async 를 이용해서 비동기 처리를 수행하도록 정의할게요.

const http = require('http');

const fs = require('fs').promises;

http.createServer(async(req,res)=>{    
    // 콜백 함수등을 수행할때 문제가 발생될 수 있는 코드를 try로 묶고, 문제가 발생되면 그 지점에서
    // 코드 수행이 멈춰지고, catch 절로 이동하게 됩니다. 프로그래밍에서는 예외 핸들링 이라고 합니다.
    // 스크립트에서는 에러(예외) 핸들링 이라고도로 합니다.
    try{
        // 파일을 읽는 작업을 수행합니다. fs 객체의 readFile() 을 이용해서 읽으면 됩니다.
        // 단 모두 읽을때까지는 다음 수행이 이뤄지면 안되기때문에 await Promise 를 기다리게 합니다.
        const data = await fs.readFile('./server3.html'); // html 을 읽어서 버퍼에 담을때까지 Promise 를 기다립니다.
        // 위 Promise 가 리턴되면, html 파일이 모두 메모리에 담겼으니 end() 를 통해서 클라이언트에게 전송을 시킵니다.
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'}); 
        res.end(data);
    }catch(error){
      console.log(error);
      res.writeHead(500,{'Content-Type':'text/html;charset=utf-8'});
      res.end(error.message);
    }
  }).listen(8888,()=>{
    console.log("8888 포트 대기중");
  });



