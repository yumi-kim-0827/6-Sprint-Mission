const $emailInput = document.getElementById("emailInput");
const $passwordInput = document.getElementById("passwordInput");
const $nicknameInput = document.getElementById("nicknameInput");
const $pwdCheckInput = document.getElementById("passwordCheckInput");

const $emailError = document.getElementById("emailError");
const $nicknameError = document.getElementById("nicknameError");
const $pwdError = document.getElementById("pwdError");
const $pwdCheckError = document.getElementById("pwdCheckError");

const $loginButton = document.getElementById("loginButton");

const inputValidObj = {
  email: false,
  nickname: false,
  password: false,
  pwdCheck: false,
};

const checkInputValid = () => {
  const { email, nickname, password, pwdCheck } = inputValidObj;
  $loginButton.classList.toggle(
    "enable",
    email && password && nickname && pwdCheck
  );
  $loginButton.classList.toggle(
    "disable",
    !email || !password || !nickname || !pwdCheck
  );
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

$nicknameInput.addEventListener("focusout", (e) => {
  if (!e.target.value) {
    $nicknameError.textContent = "닉네임을 입력해주세요.";
    $nicknameError.classList.add("show");
    $nicknameInput.classList.add("error");
    inputValidObj.nickname = false;
    checkInputValid();
  } else {
    $nicknameError.classList.remove("show");
    $nicknameInput.classList.remove("error");
    inputValidObj.nickname = true;
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

$pwdCheckInput.addEventListener("focusout", (e) => {
  if (e.target.value !== $passwordInput.value) {
    $pwdCheckError.textContent = "비밀번호가 일치하지 않습니다.";
    $pwdCheckError.classList.add("show");
    $pwdCheckInput.classList.add("error");
    inputValidObj.pwdCheck = false;
    checkInputValid();
  } else if (e.target.value === $passwordInput.value) {
    $pwdCheckError.classList.remove("show");
    $pwdCheckInput.classList.remove("error");
    inputValidObj.pwdCheck = true;
    checkInputValid();
  }
});
