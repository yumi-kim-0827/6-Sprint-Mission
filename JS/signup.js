const emailContainer = document.querySelector(".email");
const nickContainer = document.querySelector(".nick");
const pwContainer = document.querySelector(".pw");
const rePwContainer = document.querySelector(".re-pw");

const emailInput = document.querySelector(".email input");
const nickInput = document.querySelector(".nick input");
const pwInput = document.querySelector(".pw #pw");
const rePwInput = document.querySelector(".re-pw #re-pw");

const pwIcon = document.querySelector(".con .pw-icon");
const rePwIcon = document.querySelector(".con .re-pw-icon");

let isShow = false;
let reIsShow = false;

pwIcon.addEventListener("click", () => {
  isShow = !isShow;
  if (isShow) {
    pwIcon.src = "../login/assets/show-pw.png";
    pwInput.setAttribute("type", "text");
  } else {
    pwIcon.src = "../login/assets/non-show-pw.png";
    pwInput.setAttribute("type", "password");
  }
});

rePwIcon.addEventListener("click", () => {
  reIsShow = !reIsShow;
  if (reIsShow) {
    rePwIcon.src = "../login/assets/show-pw.png";
    rePwInput.setAttribute("type", "text");
  } else {
    rePwIcon.src = "../login/assets/non-show-pw.png";
    rePwInput.setAttribute("type", "password");
  }
});

const isValidEmail = () => {
  const isValid = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;
  const test = isValid.test(emailInput.value);
  handleInput(test, emailInput);
};

const isValidNick = () => {
  const isFilled = false;
  if (!nickInput.value === "") {
    isFilled = true;
  } else {
    isFilled = false;
  }
  handleInput(isFilled, nickInput);
};

const isValidPw = () => {
  const isValid = /.{8,}/;
  const test = isValid.test(pwInput.value);
  handleInput(test, pwInput);
};

const isValidRePw = () => {
  const isValid = pwInput.value;
  const test = isValid.test(rePwInput.value);
  handleInput(test, rePwInput);
};

emailInput.addEventListener("input", isValidEmail);
nickInput.addEventListener("input", isValidNick);
pwInput.addEventListener("input", isValidPw);
rePwInput.addEventListener("input", isValidRePw);

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  location.href = "../items.html";
});
