// async 과 await
// promise 를 좀더 쉽게 구현하도록 정의된 객체입니다.
// 먼저 async 함수부터 볼게요.. 이 키워드는 반드시 함수앞에 붙습니다.
// 이렇게 붙이게 되면 이 함수는 항상 Promise 를 리턴하도록 되어집니다.
// 때문에 기존에 Promise 객체를 생성해서 리턴 결과에 따른 분기 작업 코드량을 많이 줄일 수 있습니다.

async function f(){
    return 1;
}

f().then(alert("ss"));



