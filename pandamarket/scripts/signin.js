import * as authPageHandler from "./authPageHandler.js";

const eyeIcon = document.getElementById('eyeIcon');
eyeIcon.addEventListener('click', authPageHandler.togglePasswordVisibility);
// email
const emailInputFocus = document.getElementById('email-focus');
emailInputFocus.addEventListener('focusin', authPageHandler.inputFocusInStyle);
emailInputFocus.addEventListener('focusout', (event) => {
  const inputEmail = emailInputFocus.value;
  const targetElement = event.target.parentElement;
  if (inputEmail.length === 0) {
    authPageHandler.inputErrorStyle(event);
    authPageHandler.generateErrorMessage("이메일을 입력해 주세요", targetElement);
  } else if(!authPageHandler.validateEmail(inputEmail)) {
    authPageHandler.inputErrorStyle(event);
    authPageHandler.generateErrorMessage("잘못된 이메일 형식입니다", targetElement);
  } else {
    authPageHandler.inputSuccessStyle(event);
    authPageHandler.removeErrorMessage(targetElement);
  }
});
// password
const passwordInputFocus = document.getElementById('password-focus');
passwordInputFocus.addEventListener('focusin', authPageHandler.inputFocusInStyle);
passwordInputFocus.addEventListener('focusout', (event) => {
  const inputPassword = passwordInputFocus.value;
  const targetElement = event.target.parentElement;
  if (inputPassword.length === 0) {
    authPageHandler.inputErrorStyle(event);
    authPageHandler.generateErrorMessage("비밀번호를 입력해 주세요", targetElement);
  } else if (!authPageHandler.validatePasswordLength(inputPassword)) {
    authPageHandler.inputErrorStyle(event);
    authPageHandler.generateErrorMessage("비밀번호를 8자 이상 입력해 주세요", targetElement);
  } else {
    authPageHandler.inputSuccessStyle(event);
    authPageHandler.removeErrorMessage(targetElement);
  }
});

// focus 발생, errorMessage체크, submit
const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', (event) => {
  authPageHandler.validateAuthForm(event , "item.html");
});


