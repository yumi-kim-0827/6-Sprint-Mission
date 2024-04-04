const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordCheck = document.querySelector("#password-check");
const nickname = document.querySelector("#nickname");

const pwdContainer = document.querySelector("#pwdContainer");
const pwdCheckContainer = document.querySelector("#pwdCheckContainer");
const signupBtn = document.querySelector("#signupBtn");

const emailUnderMessage = document.createElement("p");
const pwdUnderMessage = document.createElement("p");
const pwdCheckUnderMessage = document.createElement("p");
const nicknameUnderMessage = document.createElement("p");

emailUnderMessage.className = "inputUnderMessage";
pwdUnderMessage.className = "inputUnderMessage";
pwdCheckUnderMessage.className = "inputUnderMessage";
nicknameUnderMessage.className = "inputUnderMessage";

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

function checkPasswordSame(event) {
  const inputTarget = event.target;
  if (inputTarget.value !== password.value) {
    pwdCheckUnderMessage.textContent = "비밀번호가 일치하지 않습니다";
    inputTarget.style.margin = 0;
    inputTarget.style.outline = "2px solid #f74747";
    pwdCheckContainer.after(pwdCheckUnderMessage);
  } else {
    pwdCheckUnderMessage.textContent = "";
    inputTarget.style.outline = "2px solid #3182f6";
  }
}

passwordCheck.addEventListener("input", checkPasswordSame);

function checkNickname(event) {
  const inputTarget = event.target;
  if (!inputTarget.value) {
    nicknameUnderMessage.textContent = "닉네임을 입력해주세요";
    inputTarget.style.margin = 0;
    inputTarget.style.outline = "2px solid #f74747";
    inputTarget.after(nicknameUnderMessage);
  } else {
    nicknameUnderMessage.textContent = "";
    inputTarget.style.outline =
      event.type === "focusout" ? "none" : "2px solid #3182f6";
  }
}

nickname.addEventListener("input", checkNickname);
nickname.addEventListener("focusout", checkNickname);

// 에러 메세지가 없고, input이 빈값이 아니면 버튼 활성화
function ableSigninBtn() {
  // input 요소들 유사 배열
  const inputs = document.getElementsByTagName("input");
  // 하나라도 빈 문자열이 있으면 true를 반환
  const isInputEmpty = Array.from(inputs).some((input) => input.value === "");
  // 오류 메세지 유사 배열
  const errorMessages = document.getElementsByClassName("inputUnderMessage");
  // 모두 빈 문자열인지 확인
  const isErrorMessage = Array.from(errorMessages).every(
    (errorMessage) => errorMessage.textContent === ""
  );
  if (!isInputEmpty && isErrorMessage) {
    signupBtn.disabled = false;
    signupBtn.style.backgroundColor = "#3692FF";
  } else {
    signupBtn.disabled = true;
    signupBtn.style.backgroundColor = "#9ca3af";
  }
}

email.addEventListener("input", ableSigninBtn);
password.addEventListener("input", ableSigninBtn);
passwordCheck.addEventListener("input", ableSigninBtn);
nickname.addEventListener("input", ableSigninBtn);

signupBtn.addEventListener("click", (event) => {
  event.preventDefault();
  location.href = "signin.html";
});
