import { showError, hideError } from "./utils.js";

const $emailInput = document.getElementById("emailInput");
const $passwordInput = document.getElementById("passwordInput");
const $emailError = document.getElementById("emailError");
const $pwdError = document.getElementById("pwdError");
const $loginButton = document.getElementById("loginButton");

const inputValidObj = {
  email: false,
  password: false,
};

const checkInputValid = () => {
  const { email, password } = inputValidObj;
  $loginButton.classList.toggle("enable", email && password);
  $loginButton.classList.toggle("disable", !email || !password);
};

$emailInput.addEventListener("focusout", (e) => {
  if (!e.target.value) {
    inputValidObj.email = showError(
      $emailError,
      $emailInput,
      "이메일을 입력해주세요."
    );
  } else if (!e.target.validity.valid) {
    inputValidObj.email = showError(
      $emailError,
      $emailInput,
      "잘못된 이메일 형식입니다."
    );
  } else {
    inputValidObj.email = hideError($emailError, $emailInput);
  }
  checkInputValid();
});

$passwordInput.addEventListener("focusout", (e) => {
  if (!e.target.value) {
    inputValidObj.password = showError(
      $pwdError,
      $passwordInput,
      "비밀번호를 입력해주세요."
    );
  } else if (e.target.value.length < 8) {
    inputValidObj.password = showError(
      $pwdError,
      $passwordInput,
      "비밀번호를 8자 이상 입력해주세요."
    );
  } else {
    inputValidObj.password = hideError($pwdError, $passwordInput);
  }
  checkInputValid();
});
