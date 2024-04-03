const email = document.getElementById("email");
const email_msg = document.getElementById("email-Error");
const nickname = document.getElementById("nickname");
const nickname_msg = document.getElementById("nickname-Error");
const pwd = document.getElementById("pwd");
const pwd_msg = document.getElementById("pwd-Error");
const pwd_same = document.getElementById("pwd-same");
const pwd_same_msg = document.getElementById("pwd-same-Error");

function chk_email() {
  const emailValue = email.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailValue) {
    email_msg.textContent = "이메일을 입력하세요.";
    email_msg.style.display = "block";
    email.style.border = "1px solid #f74747";
    return false;
  } else if (!emailRegex.test(emailValue)) {
    email_msg.textContent = "올바른 이메일 형식이 아닙니다.";
    email_msg.style.display = "block";
    email.style.border = "1px solid #f74747";
    return false;
  } else {
    email_msg.style.display = "none";
    email.style.border = "none";
    return true;
  }
}

function chk_nickname() {
  const nicknameValue = nickname.value.trim();

  if (!nicknameValue) {
    nickname_msg.textContent = "닉네임을 입력하세요.";
    nickname_msg.style.display = "block";
    nickname.style.border = "1px solid #f74747";
    return false;
  } else {
    nickname_msg.style.display = "none";
    nickname.style.border = "none";
    return true;
  }
}

function chk_pwd() {
  const pwdValue = pwd.value.trim();

  if (!pwdValue) {
    pwd_msg.textContent = "비밀번호를 입력하세요.";
    pwd_msg.style.display = "block";
    pwd.style.border = "1px solid #f74747";
    return false;
  } else if (pwdValue.length < 8) {
    pwd_msg.textContent = "비밀번호는 최소 8자 이상이어야 합니다.";
    pwd_msg.style.display = "block";
    pwd.style.border = "1px solid #f74747";
    return false;
  } else {
    pwd_msg.style.display = "none";
    pwd.style.border = "none";
    return true;
  }
}

function chk_pwd_same() {
  const pwdValue = pwd.value.trim();
  const pwdSameValue = pwd_same.value.trim();

  if (pwdValue !== pwdSameValue) {
    pwd_same_msg.textContent = "비밀번호가 일치하지 않습니다.";
    pwd_same_msg.style.display = "block";
    pwd_same.style.border = "1px solid #f74747";
    return false;
  } else {
    pwd_same_msg.style.display = "none";
    pwd_same.style.border = "none";
    return true;
  }
}

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  if (!chk_email()) {
    return false;
  }
  if (!chk_nickname()) {
    return false;
  }
  if (!chk_pwd()) {
    return false;
  }
  if (!chk_pwd_same()) {
    return false;
  }

  window.location.href = "/";
});

email.addEventListener("focusout", chk_email);
nickname.addEventListener("focusout", chk_nickname);
pwd.addEventListener("focusout", chk_pwd);
pwd_same.addEventListener("focusout", chk_pwd_same);
