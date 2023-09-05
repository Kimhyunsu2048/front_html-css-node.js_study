async function showSome(){
    
    // fetch() : 내부적으로 ajax 를 수행하는 함수입니다. 즉 비동기 요청을 수행하는 함수라고 생각하시면 됩니다.
    // 스크립트 계열에서는 많이 쓰이는 대표적 함수 입니다.
    // 요청받은 URL은 이름값을 확인 후 RestFul 방식으로 데이터를 전달 하도록 정의되어있습니다.(서버에서..)
    
    // await : 기다린다는 의미로 반드시 async 함수내부에서만 사용가능한 키워드입니다.
    // 내부적으로 요청을 보낸후 promise가 반환될때까지 기다리는 역할을 합니다.

    // RestFul Server 란 클라이언트의 요청과 응답을 모두 데이터만 주고 받는 형식으로 진행하는 형태를 말합니다.
    // 전주까지 봤던 jsp 를 이용하는 방식은 요청과 응답을 모두 form 태그등을 이용한 html 문서로만 주고 받았지만
    // REST 서버는 문서가 아닌 DATA 만 주고 받는 형식입니다.

    let gitResponse = await fetch('https://api.github.com/users/Violet-Bora-Lee'); 
    let gitUser = await gitResponse.json();

    console.log(gitUser);

}

showSome();

