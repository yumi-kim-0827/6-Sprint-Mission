const loginEmail = document.getElementById("email");
const loginPw = document.getElementById("password");
const loginBtn = document.getElementById("btn-login");
const togglePw = document.getElementById("password-toggle");

function color() {
  if (
    loginEmail.value.length > 5 &&
    loginEmail.value.indexOf("@") !== -1 &&
    loginEmail.value.indexOf(".") !== -1 &&
    loginPw.value.length >= 8
  ) {
    loginBtn.style.backgroundColor = "#3692ff";
    loginBtn.href = "items.html";
    loginBtn.style.pointerEvents = "auto";
    loginBtn.style.cursor = "pointer";
  } else {
    loginBtn.style.backgroundColor = "#9ca3af";
    loginBtn.style.pointerEvents = "none";
  }
}

function toggle() {
  if (loginPw.type === "password") {
    loginPw.type = "text";
    togglePw.src = "/images/btn_visibility_on.png";
  } else {
    loginPw.type = "password";
    togglePw.src = "/images/btn_visibility_off.png";
  }
}

function emailError() {
  if (loginEmail.value === "") {
    const errmsg = document.createElement("p");
    errmsg.textContent = "이메일을 입력해주세요";
    errmsg.style.color = "#F74747";
    errmsg.className = "emailerr";
    loginEmail.after(errmsg);
    loginEmail.className = "err-border";
  } else if (
    loginEmail.value.indexOf("@") === -1 ||
    loginEmail.value.indexOf(".") === -1 ||
    loginEmail.value.length <= 5
  ) {
    const wrongEmailInput = document.createElement("p");
    wrongEmailInput.textContent = "잘못된 이메일 형식입니다.";
    wrongEmailInput.style.color = "#747474";
    wrongEmailInput.className = "emailerr";
    loginEmail.after(wrongEmailInput);
    loginEmail.className = "err-border";
  }
}
function passwordError() {
  if (loginPw.value === "") {
    const noPw = document.createElement("p");
    noPw.textContent = "비밀번호를 입력해주세요";
    noPw.style.color = "#F74747";
    noPw.className = "pwerr";
    loginBtn.before(noPw);
    loginPw.className = "err-border";
  } else if (loginPw.value.length < 8) {
    const noPw = document.createElement("p");
    noPw.textContent = "8자리 이상 입력해주세요.";
    noPw.style.color = "#F74747";
    noPw.className = "pwerr";
    loginBtn.before(noPw);
    loginPw.className = "err-border";
  }
}
function deleteEmailError() {
  const errorInput = document.querySelector(".emailerr");
  if (errorInput) {
    errorInput.remove();
    loginEmail.className = "";
  }
}
function deletePwError() {
  const errorInput = document.querySelector(".pwerr");
  if (errorInput) {
    errorInput.remove();
    loginPw.className = "";
  }
}

loginEmail.addEventListener("focusout", emailError);
loginEmail.addEventListener("focusin", deleteEmailError);
loginPw.addEventListener("focusout", passwordError);
loginPw.addEventListener("focusin", deletePwError);
loginEmail.addEventListener("keyup", color);
loginPw.addEventListener("keyup", color);
togglePw.addEventListener("click", toggle);
