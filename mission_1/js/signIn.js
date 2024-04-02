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
    $emailError.textContent = "이메일을 입력해주세요.";
    $emailError.classList.add("show");
    $emailInput.classList.add("error");
    inputValidObj.email = false;
    checkInputValid();
  } else if (e.target.value.length > 0 && !e.target.validity.valid) {
    $emailError.textContent = "잘못된 이메일 형식입니다.";
    $emailError.classList.add("show");
    $emailInput.classList.add("error");
    inputValidObj.email = false;
    checkInputValid();
  } else {
    $emailError.classList.remove("show");
    $emailInput.classList.remove("error");
    inputValidObj.email = true;
    checkInputValid();
  }
});

$passwordInput.addEventListener("focusout", (e) => {
  if (!e.target.value) {
    $pwdError.textContent = "비밀번호를 입력해주세요.";
    $pwdError.classList.add("show");
    $passwordInput.classList.add("error");
    inputValidObj.password = false;
    checkInputValid();
  } else if (e.target.value.length > 0 && e.target.value.length < 8) {
    $pwdError.textContent = "비밀번호를 8자 이상 입력해주세요.";
    $pwdError.classList.add("show");
    $passwordInput.classList.add("error");
    inputValidObj.password = false;
    checkInputValid();
  } else {
    $pwdError.classList.remove("show");
    $passwordInput.classList.remove("error");
    inputValidObj.password = true;
    checkInputValid();
  }
});
