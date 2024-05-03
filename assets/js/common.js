const inputWrap = document.querySelector("form-wrap");
const inputText = document.querySelector("form-wrap input");
const inputErrMsg = document.querySelector("form-wrap .errMsg");

function errorMsg(e) {
  //값없음 체크
  if (e.target.value) {
    console.log("입력은했네");
  } else {
    //console.log("입력안했네");
    // p를 찾아
    // p에 클래스랑 텍스트 넣어줘
    //끝

    msg = document.querySelector(".parent .child1");
    console.log(inputText.parentElement);
  }
}

inputWrap.addEventListener("focusout", errorMsg);

// 1-1. 이메일일 "값없음"

// 1-2. 비번일때 "값없음"

/////////////////////////////////////////////

// 2. 이메일 이상할때 에러뱉기

/////////////////////////////////////////////

// 3. 비번 이상할때 에러뱉기

// 4. 빈값, 에러메세지 있으면 로그인 버튼 비활성화인데 아니면 활성화
