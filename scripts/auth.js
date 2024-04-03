const emailInput = document.querySelector("#email");
const nicknameInput = document.querySelector("#nickname");
const passwordInput = document.querySelector("#password");

// 에러 요소 아이디 수집 & 에러 스타일 설정
function setError(input, errorMessageId, isError) {
  const error = document.querySelector(`#${errorMessageId}`);
  if (isError === true) {
    error.style.display = "block";
    input.style.border = "1px solid #f74747";
    input.setAttribute("aria-invalid", "true");
  } else if (isError === false) {
    error.style.display = "none";
    input.style.border = "none";
    input.removeAttribute("aria-invalid");
  }
}

// E-mail 값 검증 (event handler)
function validateEmail() {
  const emailValue = emailInput.value.trim();
  setError(emailInput, "emailEmptyError", false);
  setError(emailInput, "emailInvalidError", false);

  if (!emailValue) {
    setError(emailInput, "emailEmptyError", true);
  } else if (
    !(() => {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
      return emailRegex.test(emailValue);
    })
  ) {
    setError(emailInput, "emailInvalidError", true);
  }
}

// Password 값 검증 (event handler)
function validatePassword() {
  setError(passwordInput, "passwordEmptyError", false);
  setError(passwordInput, "passwordInvalidError", false);

  if (!passwordInput.value.trim()) {
    setError(passwordInput, "passwordEmptyError", true);
  } else if (passwordInput.value.trim().length < 8) {
    setError(passwordInput, "passwordInvalidError", true);
  }
}

// Form 전송 핸들러
function submitFormHandler(formId, redirectUrl) {
  const form = document.querySelector(`#${formId}`);

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    validateEmail();
    validatePassword();

    if (!document.querySelector('.error-message[style="display: block;"]')) {
      window.location.href = redirectUrl;
    }
  });
}

// Event Handlers 등록
emailInput.addEventListener("focusout", validateEmail);
passwordInput.addEventListener("focusout", validatePassword);

submitFormHandler("signInForm", "/items");
