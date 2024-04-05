import * as authHandler from "./authPageHandler.js";

const eyeIcon = document.getElementById('eyeIcon');
eyeIcon.addEventListener('click', authHandler.togglePasswordVisibility);
// email
const emailInput = document.getElementById('email');
emailInput.addEventListener('focusin', authHandler.inputFocusInStyle);
emailInput.addEventListener('focusout', (event) => {
  const inputEmail = emailInput.value;
  const targetElement = event.target.parentElement;
  if (inputEmail.length === 0) {
    authHandler.inputErrorStyle(event);
    authHandler.addErrorMessage("이메일을 입력해 주세요", targetElement);
  } else if(!authHandler.validateEmail(inputEmail)) {
    authHandler.inputErrorStyle(event);
    authHandler.addErrorMessage("잘못된 이메일 형식입니다", targetElement);
  } else {
    authHandler.inputSuccessStyle(event);
    authHandler.removeErrorMessage(targetElement);
  }
  authHandler.formCheck();
});
// password
const paswordInput = document.getElementById('password');
paswordInput.addEventListener('focusin', authHandler.inputFocusInStyle);
paswordInput.addEventListener('focusout', (event) => {
  const inputPassword = paswordInput.value;
  const targetElement = event.target.parentElement;
  if (inputPassword.length === 0) {
    authHandler.inputErrorStyle(event);
    authHandler.addErrorMessage("비밀번호를 입력해 주세요", targetElement);
  } else if (!authHandler.validatePasswordLength(inputPassword)) {
    authHandler.inputErrorStyle(event);
    authHandler.addErrorMessage("비밀번호를 8자 이상 입력해 주세요", targetElement);
  } else {
    authHandler.inputSuccessStyle(event);
    authHandler.removeErrorMessage(targetElement);
  }
  authHandler.formCheck();
});

// focus 발생, errorMessage체크, submit
const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', (event) => {
  authHandler.validateAuthForm(event , "item.html");
});


