// 이 js 가 하는일은 아래와 같습니다.
// 서버를 생성하고, 요청을 기다리는데, 요청 path 를 분석합니다.
// 이때, 요청메서드를 분석해서, 해당 메서드와 path 가 올바른지를 확인 하고
// 올바르지 않은 경우엔 에러를 보냅니다.
// 만약 올바르다면, 각 요청에 따른 작업(등록, 수정, 삭제) 를 하고 그 결과를 되돌려 줍니다.
// 꼭 기억해야할 것은, 서버를 생성하면, 요청(request), 응답(response) 의 기능을 할수 있는 내장 객체가 자동으로
// 발생되어져서 콜백으로 던져진다는 겁니다.(반드시 기억하세요!!!)
// 우린 이 객체들을 이용해서 서버 작업만 하면 됩니다.

const http = require('http');
const fs = require('fs').promises; // 사용자에게 restFront.html 을 read 하는 작업을 하는 모듈
const path = require('path'); // 서버에서 사용될 자원(resource) 의 path 를 관리하는 모듈

const user = {}; // 데이터 저장용 변수(json 으로 변환되어집니다.)

http.createServer(async(req,res)=>{

    // 예외 핸들링 코드부터.. 그냥 다른 모듈을 사용할 경우엔 기본적으로 예외 핸들링을 한다라고 생각하세요..거의 그럽니다.
    try {

        // 제일먼저 할 일은 요청분석 입니다. 이 기능은 요청객체의 메서드나 속성으로 모두 정의되어있으니 가져다 쓰면됩니다.
        if(req.method === 'GET'){ // get 방식은 data를 조회할때 씁니다.
            // 어떤 path 로 get 요청을 했는지 확인해서 사용자 정보를 보냅니다.
            if(req.url === '/'){
                // 사용자가 요청한 경로가 root path 이므로 사용자가 입력할 수 있는 폼을 가진 restFront.html 을 전송합니다.
                const data = await fs.readFile(path.join(__dirname,'restFront.html')); // 디렉토리명의 파일을 찾아 넘겨줌
                res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
                // 여기서 주의할 것.. 응답 객체의 end(전송될 데이터); 를 이용하면 클라이언트에 응답이 완료되는데,
                // 자바스크립트에서는 반드시 해당 지점에서 수행을 멈추라고 할때는 return 키워드를 꼭 사용해야 합니다.
                // 안그러면, 응답을 한 후에도 다음 로직을 수행하게됩니다.!!!
                return res.end(data); // 여기까지가 사용자에게 html을 보내주는 작업끝.
            }else if(req.url === '/about'){
                const data = await fs.readFile(path.join(__dirname,'about.html'));
                res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
                return res.end(data);
            }
        }

    } catch (error) {
        console.log(error);
    }
}).listen(9876,()=>{
    console.log("9876 에서 서버 대기중...");
}) // End of createServer()..

// 실행방법 : 터미널창에 node restServer 입력 -> 웹 브라우저에 localhost:9876/ -> 끝에 / 를 반드시 입력할 것.
