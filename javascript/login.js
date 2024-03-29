const loginEmail = document.getElementById("email");
const loginPw = document.getElementById("password");
const loginBtn = document.getElementById("btn-login");
const togglePw = document.getElementById("password-toggle");

function color() {
  if (
    loginEmail.value.length > 0 &&
    loginEmail.value.indexOf("@") !== -1 &&
    loginPw.value.length >= 5
  ) {
    loginBtn.style.backgroundColor = "#3692ff";
    loginBtn.style.cursor = "pointer";
    loginBtn.disabled = false;
  } else {
    loginBtn.disabled = true;
    loginBtn.style.backgroundColor = "#9ca3af";
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

loginEmail.addEventListener("keyup", color);
loginPw.addEventListener("keyup", color);
togglePw.addEventListener("click", toggle);
