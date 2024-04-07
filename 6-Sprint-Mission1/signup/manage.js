document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("input-email");
  const passwordInput = document.querySelector(".password");

  emailInput.addEventListener("focusout", function () {
    const email = emailInput.value.trim();
    const emailError = document.getElementById("email-error");
    emailError.textContent = "";

    if (email === "") {
      emailError.textContent = "이메일을 입력해주세요.";
      emailInput.classList.add("error");
    } else if (!isValidEmail(email)) {
      emailError.textContent = "잘못된 이메일 형식입니다.";
      emailInput.classList.add("error");
    } else {
      emailInput.classList.remove("error");
    }
  });

  passwordInput.addEventListener("focusout", function () {
    const password = passwordInput.value.trim();
    const passwordError = document.getElementById("password-error");
    passwordError.textContent = "";

    if (password === "") {
      passwordError.textContent = "비밀번호를 입력해주세요.";
      passwordInput.classList.add("error");
    } else if (password.length < 8) {
      passwordError.textContent = "비밀번호를 8자 이상 입력해주세요.";
      passwordInput.classList.add("error");
    } else {
      passwordInput.classList.remove("error");
    }
  });

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
