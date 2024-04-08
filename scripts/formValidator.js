function isEmpty(string) {
  return string === "";
}

function isEmailValid(string) {
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  return pattern.test(string);
}

function isFormValid() {
  const formItemCount = document.querySelectorAll(".form-item").length;
  const validFormItemCount = document.querySelectorAll(".on").length;
  return formItemCount <= validFormItemCount;
}

function validateInput(e, id, getErrorText) {
  const value = e.target.value;
  const errorText = getErrorText(value);
  const formItem = e.target.closest(".form-item");
  const submitButton = document.querySelector(".form-button");

  if (errorText === undefined) {
    formItem.classList.remove("error");
    formItem.classList.add("on");
  } else {
    const formErrorText = document.querySelector(`#${id}-error-text`);
    formErrorText.textContent = errorText;

    formItem.classList.add("error");
    formItem.classList.remove("on");
  }

  if (isFormValid()) submitButton.disabled = false;
  else submitButton.disabled = true;
}

const getEmailErrorText = (value) => {
  if (isEmpty(value)) return "이메일을 입력해주세요.";
  else if (!isEmailValid(value)) return "잘못된 이메일 형식입니다.";
};

const getNicknameErrorText = (value) => {
  if (isEmpty(value)) return "닉네임을 입력해주세요.";
};

const getPasswordErrorText = (value) => {
  if (isEmpty(value)) return "비밀번호를 입력해주세요.";
  else if (value.length < 8) return "비밀번호를 8자 이상 입력해주세요.";
};

const getPasswordConfirmErrorText = (value) => {
  const passwordValue = document.querySelector("#password").value;
  const passwordConfirmValue = value;
  if (passwordConfirmValue !== passwordValue)
    return "비밀번호가 일치하지 않습니다.";
};

const emailInput = document.querySelector("#email");
emailInput?.addEventListener("blur", (e) => {
  validateInput(e, "email", getEmailErrorText);
});

const nicknameInput = document.querySelector("#nickname");
nicknameInput?.addEventListener("blur", (e) => {
  validateInput(e, "nickname", getNicknameErrorText);
});

const passwordInput = document.querySelector("#password");
passwordInput?.addEventListener("blur", (e) => {
  validateInput(e, "password", getPasswordErrorText);
});

const passwordConfirmInput = document.querySelector("#password-confirm");
passwordConfirmInput?.addEventListener("blur", (e) => {
  validateInput(e, "password-confirm", getPasswordConfirmErrorText);
});

const submitButton = document.querySelector(".form-button");
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  target = e.target.dataset.href;
  location.href = `${target}.html`;
});
