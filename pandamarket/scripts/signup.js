import * as authPageHandler from "./authPageHandler.js";

const eyeIcon = document.getElementById('eyeIcon');
const eyeIconVerify = document.getElementById('eyeIcon-verify');
eyeIcon.addEventListener('click', authPageHandler.togglePasswordVisibility);
eyeIconVerify.addEventListener('click', authPageHandler.togglePasswordVisibility);

// emailinput
const emailInputFocus = document.getElementById('email-focus');

emailInputFocus.addEventListener('focusin', authPageHandler.inputFocusInStyle);

emailInputFocus.addEventListener('focusout', (event) => {
  const inputEmail = emailInputFocus.value;
  const targetElement = event.target.parentElement;
  if (inputEmail.length === 0) {
    authPageHandler.inputErrorStyle(event);
    // 이메일을 입력해 주세요 생성
    authPageHandler.generateErrorMessage("이메일을 입력해 주세요", targetElement);
  } else if(!authPageHandler.validateEmail(inputEmail)) {
    // 잘못된 이메일 형식입니다로 변경
    authPageHandler.inputErrorStyle(event);
    authPageHandler.generateErrorMessage("잘못된 이메일 형식입니다", targetElement);
  } else {
    authPageHandler.inputSuccessStyle(event);
    // 이메일을 입력해 주세요 or 잘못된 이메일 형식입니다 삭제
    authPageHandler.removeErrorMessage(targetElement);
  }
});
// nickname
const nicknameInputFocus = document.getElementById('nickname-focus');
nicknameInputFocus.addEventListener('focusin', authPageHandler.inputFocusInStyle);
nicknameInputFocus.addEventListener('focusout', (event) => {
  const inputNickname = nicknameInputFocus.value;
  const targetElement = event.target.parentElement;
  if (inputNickname.length === 0) {
    authPageHandler.inputErrorStyle(event);
    authPageHandler.generateErrorMessage("닉네임을 입력해주세요", targetElement);
  } else {
    authPageHandler.inputSuccessStyle(event);
    authPageHandler.removeErrorMessage(targetElement);
  }
});
//passwordinput
const passwordInputFocus = document.getElementById('password-focus');

passwordInputFocus.addEventListener('focusin', authPageHandler.inputFocusInStyle);

passwordInputFocus.addEventListener('focusout', (event) => {
  const inputPassword = passwordInputFocus.value;
  const targetElement = event.target.parentElement;
  if (inputPassword.length === 0) {
    authPageHandler.inputErrorStyle(event);
    // 비밀번호를 입력해 주세요 생성
    authPageHandler.generateErrorMessage("비밀번호를 입력해 주세요", targetElement);
  } else if (!authPageHandler.validatePasswordLength(inputPassword)) {
    authPageHandler.inputErrorStyle(event);
    // 비밀번호를 8자 이상 입력해 주세요로 변경
    authPageHandler.generateErrorMessage("비밀번호를 8자 이상 입력해 주세요", targetElement);
  } else {
    authPageHandler.inputSuccessStyle(event);
    // 비밀번호를 입력해주세요 or 비밀번호를 8자 이상 입력해 주세요 삭제
    authPageHandler.removeErrorMessage(targetElement);
  }
});
//password-verify
const passwordVerifyInputFocus = document.getElementById('password-verify-focus');
passwordVerifyInputFocus.addEventListener('focusout', (event) => {
  const inputVerifyPassword = passwordVerifyInputFocus.value;
  const inputPassword = passwordInputFocus.value;
  const targetElement = event.target.parentElement;
  if (inputVerifyPassword === inputPassword) {
    authPageHandler.inputSuccessStyle(event);
    authPageHandler.removeErrorMessage(targetElement);
  } else {
    authPageHandler.inputErrorStyle(event);
    authPageHandler.generateErrorMessage("비밀번호가 일치하지 않습니다", targetElement);
  }
})

// 버튼 눌렀을 때 form이 나가지 않고 먼저 error가 있는지 전부 실행해봄
const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', (event) => {
  authPageHandler.validateAuthForm(event, "signin.html")
});
