const email = document.querySelector("input#email");
const email__warning = email.nextElementSibling;

/** 
이메일 input에서 focus out 할 때, 값이 없을 경우 
input에 빨강색 테두리와 아래에 “이메일을 입력해주세요.” 
빨강색 에러 메세지를 보입니다.
*/
/** 
이메일 input에서 focus out 할 때, 이메일 형식에 맞지 않는 경우 
input에 빨강색 테두리와 아래에 “잘못된 이메일 형식입니다” 
빨강색 에러 메세지를 보입니다.
*/
function focusOut(el) {
  if (!el.target.value) {
    email__warning.textContent = "이메일을 입력해 주세요";
    email.classList.add("warning");
  } else if (el.target.value.indexOf("@") == -1) {
    email__warning.textContent = "잘못된 이메일 형식입니다.";
    email.classList.add("warning");
  } else {
    email__warning.textContent = "";
    email.classList.remove("warning");
  }
}
email.addEventListener("focusout", focusOut);

/** 
비밀번호 input에서 focus out 할 때, 값이 없을 경우 
아래에 “비밀번호를 입력해주세요.” 에러 메세지를 보입니다
비밀번호 input에서 focus out 할 때, 값이 8자 미만일 경우 
아래에 “비밀번호를 8자 이상 입력해주세요.” 에러 메세지를 보입니다.
*/

/** 
input 에 빈 값이 있거나 에러 메세지가 있으면  ‘로그인’ 버튼은 비활성화 됩니다.
Input 에 유효한 값을 입력하면  ‘로그인' 버튼이 활성화 됩니다.
활성화된 ‘로그인’ 버튼을 누르면  “/items” 로 이동합니다
*/
