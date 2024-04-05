import * as authHandler from "./authPageHandler.js";

const eyeIcon = document.getElementById('eyeIcon');
const eyeIconVerify = document.getElementById('eyeIcon-verify');
eyeIcon.addEventListener('click', authHandler.togglePasswordVisibility);
eyeIconVerify.addEventListener('click', authHandler.togglePasswordVisibility);

// email
const emailInput = document.getElementById('email');
emailInput.addEventListener('focusin', authHandler.inputFocusInStyle);
emailInput.addEventListener('focusout', (event) => {
  const Email = emailInput.value;
  const targetElement = event.target.parentElement;
  if (Email.length === 0) {
    authHandler.inputErrorStyle(event);
    authHandler.addErrorMessage("이메일을 입력해 주세요", targetElement);
  } else if(!authHandler.validateEmail(Email)) {
    authHandler.inputErrorStyle(event);
    authHandler.addErrorMessage("잘못된 이메일 형식입니다", targetElement);
  } else {
    authHandler.inputSuccessStyle(event);
    authHandler.removeErrorMessage(targetElement);
  }
  // 버튼 활성화 체크
  authHandler.formCheck();
});
// nickname
const nicknameInput = document.getElementById('nickname');
nicknameInput.addEventListener('focusin', authHandler.inputFocusInStyle);
nicknameInput.addEventListener('focusout', (event) => {
  const Nickname = nicknameInput.value;
  const targetElement = event.target.parentElement;
  if (Nickname.length === 0) {
    authHandler.inputErrorStyle(event);
    authHandler.addErrorMessage("닉네임을 입력해주세요", targetElement);
  } else {
    authHandler.inputSuccessStyle(event);
    authHandler.removeErrorMessage(targetElement);
  }
  authHandler.formCheck();
});
//password
const passwordInput = document.getElementById('password');
passwordInput.addEventListener('focusin', authHandler.inputFocusInStyle);
passwordInput.addEventListener('focusout', (event) => {
  const Password = passwordInput.value;
  const targetElement = event.target.parentElement;
  if (Password.length === 0) {
    authHandler.inputErrorStyle(event);
    authHandler.addErrorMessage("비밀번호를 입력해 주세요", targetElement);
  } else if (!authHandler.validatePasswordLength(Password)) {
    authHandler.inputErrorStyle(event);
    authHandler.addErrorMessage("비밀번호를 8자 이상 입력해 주세요", targetElement);
  } else {
    authHandler.inputSuccessStyle(event);
    authHandler.removeErrorMessage(targetElement);
  }
  authHandler.formCheck();
});
//password-verify
const passwordVerifyInput = document.getElementById('password-verify');
passwordVerifyInput.addEventListener('focusin', authHandler.inputFocusInStyle);
passwordVerifyInput.addEventListener('focusout', (event) => {
  const verifyPassword = passwordVerifyInput.value;
  const password = passwordInput.value;
  const targetElement = event.target.parentElement;
  if (verifyPassword === password) {
    authHandler.inputSuccessStyle(event);
    authHandler.removeErrorMessage(targetElement);
  } else {
    authHandler.inputErrorStyle(event);
    authHandler.addErrorMessage("비밀번호가 일치하지 않습니다", targetElement);
  }
  authHandler.formCheck();
});

// focus 발생, errorMessage체크, submit
const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', (event) => {
  authHandler.validateAuthForm(event, "signin.html")
});
