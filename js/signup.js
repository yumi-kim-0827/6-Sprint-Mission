document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".login__form");
  const emailInput = loginForm.querySelector("#login__input-email");
  const usernameInput = loginForm.querySelector("#login__input-username");
  const passwordInput = loginForm.querySelector("#login__input-password");
  const passwordCheckInput = loginForm.querySelector(
    "#login__input-password-check"
  );
  const loginButton = loginForm.querySelector(".login__submit");

  // 에러 상태 표시 여부 저장 변수
  let emailErrorDisplayed = false;
  let usernameErrorDisplayed = false;
  let passwordErrorDisplayed = false;
  let passwordCheckErrorDisplayed = false;

  // 초기설정
  loginButton.disabled = true;

  // 이벤트 리스너 추가
  emailInput.addEventListener("focusout", validateEmail);
  emailInput.addEventListener("focus", clearEmailError);
  usernameInput.addEventListener("focusout", validateUsername);
  usernameInput.addEventListener("focus", clearUsernameError);
  passwordInput.addEventListener("focusout", validatePassword);
  passwordInput.addEventListener("focus", clearPasswordError);
  passwordCheckInput.addEventListener("focusout", validatePasswordCheck);
  passwordCheckInput.addEventListener("focus", clearPasswordCheckError);
  loginButton.addEventListener("click", moveToItems);

  // 유효성 검사 함수
  function validateEmail() {
    const email = emailInput.value.trim();

    if (email === "") {
      showError(emailInput, "이메일을 입력해주세요");
      emailErrorDisplayed = true;
    } else if (!validateEmailFormat(email)) {
      showError(emailInput, "잘못된 이메일 형식입니다");
      emailErrorDisplayed = true;
    } else {
      clearError(emailInput);
      emailErrorDisplayed = false;
    }

    toggleLoginButton();
  }

  function validateUsername() {
    const username = usernameInput.value.trim();

    if (username === "") {
      showError(usernameInput, "닉네임을 입력해주세요");
      usernameErrorDisplayed = true;
    } else {
      clearError(usernameInput);
      usernameErrorDisplayed = false;
    }

    toggleLoginButton();
  }

  function validatePassword() {
    const password = passwordInput.value.trim();

    if (password === "") {
      showError(passwordInput, "비밀번호를 입력해주세요");
      passwordErrorDisplayed = true;
    } else if (password.length < 8) {
      showError(passwordInput, "비밀번호를 8자 이상 입력해주세요");
      passwordErrorDisplayed = true;
    } else {
      clearError(passwordInput);
      passwordErrorDisplayed = false;
    }

    toggleLoginButton();
  }

  function validatePasswordCheck() {
    const password = passwordInput.value.trim();
    const passwordCheck = passwordCheckInput.value.trim();

    if (passwordCheck === "") {
      showError(passwordCheckInput, "비밀번호를 다시 한 번 입력해주세요");
      passwordCheckErrorDisplayed = true;
    } else if (passwordCheck !== password) {
      showError(passwordCheckInput, "비밀번호가 일치하지 않습니다");
      passwordCheckErrorDisplayed = true;
    } else {
      clearError(passwordCheckInput);
      passwordCheckErrorDisplayed = false;
    }

    toggleLoginButton();
  }

  // 유틸리티 함수
  function validateEmailFormat(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  function showError(input, message) {
    if (!input.classList.contains("error")) {
      input.classList.add("error");
      const errorDiv = document.createElement("div");
      errorDiv.textContent = message;
      errorDiv.className = "error-message";
      input.parentNode.appendChild(errorDiv);
    }
  }

  function clearError(input) {
    input.classList.remove("error");
    const errorMessages = input.parentNode.querySelectorAll(".error-message");
    errorMessages.forEach(function (errorMessage) {
      errorMessage.remove();
    });
  }

  function clearEmailError() {
    if (emailErrorDisplayed) {
      clearError(emailInput);
      emailErrorDisplayed = false;
    }
  }

  function clearUsernameError() {
    if (usernameErrorDisplayed) {
      clearError(usernameInput);
      usernameErrorDisplayed = false;
    }
  }

  function clearPasswordError() {
    if (passwordErrorDisplayed) {
      clearError(passwordInput);
      passwordErrorDisplayed = false;
    }
  }

  function clearPasswordCheckError() {
    if (passwordCheckErrorDisplayed) {
      clearError(passwordCheckInput);
      passwordCheckErrorDisplayed = false;
    }
  }

  function toggleLoginButton() {
    loginButton.disabled =
      emailErrorDisplayed ||
      usernameErrorDisplayed ||
      passwordErrorDisplayed ||
      passwordCheckErrorDisplayed;
  }

  function moveToItems() {
    window.location.href = "/items";
  }
});
