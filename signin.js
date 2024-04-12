document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.querySelector('input[name="email"]');
  const passwordInput = document.querySelector('input[name="password"]');
  const passwordToggle = document.getElementById("passwordToggle");
  const loginButton = document.querySelector(".loginSection__submit");
  const emailError = document.querySelector(".email-error");
  const passwordError = document.querySelector(".password-error");

  emailInput.addEventListener("blur", function (event) {
    validateEmail(emailInput, emailError);
  });
  passwordInput.addEventListener("blur", validatePassword);
  emailInput.addEventListener("input", toggleButtonState);
  passwordInput.addEventListener("input", toggleButtonState);
  passwordToggle.addEventListener("click", togglePasswordVisibility);
  loginButton.addEventListener("click", handleLogin);

  function validateEmail(emailInput, emailError) {
    const emailValue = emailInput.value.trim();
    if (emailValue === "") {
      showError(emailInput, emailError, "이메일을 입력해주세요.");
    } else if (!isValidEmail(emailValue)) {
      showError(emailInput, emailError, "잘못된 이메일 형식입니다.");
    } else {
      clearError(emailInput, emailError);
    }
  }

  function validatePassword() {
    const passwordValue = passwordInput.value.trim();
    if (passwordValue === "") {
      showError(passwordInput, passwordError, "비밀번호를 입력해주세요.");
      return false;
    } else if (passwordValue.length < 8) {
      showError(
        passwordInput,
        passwordError,
        "비밀번호를 8자 이상 입력해주세요."
      );
      return false;
    } else {
      clearError(passwordInput, passwordError);
      return true;
    }
  }

  function toggleButtonState() {
    const emailValid = validateEmail();
    const passwordValid = validatePassword();
    loginButton.disabled = !(emailValid && passwordValid);
  }

  function togglePasswordVisibility() {
    const isPasswordHidden = passwordInput.getAttribute("type") === "password";

    if (isPasswordHidden) {
      passwordInput.setAttribute("type", "text");
      passwordToggle.src = "images/home/openeyes.png";
    } else {
      passwordInput.setAttribute("type", "password");
      passwordToggle.src = "images/home/closeeyes.png";
    }
  }

  function handleLogin(event) {
    event.preventDefault();
    if (toggleButtonState()) {
      window.location.href = "/items";
    }
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showError(inputElement, errorElement, errorMessage) {
    inputElement.classList.add("error");
    errorElement.innerText = errorMessage;
  }

  function clearError(inputElement, errorElement) {
    inputElement.classList.remove("error");
    errorElement.innerText = "";
  }
});
