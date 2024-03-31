document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.querySelector(".email-input");
  const passwordInput = document.querySelector(".password-input");
  const loginButton = document.querySelector(".login-button");

  emailInput.addEventListener("focusout", validateEmail);
  passwordInput.addEventListener("focusout", validatePassword);

  function validateEmail() {
    const emailErrorElement = document.createElement("div");
    emailErrorElement.style.color = "red";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    removePreviousError(emailInput);

    if (!emailInput.value) {
      emailErrorElement.textContent = "이메일을 입력해주세요.";
      emailInput.style.border = "1px solid red";
      emailInput.parentNode.insertBefore(
        emailErrorElement,
        emailInput.nextSibling
      );
    } else if (!emailRegex.test(emailInput.value)) {
      emailErrorElement.textContent = "잘못된 이메일 형식입니다";
      emailInput.style.border = "1px solid red";
      emailInput.parentNode.insertBefore(
        emailErrorElement,
        emailInput.nextSibling
      );
    } else {
      emailInput.style.border = "";
    }
    toggleButtonState();
  }

  function validatePassword() {
    const passwordErrorElement = document.createElement("div");
    passwordErrorElement.style.color = "red";
    removePreviousError(passwordInput);

    if (!passwordInput.value) {
      passwordErrorElement.textContent = "비밀번호를 입력해주세요.";
      passwordInput.style.border = "1px solid red";
      passwordInput.parentNode.insertBefore(
        passwordErrorElement,
        passwordInput.nextSibling
      );
    } else if (passwordInput.value.length < 8) {
      passwordErrorElement.textContent = "비밀번호를 8자 이상 입력해주세요.";
      passwordInput.style.border = "1px solid red";
      passwordInput.parentNode.insertBefore(
        passwordErrorElement,
        passwordInput.nextSibling
      );
    } else {
      passwordInput.style.border = "";
    }
    toggleButtonState();
  }

  function toggleButtonState() {
    const errors = document.querySelectorAll('div[style="color: red;"]');
    if (emailInput.value && passwordInput.value && errors.length === 0) {
      loginButton.disabled = false;
      loginButton.style.backgroundColor = "";
      loginButton.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "/items";
      });
    } else {
      loginButton.disabled = true;
      loginButton.style.backgroundColor = "grey";
    }
  }

  function removePreviousError(inputElement) {
    if (
      inputElement.nextSibling &&
      inputElement.nextSibling.style &&
      inputElement.nextSibling.style.color === "red"
    ) {
      inputElement.parentNode.removeChild(inputElement.nextSibling);
    }
  }

  toggleButtonState();
});
