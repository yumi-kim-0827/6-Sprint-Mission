const emailInput = document.querySelector(".email-input");
const passwordInput = document.querySelector(".password-input");
const loginButton = document.querySelector(".login-button");

emailInput.addEventListener("focusout", validateEmail);
passwordInput.addEventListener("focusout", validatePassword);

function validateEmail() {
  const errorText = document.querySelector(".email-error");
  const emailRegex = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.com$/;

  if (!emailInput.value) {
    errorText.textContent = "이메일을 입력해주세요.";
    emailInput.style.border = "1px solid red";
  } else if (!emailRegex.test(emailInput.value)) {
    errorText.textContent = "잘못된 이메일 형식입니다";
    emailInput.style.border = "1px solid red";
  } else {
    emailInput.style.border = "";
    errorText.textContent = "";
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

function toggleButtonState() {
  const emailErrorText = document.querySelector(".email-error").textContent;
  const passErrorText = document.querySelector(".pass-error").textContent;
  const isEmailValid = emailInput.value && emailErrorText === "";
  const isPasswordValid = passwordInput.value && passErrorText === "";

  if (isEmailValid && isPasswordValid) {
    loginButton.disabled = false;
    loginButton.style.backgroundColor = "";
    loginButton.addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "/items";
    });
  } else {
    loginButton.disabled = true;
    loginButton.style.backgroundColor = "#9ca3af";
  }
}

toggleButtonState();
