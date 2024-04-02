const email = document.querySelector("input#email");
const pwd = document.querySelector("input#pwd");
const ico_hide = document.querySelector(".ico_hide");

//  warning 클래스 및 메세지 추가 함수
function warningMessage(input, message) {
  input.nextElementSibling.textContent = message;
  input.classList.add("warning");
}
function removeWarning(input) {
  input.nextElementSibling.textContent = "";
  input.classList.remove("warning");
}

// 유효성 검사 : email
function focusOutEmail(el) {
  if (!el.target.value) {
    warningMessage(email, "이메일을 입력해 주세요");
  } else if (el.target.value.indexOf("@") == -1) {
    warningMessage(email, "잘못된 이메일 형식입니다.");
  } else {
    removeWarning(email);
  }
}
email.addEventListener("focusout", focusOutEmail);

// 유효성 검사 : pwd

function focusOutPwd(el) {
  if (!el.target.value) {
    warningMessage(pwd, "비밀번호를 입력해주세요");
    ico_hide.classList.add("warned");
  } else if (el.target.value.length < 8) {
    warningMessage(pwd, "비밀번호를 8자 이상 입력해주세요");
    ico_hide.classList.add("warned");
  } else {
    removeWarning(pwd);
    ico_hide.classList.remove("warned");
  }
}
pwd.addEventListener("focusout", focusOutPwd);
/** 
input 에 빈 값이 있거나 에러 메세지가 있으면  ‘로그인’ 버튼은 비활성화 됩니다.
Input 에 유효한 값을 입력하면  ‘로그인' 버튼이 활성화 됩니다.
활성화된 ‘로그인’ 버튼을 누르면  “/items” 로 이동합니다
*/

/** 
눈 모양 아이콘 클릭시 비밀번호의 문자열이 보이기도 하고, 가려지기도 합니다.
비밀번호의 문자열이 가려질 때는 눈 모양 아이콘에는 사선이 그어져있고, 
비밀번호의 문자열이 보일 때는 사선이 없는 눈 모양 아이콘이 보이도록 합니다.
*/
