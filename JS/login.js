const emailInput = document.querySelector('#email');
const errorEmail = document.querySelector('#errorEmail');
const loginForm = document.querySelector('.login-form');
const loginBtn = document.querySelector('.login-btn');

validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

loginBtn.disabled = true;

emailInput.addEventListener("focusout", () => {
  const email = emailInput.value.trim();

  if (email === "") {
    errorEmail.textContent = "이메일을 입력해주세요.";
    emailInput.classList.add("error-border");
    loginBtn.disabled = true;
    return;
  }

  if (!validateEmail(email)) {
    errorEmail.textContent = "잘못된 이메일 형식입니다.";
    emailInput.classList.add("error-border");
    loginBtn.disabled = true;
  } else {
    errorEmail.textContent = "";
    emailInput.classList.remove("error-border");
    loginBtn.disabled = false;
  }
});