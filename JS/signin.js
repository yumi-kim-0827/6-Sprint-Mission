// 태그불러오기
const email = document.querySelector("#email");
const password = document.querySelector('#password')
const button = document.querySelector('#button')

// 에러 코드
const PWErr = document.querySelector("#password-error");
const emailErr = document.querySelector("#email-error");

// Email
function ema() {
  let em = email.value.trim();
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (em === "") {
      emailErr.textContent = "이메일을 입력해주세요";
      emailErr.style.display = "block"
    } else if(!emailPattern.test(em) && em !== ""){
      emailErr.textContent = "이메일 형식이 아닙니다.";
      emailErr.style.display = "block"
    }else{
      emailErr.textContent = "";
      emailErr.style.display = "none"
    }
  }

  // password 
  function PWWrite() {
  let PW = password.value.trim();
  if (PW === "") {
    PWErr.textContent = "비밀번호를 입력해주세요";
  } else if (PW.length < 8) {
    PWErr.textContent = "비밀번호를 8자 이상 입력해주세요";
  } else {
    PWErr.textContent = "";
    PWErr.style.display = "none"
  }
}
    //button
    function act(){
      let em = email.value.trim();
      let PW = password.value.trim();
      let actbtn = em!==''&&PW!==''
      if(actbtn){
        button.disabled = false;
      }else{
        button.disabled = true;
      }
    }
    email.addEventListener("input", act);
    password.addEventListener("input", act);

    email.addEventListener("focusout", ema);
    password.addEventListener("focusout",PWWrite);