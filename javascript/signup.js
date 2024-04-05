const signupEmail = document.getElementById("email");
const signupPw = document.getElementById("password");
const signupName = document.getElementById("nickname");
const signupPwCheck = document.getElementById("password-check");
const signupBtn = document.getElementById("btn-signup");
const eyePw = document.getElementById("password-toggle");
const eyePwCheck = document.getElementById("password-check-toggle");
const labelPwCheck = document.getElementById("labelpwcheck");
function color() {
  if (
    signupEmail.value.length > 5 &&
    signupEmail.value.indexOf("@") !== -1 &&
    signupEmail.value.indexOf(".") !== -1 &&
    signupName.value.length > 0 &&
    signupPw.value.length >= 8 &&
    signupPw.value == signupPwCheck.value
  ) {
    signupBtn.style.backgroundColor = "#3692ff";
    signupBtn.style.cursor = "pointer";
    signupBtn.href = "login.html";
    signupBtn.style.pointerEvents = "auto";
  } else {
    signupBtn.style.backgroundColor = "#9ca3af";
    signupBtn.style.pointerEvents = "none";
  }
}

function togglePw() {
  if (signupPw.type === "password") {
    signupPw.type = "text";
    eyePw.src = "/images/btn_visibility_on.png";
  } else {
    signupPw.type = "password";
    eyePw.src = "/images/btn_visibility_off.png";
  }
}

function togglepwCheck() {
  if (signupPwCheck.type === "password") {
    signupPwCheck.type = "text";
    eyePwCheck.src = "/images/btn_visibility_on.png";
  } else {
    signupPwCheck.type = "password";
    eyePwCheck.src = "/images/btn_visibility_off.png";
  }
}
/*error message */
function emailError() {
  if (signupEmail.value === "") {
    const errmsg = document.createElement("p");
    errmsg.textContent = "이메일을 입력해주세요";
    errmsg.style.color = "#F74747";
    errmsg.className = "emailerr";
    signupEmail.after(errmsg);
    signupEmail.className = "err-border";
  } else if (
    signupEmail.value.indexOf("@") === -1 ||
    signupEmail.value.indexOf(".") === -1 ||
    signupEmail.value.length <= 5
  ) {
    const wrongEmailInput = document.createElement("p");
    wrongEmailInput.textContent = "잘못된 이메일 형식입니다.";
    wrongEmailInput.style.color = "#F74747";
    wrongEmailInput.className = "emailerr";
    signupEmail.after(wrongEmailInput);
    signupEmail.className = "err-border";
  }
}
function nameError() {
  if (signupName.value === "") {
    const nameErr = document.createElement("p");
    nameErr.textContent = "닉네임을 입력해주세요.";
    nameErr.style.color = "#F74747";
    nameErr.className = "nameerr";
    signupName.after(nameErr);
    signupName.className = "err-border";
  }
}
function passwordError() {
  if (signupPw.value === "") {
    const noPw = document.createElement("p");
    noPw.textContent = "비밀번호를 입력해주세요";
    noPw.style.color = "#F74747";
    noPw.className = "pwerr";
    labelPwCheck.before(noPw);
    signupPw.className = "err-border";
  } else if (signupPw.value.length < 8) {
    const noPw = document.createElement("p");
    noPw.textContent = "8자리 이상 입력해주세요.";
    noPw.style.color = "#F74747";
    noPw.className = "pwerr";
    labelPwCheck.before(noPw);
    signupPw.className = "err-border";
  }
}
function passwordCheckError() {
  if (signupPwCheck.value !== signupPw.value) {
    const pwCheck = document.createElement("p");
    pwCheck.textContent = "비밀번호가 일치하지 않습니다.";
    pwCheck.style.color = "red";
    pwCheck.className = "pwcheckerr";
    signupBtn.before(pwCheck);
    signupPwCheck.className = "err-border";
  }
}
function deleteEmailError() {
  const errorInput = document.querySelector(".emailerr");
  if (errorInput) {
    errorInput.remove();
    signupEmail.className = "";
  }
}
function deletePwError() {
  const errorInput = document.querySelector(".pwerr");
  if (errorInput) {
    errorInput.remove();
    signupPw.className = "";
  }
}
function deletePwCheckError() {
  const errorInput = document.querySelector(".pwcheckerr");
  if (errorInput) {
    errorInput.remove();
    signupPwCheck.className = "";
  }
}
function deleteNameError() {
  const errorInput = document.querySelector(".nameerr");
  if (errorInput) {
    errorInput.remove();
    signupName.className = "";
  }
}

signupEmail.addEventListener("keyup", color);
signupName.addEventListener("keyup", color);
signupPw.addEventListener("keyup", color);
signupPwCheck.addEventListener("keyup", color);
eyePw.addEventListener("click", togglePw);
eyePwCheck.addEventListener("click", togglepwCheck);

signupEmail.addEventListener("focusout", emailError);
signupEmail.addEventListener("focusin", deleteEmailError);
signupPw.addEventListener("focusout", passwordError);
signupPw.addEventListener("focusin", deletePwError);
signupPwCheck.addEventListener("focusout", passwordCheckError);
signupPwCheck.addEventListener("focusin", deletePwCheckError);
signupName.addEventListener("focusout", nameError);
signupName.addEventListener("focusin", deleteNameError);
