// 태그불러오기
const email = document.querySelector("#email");
const nickname = document.querySelector('#nickName')
const password = document.querySelector('#password')
const PWcheck = document.querySelector('#PwCheck')
const button = document.querySelector('#button')

// 에러 코드
const PWErr = document.querySelector("#password-error");
const PWCErr = document.querySelector("#pw-check-error");
const emailErr = document.querySelector("#email-error");
const nickErr = document.querySelector("#nick-error");

//input 값


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
    // nickname
  function ni() {
    let nick = nickname.value.trim();
    if (nick === "") {
      nickErr.textContent = "닉네임를 입력해주세요";
    } else {
      nickErr.textContent = "";
      nickErr.style.display = "none"
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
    //password checker
    function PWC(){
      let PW = password.value.trim();
      let pwCheck = PWcheck.value.trim();
      if (PW !== pwCheck) {
        PWCErr.textContent = "비밀번호가 일치하지 않습니다"
      } else {
        PWCErr.textContent = "";
        PWCErr.style.display = "none"
     }
    }
    //button
    function act(){
      let em = email.value.trim();
      let nick = nickname.value.trim();
      let PW = password.value.trim();
      let pwCheck = PWcheck.value.trim();
      console.log('함수실행')
      let actbtn = em!==''&&nick!==''&&PW!==''&&pwCheck!==''&&PW === pwCheck;
      if(actbtn){
        button.disabled = false;
        console.log('함수작동')
      }else{
        button.disabled = true;
        console.log('미작동')
      }
 
    }
    email.addEventListener("input", act);
    nickname.addEventListener("input", act);
    password.addEventListener("input", act);
    PWcheck.addEventListener("input", act);




    email.addEventListener("focusout", ema);
    nickname.addEventListener("focusout",ni);
    password.addEventListener("focusout",PWWrite);
    PWcheck.addEventListener("focusout",PWC)

    
