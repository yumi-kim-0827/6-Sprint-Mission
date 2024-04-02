const email = document.querySelector("input#email");
const pwd = document.querySelector("input#pwd");
const ico_hide = document.querySelector(".ico_hide img");
const submitBtn = document.querySelector(".form button");

//  warning 클래스 및 메세지 추가 함수
function warningMessage(input, message) {
  input.nextElementSibling.textContent = message;
  input.classList.add("warning");
}
function removeWarning(input) {
  input.nextElementSibling.textContent = "";
  input.classList.remove("warning");
}

// 유효성 검사 : email
function focusOutEmail(el) {
  if (!el.target.value) {
    warningMessage(email, "이메일을 입력해 주세요");
  } else if (!el.target.value.includes("@")) {
    warningMessage(email, "잘못된 이메일 형식입니다.");
  } else {
    removeWarning(email);
  }
}
email.addEventListener("focusout", focusOutEmail);

// 유효성 검사 : pwd

function focusOutPwd(el) {
  if (!el.target.value) {
    warningMessage(pwd, "비밀번호를 입력해주세요");
    ico_hide.parentElement.classList.add("warned");
  } else if (el.target.value.length < 8) {
    warningMessage(pwd, "비밀번호를 8자 이상 입력해주세요");
    ico_hide.parentElement.classList.add("warned");
  } else {
    removeWarning(pwd);
    ico_hide.parentElement.classList.remove("warned");
  }
}
pwd.addEventListener("focusout", focusOutPwd);

// 로그인 버튼 활성화

function activateLogin() {
  if (
    email.value &&
    pwd.value &&
    !email.classList.contains("warning") &&
    !pwd.classList.contains("warning")
  ) {
    submitBtn.classList.add("active");
    submitBtn.setAttribute("onclick", "location.href='./items.html'");
  } else {
    submitBtn.classList.remove("active");
    submitBtn.removeAttribute("onclick");
  }
}

email.addEventListener("focusout", activateLogin);
pwd.addEventListener("focusout", activateLogin);

// 눈 모양 아이콘 클릭 시 pwd 창 변화

function convert(el) {
  if (el.target.attributes.src.value == "../images/ico_hide_pwd.svg") {
    el.target.parentElement.previousElementSibling.previousElementSibling.setAttribute(
      "type",
      "text"
    );
    el.target.attributes.src.value = "../images/ico_hide_open.svg";
  } else {
    el.target.parentElement.previousElementSibling.previousElementSibling.setAttribute(
      "type",
      "password"
    );
    el.target.attributes.src.value = "../images/ico_hide_pwd.svg";
  }
}

ico_hide.addEventListener("click", convert);
// .previousElementSibling
// ico_hide.parentElement
