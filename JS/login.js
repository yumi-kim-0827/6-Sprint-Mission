const emailContainer = document.querySelector(".email");
const pwContainer = document.querySelector(".pw");
const loginBtn = document.querySelector(".login-btn");
const emailInput = document.querySelector(".email input");
const pwInput = document.querySelector(".pw input");
const pwIcon = document.querySelector(".con .pw-icon");

let isShow = false;

pwIcon.addEventListener("click", () => {
  if (isShow) {
    pwIcon.src = "../login/assets/show-pw.png";
    pwInput.setAttribute("type", "text");
  } else {
    pwIcon.src = "../login/assets/non-show-pw.png";
    pwInput.setAttribute("type", "password");
  }
  isShow = !isShow;
});
