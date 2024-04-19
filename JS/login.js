const emailInput = document.querySelector('#email');
const errorEmail = document.querySelector('#errorEmail');
const passwordInput = document.querySelector("#password");
const errorPassword = document.querySelector("#errorPassword");
const loginForm = document.querySelector('.login-form');
const loginBtn = document.querySelector('.login-btn');


let flagEmail = true;//비활성
let flagPassword = true;

const handleLoginBtnState = () => {
  isLogin = flagEmail || flagPassword;
  loginBtn.disabled = isLogin;
}

handleLoginBtnState();

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

emailInput.addEventListener("focusout", () => {
  const email = emailInput.value.trim();

  if (email === "") {
    errorEmail.textContent = "이메일을 입력해주세요.";
    emailInput.classList.add("error-border");
    flagEmail = true;
  } else if (!validateEmail(email)) {
    errorEmail.textContent = "잘못된 이메일 형식입니다.";
    emailInput.classList.add("error-border");
    flagEmail = true;
  } else {
    errorEmail.textContent = "";
    emailInput.classList.remove("error-border");
    flagEmail = false;
  }
  handleLoginBtnState();
});

passwordInput.addEventListener("focusout", () => {
  const password = passwordInput.value.trim();

  if (password === "") {
    errorPassword.textContent = "비밀번호를 입력해주세요.";
    passwordInput.classList.add("error-border");
    flagPassword = true;
  } else if (password.length < 8) {
    errorPassword.textContent = "비밀번호를 8자 이상 입력해주세요";
    passwordInput.classList.add("error-border");
    flagPassword = true;
  } else {
    errorPassword.textContent = "";
    passwordInput.classList.remove("error-border");
    flagPassword = false;
  }
  handleLoginBtnState();
});

loginBtn.addEventListener("click", function () {
  console.log(loginBtn.disabled)
  if (!loginBtn.disabled) {
    console.log("hello")
    location.href = "../items.html";
  }
});