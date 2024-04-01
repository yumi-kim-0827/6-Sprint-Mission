const signupEmail = document.getElementById("email");
const signupPw = document.getElementById("password");
const signupName = document.getElementById("nick-name");
const signupRepw = document.getElementById("re-password");
const signupBtn = document.getElementById("signup-btn");

function color() {
  if (
    signupEmail.value.length > 0 &&
    signupEmail.value.indexOf("@") !== -1 &&
    signupName.value.length > 0 &&
    signupPw.value.length >= 8 &&
    signupPw.value == signupRepw.value
  ) {
    signupBtn.style.backgroundColor = "#3692ff";
    signupBtn.style.cursor = "pointer";
    signupBtn.disabled = false;
  } else {
    signupBtn.disabled = true;
    signupBtn.style.backgroundColor = "#9ca3af";
  }
}

signupEmail.addEventListener("keyup", color);
signupName.addEventListener("keyup", color);
signupPw.addEventListener("keyup", color);
signupRepw.addEventListener("keyup", color);