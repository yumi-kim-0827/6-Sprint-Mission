const emailInput = document.querySelector("#email");
const errorEmail = document.querySelector("#errorEmail");
const nicknameInput = document.querySelector("#nickname");
const errorNickname = document.querySelector("#errorNickname");
const passwordInput = document.querySelector("#password");
const errorPassword = document.querySelector("#errorPassword");
const passwordConfirmInput = document.querySelector("#password-confirm");
const errorPasswordConfirm = document.querySelector("#errorPasswordConfirm");
const signupForm = document.querySelector(".signup-form");
const signupBtn = document.querySelector(".signup-btn");

let flagEmail = true; //비활성
let flagPassword = true;
let flagNickname = true;
let flagPasswordConfirm = true;

const handleSingupBtnState = () => {
  isSignup = flagEmail || flagPassword || flagNickname || flagPasswordConfirm;
  signupBtn.disabled = isSignup;
};

handleSingupBtnState();

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

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
  handleSingupBtnState();
});

nicknameInput.addEventListener("focusout", () => {
  const nickname = nicknameInput.value.trim();

  if (nickname === "") {
    errorNickname.textContent = "닉네임을 입력해주세요.";
    nicknameInput.classList.add("error-border");
    flagNickname = true;
  } else {
    errorNickname.textContent = "";
    nicknameInput.classList.remove("error-border");
    flagNickname = false;
  }
  handleSingupBtnState();
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
  handleSingupBtnState();
});

passwordConfirmInput.addEventListener("focusout", () => {
  const passwordConfirm = passwordConfirmInput.value.trim();

  if (passwordConfirm === "") {
    errorPasswordConfirm.textContent = "비밀번호를 입력해주세요.";
    passwordConfirmInput.classList.add("error-border");
    flagPasswordConfirm = true;
  } else if (passwordConfirm.length < 8) {
    errorPasswordConfirm.textContent = "비밀번호를 8자 이상 입력해주세요";
    passwordConfirmInput.classList.add("error-border");
    flagPasswordConfirm = true;
  } else if (passwordConfirm !== passwordInput.value.trim()) {
    errorPasswordConfirm.textContent = "비밀번호가 일치하지 않습니다.";
    passwordConfirmInput.classList.add("error-border");
    flagPasswordConfirm = true;
  } else {
    errorPasswordConfirm.textContent = "";
    passwordConfirmInput.classList.remove("error-border");
    flagPasswordConfirm = false;
  }
  handleSingupBtnState();
});


signupBtn.addEventListener("click", function () {
  console.log(signupBtn.disabled);
  if (!signupBtn.disabled) {
    console.log("hello");
    location.href = "../items.html";
  }
});
