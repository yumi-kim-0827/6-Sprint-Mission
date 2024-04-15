document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.querySelector('input[name="userEmail"]');
  const nicknameInput = document.querySelector('input[name="nickname"]');
  const passwordInput = document.querySelector('input[name="password"]');
  const confirmPasswordInput = document.querySelector(
    'input[name="confirmPassword"]'
  );
  const passwordToggle1 = document.getElementById("passwordToggle1");
  const passwordToggle2 = document.getElementById("passwordToggle2");
  const signupButton = document.querySelector(".loginSection__submit");

  emailInput.addEventListener("blur", validateEmail);
  nicknameInput.addEventListener("blur", validateNickname);
  passwordInput.addEventListener("blur", validatePassword);
  confirmPasswordInput.addEventListener("blur", validateConfirmPassword);
  passwordToggle1.addEventListener(
    "click",
    togglePasswordVisibility(passwordInput, passwordToggle1)
  );
  passwordToggle2.addEventListener(
    "click",
    togglePasswordVisibility(confirmPasswordInput, passwordToggle2)
  );
  signupButton.addEventListener("click", handleSignup);

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isValidPassword(password) {
    return password.length >= 8;
  }

  function validateEmail() {
    return validateInput(
      emailInput,
      ".email-error",
      "이메일을 입력해주세요.",
      !isValidEmail(emailInput.value.trim()),
      "올바른 형식의 이메일이 아닙니다."
    );
  }

  function validateNickname() {
    return validateInput(
      nicknameInput,
      ".nickname-error",
      "닉네임을 입력해주세요.",
      nicknameInput.value.trim() === "",
      ""
    );
  }

  function validatePassword() {
    return validateInput(
      passwordInput,
      ".password-error",
      "비밀번호를 입력해주세요.",
      passwordInput.value.trim() === "",
      "비밀번호를 8자 이상 입력해주세요."
    );
  }

  function validateConfirmPassword() {
    const confirmPasswordValue = confirmPasswordInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    return validateInput(
      confirmPasswordInput,
      ".confirmPassword-error",
      "비밀번호를 다시 입력해주세요.",
      confirmPasswordValue === "" || confirmPasswordValue !== passwordValue,
      "비밀번호가 일치하지 않습니다."
    );
  }

  function validateInput(
    inputElement,
    errorSelector,
    emptyMessage,
    invalidCondition,
    invalidMessage
  ) {
    const errorMessage = document.querySelector(errorSelector);
    if (invalidCondition) {
      showError(inputElement, errorMessage, emptyMessage);
    } else {
      clearError(inputElement, errorMessage);
      if (invalidMessage !== "")
        showError(inputElement, errorMessage, invalidMessage);
    }
  }

  function toggleButtonState() {
    return (
      validateEmail() &&
      validateNickname() &&
      validatePassword() &&
      validateConfirmPassword()
    );
  }

  function togglePasswordVisibility(inputElement, passwordToggle) {
    return function () {
      const type =
        inputElement.getAttribute("type") === "password" ? "text" : "password";
      inputElement.setAttribute("type", type);
      passwordToggle.src =
        type === "password"
          ? "images/home/closeeyes.png"
          : "images/home/openeyes.png";
    };
  }

  function handleSignup(event) {
    event.preventDefault();
    if (toggleButtonState()) {
      window.location.href = "/signin";
    }
  }

  function showError(inputElement, errorMessageElement, errorMessage) {
    inputElement.classList.add("error");
    errorMessageElement.innerText = errorMessage;
  }

  function clearError(inputElement, errorMessageElement) {
    inputElement.classList.remove("error");
    errorMessageElement.innerText = "";
  }
});
