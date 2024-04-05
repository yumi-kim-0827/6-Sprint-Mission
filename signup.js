const emailInput = document.querySelector(".email input");
const nickInput = document.querySelector(".nick input");
const pwInput = document.querySelector(".pw #pw");
const rePwInput = document.querySelector(".re-pw #re-pw");

const pwIcon = document.querySelector(".con .pw-icon");
const rePwIcon = document.querySelector(".con .re-pw-icon");
const signUpBtn = document.querySelector("form .signup-btn");

const allInput = document.querySelectorAll("form input");

let isShow = false;
let reIsShow = false;
signUpBtn.disabled = true;

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

const handleInput = (test, element) => {
  let parentEl = element.parentElement;
  if (!test) {
    element.classList.add("wrong");

    if (element.type === "email") {
      if (parentEl.children.length > 2) {
        parentEl.removeChild(parentEl.lastChild);
      }
      const wrongEmail = document.createElement("p");
      wrongEmail.classList.add("wrong-email");
      element.value === ""
        ? (wrongEmail.textContent = "이메일을 입력해주세요")
        : (wrongEmail.textContent = "잘못된 이메일 형식입니다");
      parentEl.append(wrongEmail);
    } else if (element.id === "nickname") {
      if (parentEl.children.length > 2) {
        parentEl.removeChild(parentEl.lastChild);
      }
      const wrongNick = document.createElement("p");
      wrongNick.classList.add("wrong-re-pw");
      wrongNick.textContent = "닉네임을 입력해주세요";
      parentEl.append(wrongNick);
    } else if (element.id === "pw") {
      if (parentEl.children.length > 3) {
        parentEl.removeChild(parentEl.lastChild);
      }
      const wrongPw = document.createElement("p");
      wrongPw.classList.add("wrong-pw");
      element.value === ""
        ? (wrongPw.textContent = "비밀번호를 입력해주세요")
        : (wrongPw.textContent = "비밀번호를 8자 이상 입력해주세요");
      parentEl.append(wrongPw);
    } else if (element.id === "re-pw") {
      if (parentEl.children.length > 3) {
        parentEl.removeChild(parentEl.lastChild);
      }
      const wrongRePw = document.createElement("p");
      wrongRePw.classList.add("wrong-re-pw");
      wrongRePw.textContent = "비밀번호가 일치하지 않습니다.";
      parentEl.append(wrongRePw);
    }
  } else {
    element.classList.remove("wrong");

    if (parentEl.children.length > 2) {
      parentEl.removeChild(parentEl.lastChild);
    } else if (parentEl.children.length > 3) {
      parentEl.removeChild(parentEl.lastChild);
    }

    const allInputArr = Array.from(allInput);
    if (!allInputArr.some((el) => el.value === "") && !allInputArr.some((el) => el.classList.contains("wrong"))) {
      signUpBtn.disabled = false;
    } else {
      signUpBtn.disabled = true;
    }
  }
};

const isValidEmail = () => {
  const isValid = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;
  const test = isValid.test(emailInput.value);
  handleInput(test, emailInput);
};

const isValidNick = () => {
  let isFilled = false;
  if (!(nickInput.value === "")) {
    isFilled = true;
  }
  handleInput(isFilled, nickInput);
};

const isValidPw = () => {
  const isValid = /.{8,}/;
  const test = isValid.test(pwInput.value);
  handleInput(test, pwInput);
};

const isValidRePw = () => {
  let isValid = false;
  if (rePwInput.value == pwInput.value) {
    isValid = true;
  }
  handleInput(isValid, rePwInput);
};

emailInput.addEventListener("input", isValidEmail);
nickInput.addEventListener("input", isValidNick);
pwInput.addEventListener("input", isValidPw);
rePwInput.addEventListener("input", isValidRePw);

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  location.href = "./login.html";
});
