const inputs = document.querySelectorAll("input");
const email = document.querySelector("input#email");
const nickname = document.querySelector("input#nickname");
const pwd = document.querySelector("input#pwd");
const re_pwd = document.querySelector("input#re_pwd");
const ico_hides = document.querySelectorAll(".ico_hide img");
const submitBtn = document.querySelector(".form button");

//  warning 클래스 및 경고 메세지 추가/제거 함수

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

// 유효성 검사 : nickname

function focusOutnickName(el) {
  !el.target.value
    ? warningMessage(nickname, "닉네임을 입력해주세요")
    : removeWarning(nickname);
}

nickname ? nickname.addEventListener("focusout", focusOutnickName) : undefined;

// 유효성 검사 : pwd

function focusOutPwd(el) {
  if (!el.target.value) {
    warningMessage(pwd, "비밀번호를 입력해주세요");
    ico_hides[0].parentElement.classList.add("warned");
  } else if (el.target.value.length < 8) {
    warningMessage(pwd, "비밀번호를 8자 이상 입력해주세요");
  } else {
    removeWarning(pwd);
  }
}
pwd.addEventListener("focusout", focusOutPwd);

// 유효성 검사 : re pwd

function focusOutPwdCheck(el) {
  el.target.value !== pwd.value
    ? warningMessage(re_pwd, "비밀번호가 일치하지 않습니다!")
    : removeWarning(re_pwd);
}

re_pwd ? re_pwd.addEventListener("focusout", focusOutPwdCheck) : undefined;

// 로그인 버튼 활성화

// 로그인 버튼 활성화 - 활성화 함수

function activateLogin(state) {
  if (state) {
    submitBtn.classList.add("active");
    submitBtn.setAttribute("onclick", "location.href='./items.html'");
  } else {
    submitBtn.classList.remove("active");
    submitBtn.removeAttribute("onclick");
  }
}

// 로그인 버튼 활성화 - 유효성 체크

function checkLogin() {
  const values = [];
  let warnings = 0;
  for (let input of [...inputs]) {
    input.value ? values.push(input.value) : undefined;
    [...input.classList].includes("warning") ? (warnings += 1) : undefined;
    if (values.length === inputs.length && warnings === 0) {
      activateLogin(true);
    } else {
      activateLogin(false);
    }
  }
}

// 로그인 버튼 활성화 - 모든 input에 적용

for (let input of inputs) {
  input.addEventListener("focusout", checkLogin);
}

// 눈 모양 아이콘 클릭 시 pwd 창 변화

function convert(el) {
  if (el.target.attributes.src.value == "../images/ico_hide_pwd.svg") {
    el.target.parentElement.previousElementSibling.nextElementSibling.nextElementSibling.setAttribute(
      "type",
      "text"
    );
    el.target.attributes.src.value = "../images/ico_hide_open.svg";
  } else {
    el.target.parentElement.previousElementSibling.nextElementSibling.nextElementSibling.setAttribute(
      "type",
      "password"
    );
    el.target.attributes.src.value = "../images/ico_hide_pwd.svg";
  }
}

for (let ico_hide of ico_hides) {
  ico_hide.addEventListener("click", convert);
}
