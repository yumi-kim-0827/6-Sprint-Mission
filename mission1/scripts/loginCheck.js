const input = document.querySelector(".emailInput");
const errorMessage = document.querySelector(".email-error-message");
input.addEventListener("focusout", () => emailError(input, btn, errorMessage));

const pwInput = document.querySelector(".passwordBar");
const errorMessage2 = document.querySelector(".pw-error-message");
pwInput.addEventListener("focusout", () =>
  pwError(pwInput, btn, errorMessage2)
);

const btn = document.querySelector(".loginButton");

export function emailError(input, btn, errorMessage) {
  let email = input.value.trim();
  if (email === "") {
    showError("", errorMessage, input);
    clearError(errorMessage, input);
    btn.onclick = () => item("./login.html");
  } else if (!isValidEmail(email)) {
    showError("잘못된 이메일입니다", errorMessage, input);
    btn.onclick = () => item("./login.html");
  } else {
    showError("", errorMessage, input);
    clearError(errorMessage, input);
    btn.onclick = function () {
      location.href = "../item/item.html";
    };
  }
}

export function pwError(input, btn, errorMessage2) {
  if (input.value.length <= 8) {
    showError("비밀번호를 8자 이상 입력해주세요", errorMessage2, pwInput);
    btn.onclick = () => item("./login.html");
  } else {
    showError("", errorMessage2, pwInput);
    clearError(errorMessage2, pwInput);
    btn.onclick = () => item("../item/item.html");
  }
}

function item(addr) {
  location.href = addr;
}

function showError(message, div, input) {
  input.classList.add("error-border");
  div.textContent = message;
}

function clearError(div, input) {
  input.classList.remove("error-border");
  div.textContent = "";
}

function isValidEmail(email) {
  // 이메일 형식을 정규표현식을 사용하여 검사
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

