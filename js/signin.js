const email = document.getElementById("email");
const email_msg = document.getElementById("email-Error");
const pwd = document.getElementById("pwd");
const pwd_msg = document.getElementById("pwd-Error");

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

document.getElementById("signinForm").addEventListener("submit", function (e) {
  e.preventDefault();

  if (!chk_email()) {
    return false;
  }
  if (!chk_pwd()) {
    return false;
  }

  window.location.href = "./items.html";
});

email.addEventListener("focusout", chk_email);
pwd.addEventListener("focusout", chk_pwd);
