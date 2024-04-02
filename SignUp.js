const emailInput = document.querySelector(".email-input");
const passwordInput = document.querySelector(".password-input");
const nicknameInput = document.querySelector(".nickname-input");
const checkPasswordInput = document.querySelector(".check-password-input");
const loginButton = document.querySelector(".login-button");

emailInput.addEventListener("focusout", validateEmail);
passwordInput.addEventListener("focusout", validatePassword);
checkPasswordInput.addEventListener("focusout", validateCheckPassword);
nicknameInput.addEventListener("focusout", validateNickname);

function validateEmail() {
  const emailRegex = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.com$/;
  const errorText = document.querySelector(".email-error");

  if (!emailInput.value) {
    errorText.textContent = "이메일을 입력해주세요.";
    emailInput.style.border = "1px solid red";
  } else if (!emailRegex.test(emailInput.value)) {
    errorText.textContent = "잘못된 이메일 형식입니다";
    emailInput.style.border = "1px solid red";
  } else {
    errorText.textContent = "";
    emailInput.style.border = "";
  }
  toggleButtonState();
}

function validatePassword() {
  const errorText = document.querySelector(".pass-error");
  if (!passwordInput.value) {
    errorText.textContent = "비밀번호를 입력해주세요.";
    passwordInput.style.border = "1px solid red";
  } else if (passwordInput.value.length < 8) {
    errorText.textContent = "비밀번호를 8자 이상 입력해주세요.";
    passwordInput.style.border = "1px solid red";
  } else {
    passwordInput.style.border = "";
    errorText.textContent = "";
  }
  toggleButtonState();
}
function validateNickname() {
  const errorText = document.querySelector(".nick-error");
  if (!nicknameInput.value) {
    errorText.textContent = "닉네임을 입력해주세요";
    nicknameInput.style.border = "1px solid red";
  } else {
    nicknameInput.style.border = "";
    errorText.textContent = "";
  }
  toggleButtonState();
}
function validateCheckPassword() {
  const errorText = document.querySelector(".pass-check-error");
  if (passwordInput.value !== checkPasswordInput.value) {
    errorText.textContent = "비밀번호가 일치하지 않습니다.";
    checkPasswordInput.style.border = "1px solid red";
  } else {
    checkPasswordInput.style.border = "";
    errorText.textContent = "";
  }
  toggleButtonState();
}

function toggleButtonState() {
  const errors = document.querySelectorAll('div[style="color: red;"]');
  if (
    emailInput.value &&
    passwordInput.value &&
    checkPasswordInput.value &&
    nicknameInput.value &&
    checkPasswordInput.value === passwordInput.value &&
    errors.length === 0
  ) {
    loginButton.disabled = false;
    loginButton.style.backgroundColor = "";
    loginButton.addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "/signin";
    });
  } else {
    loginButton.disabled = true;
    loginButton.style.backgroundColor = "grey";
  }
}

toggleButtonState();
