const emailInput = document.querySelector("#email");
const nicknameInput = document.querySelector("#nickname");
const passwordInput = document.querySelector("#password");
const passwordInputConfirm = document.querySelector("#passwordConfirm");

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

// Password 일치 검증 (event handler)
function validatePasswordConfrim() {
  setError(passwordInputConfirm, "passwordConfirmError", false);

  if (passwordInput.value.trim() !== passwordInputConfirm.value.trim()) {
    setError(passwordInputConfirm, "passwordConfirmError", true);
  }
}

// Nickname 값 검증 (event handler)
function validateNickname() {
  setError(nicknameInput, "nicknameEmptyError", false);

  if (!nicknameInput.value.trim()) {
    setError(nicknameInput, "nicknameEmptyError", true);
  }
}

// Form 전송 핸들러
function submitForm(formId, redirectUrl) {
  const form = document.querySelector(`#${formId}`);
  const submitButton = document.querySelector(".submit-form-btn");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateEmail();
    validatePassword();
    if (formId === "signUpForm") {
      validateNickname();
      validatePasswordConfrim();
    }

    if (!document.querySelector('.error-message[style="display: block;"]')) {
      submitButton.style.backgroundColor = "#3692ff";
      window.location.href = redirectUrl;
    }
  });
}

// Event Handlers 등록
emailInput.addEventListener("focusout", validateEmail);
passwordInput.addEventListener("focusout", validatePassword);
if (passwordInputConfirm) {
  passwordInputConfirm.addEventListener("focusout", validatePasswordConfrim);
}
if (nicknameInput) {
  nicknameInput.addEventListener("focusout", validateNickname);
}

submitForm("signInForm", "/items");
submitForm("signUpForm", "/signin");
