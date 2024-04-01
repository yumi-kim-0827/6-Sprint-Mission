const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordValidation = /^.{8,}$/;

const emailInput = document.getElementById("email");
const nicknameInput = document.getElementById("nickname");
const passwordInput = document.getElementById("password");
const passwordConfirm = document.getElementById("confirm_password");

const loginBtn = document.querySelector('button .login')



emailInput.addEventListener("focusout", () => {
  const fieldWrapper = emailInput.parentNode;
  const errorMessage = fieldWrapper.querySelector(".errorMessage");

  if (emailInput.value === "") {
    if (!fieldWrapper.querySelector(".errorMessage")) {
      emailInput.classList.add("error");
      const p = document.createElement("p");
      p.classList.add("errorMessage");
      p.textContent = "이메일을 입력해주세요.";
      fieldWrapper.append(p);
    }
  } else if (emailValidation.test(emailInput.value.trim())) {
    emailInput.classList.remove("error");
    if (errorMessage) {
      errorMessage.remove();
    }
    emailInput.style.border = '2px solid var(--main)'
  } else {
    if (errorMessage) {
      errorMessage.remove();
    }
    emailInput.classList.add("error");
    const p = document.createElement("p");
    p.classList.add("errorMessage");
    p.textContent = "잘못된 이메일 형식입니다.";
    fieldWrapper.append(p);
  }
});

nicknameInput.addEventListener("focusout", () => {
  const fieldWrapper = nicknameInput.parentNode;
  const errorMessage = fieldWrapper.querySelector(".errorMessage");

  if (nicknameInput.value === "") {
    if (!fieldWrapper.querySelector(".errorMessage")) {
      nicknameInput.classList.add("error");
      const p = document.createElement("p");
      p.classList.add("errorMessage");
      p.textContent = "닉네임을 입력해주세요.";
      fieldWrapper.append(p);
    }
  } else {
    if (errorMessage) {
      errorMessage.remove();
    }
    nicknameInput.style.border = '2px solid var(--main)'
  }
});

passwordInput.addEventListener("focusout", () => {
  const fieldWrapper = passwordInput.parentNode;
  const errorMessage = fieldWrapper.querySelector(".errorMessage");

  if (passwordInput.value === "") {
    if (!fieldWrapper.querySelector(".errorMessage")) {
      passwordInput.classList.add("error");
      const p = document.createElement("p");
      p.classList.add("errorMessage");
      p.textContent = "비밀번호를 입력해주세요.";
      fieldWrapper.append(p);
    }
  } else if (passwordValidation.test(passwordInput.value.trim())) {
    passwordInput.classList.remove("error");
    if (errorMessage) {
      errorMessage.remove();
    }
    passwordInput.style.border = '2px solid var(--main)'
  } else {
    if (errorMessage) {
      errorMessage.remove();
    }
    passwordInput.classList.add("error");
    const p = document.createElement("p");
    p.classList.add("errorMessage");
    p.textContent = "비밀번호를 8자 이상 입력해주세요.";
    fieldWrapper.append(p);
  }
});

passwordConfirm.addEventListener("focusout", () => {
  const fieldWrapper = passwordConfirm.parentNode;
  const errorMessage = fieldWrapper.querySelector(".errorMessage");

  if (passwordConfirm.value === "") {
    if (!fieldWrapper.querySelector(".errorMessage")) {
      passwordConfirm.classList.add("error");
      const p = document.createElement("p");
      p.classList.add("errorMessage");
      p.textContent = "비밀번호를 다시 한 번 입력해주세요.";
      fieldWrapper.append(p);
    }
  } else if (passwordInput.value === passwordConfirm.value) {
    passwordConfirm.classList.remove("error");
    if (errorMessage) {
      errorMessage.remove();
    }
    passwordConfirm.style.border = '2px solid var(--main)'
  } else {
    if (errorMessage) {
      errorMessage.remove();
    }
    passwordConfirm.classList.add("error");
    const p = document.createElement("p");
    p.classList.add("errorMessage");
    p.textContent = "비밀번호가 일치하지 않습니다.";
    fieldWrapper.append(p);
  }
});

