const loginBtn = document.querySelector(".login-btn");
const emailInput = document.querySelector(".email input");
const pwInput = document.querySelector(".pw input");
const pwIcon = document.querySelector(".con .pw-icon");
const allInput = document.querySelectorAll("form input");

let isShow = false;
loginBtn.disabled = true;

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
    } else if (element.type === "password") {
      if (parentEl.children.length > 3) {
        parentEl.removeChild(parentEl.lastChild);
      }
      const wrongPw = document.createElement("p");
      wrongPw.classList.add("wrong-pw");
      element.value === ""
        ? (wrongPw.textContent = "비밀번호를 입력해주세요")
        : (wrongPw.textContent = "비밀번호를 8자 이상 입력해주세요");
      parentEl.append(wrongPw);
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
      loginBtn.disabled = false;
    } else {
      loginBtn.disabled = true;
    }
  }
};

const isValidEmail = () => {
  const isValid = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;
  const test = isValid.test(emailInput.value);
  handleInput(test, emailInput);
};

const isValidPw = () => {
  const isValid = /.{8,}/;
  const test = isValid.test(pwInput.value);
  handleInput(test, pwInput);
};

emailInput.addEventListener("input", isValidEmail);
pwInput.addEventListener("input", isValidPw);
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  location.href = "./items.html";
});
