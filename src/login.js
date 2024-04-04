const email = document.querySelector("#email");
const password = document.querySelector("#password");
const pwdContainer = document.querySelector("#pwdContainer");
const loginBtn = document.querySelector("#loginBtn");
const emailUnderMessage = document.createElement("p");
const pwdUnderMessage = document.createElement("p");
emailUnderMessage.className = "inputUnderMessage";
pwdUnderMessage.className = "inputUnderMessage";

const passwordLength = 8;

// 이메일 형식 유효성 체크
function emailCheck(email_address) {
  const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  if (!email_regex.test(email_address)) {
    return false;
  } else {
    return true;
  }
}

function checkEmail(event) {
  const inputTarget = event.target;
  if (!emailCheck(inputTarget.value)) {
    // 이메일 형식에 맞지 않는 경우
    emailUnderMessage.textContent = "잘못된 이메일 형식입니다";
    inputTarget.style.margin = 0;
    inputTarget.style.outline = "2px solid #f74747";
    inputTarget.after(emailUnderMessage);
  } else {
    // 이메일 형식을 지킨 경우
    emailUnderMessage.textContent = "";
    inputTarget.style.outline = "2px solid #3182f6";
  }
}

function updateEmailOutLine(event) {
  const inputTarget = event.target;
  if (!inputTarget.value) {
    // 아무 값도 작성하지 않았을 경우
    emailUnderMessage.textContent = "이메일을 입력해주세요.";
    inputTarget.style.margin = 0;
    inputTarget.style.outline = "2px solid #f74747";
    inputTarget.after(emailUnderMessage);
  } else if (emailCheck(inputTarget.value)) {
    // 올바른 이메일을 작성했을 경우
    inputTarget.style.outline = "none";
  }
}

email.addEventListener("input", checkEmail);
email.addEventListener("focusout", updateEmailOutLine);

function checkPassword(event) {
  const inputTarget = event.target;

  if (inputTarget.value.length < passwordLength) {
    pwdUnderMessage.textContent = "비밀번호를 8자 이상 입력해주세요";
    inputTarget.style.margin = 0;
    inputTarget.style.outline = "2px solid #f74747";
    pwdContainer.after(pwdUnderMessage);
  } else {
    // pwdUnderMessage.remove();
    // inputTarget.style.marginBottom = "24px";
    pwdUnderMessage.textContent = "";
    inputTarget.style.outline = "2px solid #3182f6";
  }
}

function updatePwdOutLine(event) {
  const inputTarget = event.target;
  if (inputTarget.value.length === 0) {
    pwdUnderMessage.textContent = "비밀번호를 입력해주세요";
    inputTarget.style.margin = 0;
    inputTarget.style.outline = "2px solid #f74747";
    pwdContainer.after(pwdUnderMessage);
  } else if (inputTarget.value.length >= passwordLength) {
    inputTarget.style.outline = "none";
  }
}

password.addEventListener("input", checkPassword);
password.addEventListener("focusout", updatePwdOutLine);

// 에러 메세지가 없고, input이 빈값이 아니면 로그인 버튼 활성화
function ableLoginBtn() {
  const isEmailEmpty = email.value !== "";
  const isPasswordEmpty = password.value !== "";
  const isEmailError = emailUnderMessage.textContent === "";
  const isPasswordError = pwdUnderMessage.textContent === "";

  console.log("dd");
  if (isEmailEmpty && isPasswordEmpty && isEmailError && isPasswordError) {
    console.log(loginBtn);
    loginBtn.disabled = false;
    loginBtn.style.backgroundColor = "#3692FF";
  } else {
    loginBtn.disabled = true;
  }
}

email.addEventListener("input", ableLoginBtn);
password.addEventListener("input", ableLoginBtn);

loginBtn.addEventListener("click", (event) => {
  event.preventDefault();
  location.href = "items.html";
});

export {
  emailCheck,
  checkEmail,
  updateEmailOutLine,
  checkPassword,
  updatePwdOutLine,
};
