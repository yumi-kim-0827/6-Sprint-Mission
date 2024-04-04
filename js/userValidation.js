const inputs = document.querySelectorAll(".input-wrapper input");
const icons = document.querySelectorAll(".password-group .input-icon");

// 유효성 체크 결과 다루는 함수
const validationCheck = (inputWrapper, errorEl, errorMessage) => {
  errorMessage
    ? inputWrapper.classList.add("error")
    : inputWrapper.classList.remove("error");

  errorEl.textContent = errorMessage || "";
};

// 이메일 유효성 검사
const emailValidation = (value, wrapper, errorMessageEl) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

  const errorMessage = {
    emptyInput: "이메일을 입력해주세요",
    incorrectFormat: "잘못된 이메일 형식입니다",
  };

  if (value === "") {
    validationCheck(wrapper, errorMessageEl, errorMessage.emptyInput);
  } else if (!emailRegex.test(value)) {
    validationCheck(wrapper, errorMessageEl, errorMessage.incorrectFormat);
  } else {
    validationCheck(wrapper, errorMessageEl);
  }
};

// 비밀번호 유효성 검사
const passwordValidation = (value, wrapper, errorMessageEl) => {
  const MIN_LENGTH = 8;
  const { length } = value;

  const errorMessage = {
    emptyInput: "비밀번호를 입력해주세요",
    minCharacter: "비밀번호를 8자 이상 입력해주세요",
  };

  if (value === "") {
    validationCheck(wrapper, errorMessageEl, errorMessage.emptyInput);
  } else if (length < MIN_LENGTH) {
    validationCheck(wrapper, errorMessageEl, errorMessage.minCharacter);
  } else {
    validationCheck(wrapper, errorMessageEl);
  }
};

// 비밀번호 확인 유효성 검사
const passwordCheckValidation = (target, wrapper, errorMessageEl) => {
  const errorMessage = "비밀번호가 일치하지 않습니다";

  const { value: passwordCheckValue } = target;
  const password = document.querySelector("#password");
  const { value: passwordValue } = password;

  passwordCheckValue !== passwordValue
    ? validationCheck(wrapper, errorMessageEl, errorMessage)
    : validationCheck(wrapper, errorMessageEl);
};

// 닉네임 유효성 검사
const nicknameValidation = (value, wrapper, errorMessageEl) => {
  const errorMessage = "닉네임을 입력해주세요";

  value === ""
    ? validationCheck(wrapper, errorMessageEl, errorMessage)
    : validationCheck(wrapper, errorMessageEl);
};

// 비밀번호 아이콘 토글 기능
const passwordIconToggle = (event) => {
  const on = {
    type: "text",
    src: "img/visibility_on.svg",
  };

  const off = {
    type: "password",
    src: "img/visibility_off.svg",
  };

  const { target } = event;
  const parent = target.closest(".password-group");
  parent.classList.toggle("off");

  const input = parent.querySelector("input");
  const img = parent.querySelector(".input-icon img");

  input.type = parent.classList.contains("off") ? off.type : on.type;
  img.src = parent.classList.contains("off") ? off.src : on.src;
};

// 버튼 활성화 (빈값이 있거나 에러 메시지가 있다면 활성화 X)
const buttonActiveCheck = () => {
  const button = document.querySelector("form button");
  const error = document.querySelector(".error");

  inputs.forEach((input) => {
    const { value } = input;

    value !== "" && !error
      ? button.classList.remove("off")
      : button.classList.add("off");
  });
};

// input 구분 후 유효성 체크
const checkInputType = (event) => {
  const { target } = event;
  const { id, value } = target;
  const wrapper = target.closest(".input-wrapper");
  const errorMessage = wrapper.querySelector(".error-message");

  switch (id) {
    case "email":
      emailValidation(value, wrapper, errorMessage);
      break;

    case "name":
      nicknameValidation(value, wrapper, errorMessage);
      break;

    case "password":
      passwordValidation(value, wrapper, errorMessage);
      break;

    case "password-check":
      passwordCheckValidation(target, wrapper, errorMessage);
      break;
  }

  buttonActiveCheck();
};

// 유효성 체크
inputs.forEach((input) => {
  input.addEventListener("focusout", checkInputType);
  input.addEventListener("input", buttonActiveCheck);
});

// 비밀번호 아이콘 클릭 이벤트
icons.forEach((icon) => {
  icon.addEventListener("click", passwordIconToggle);
});
