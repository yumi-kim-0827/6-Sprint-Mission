let isEmailValid = false;
let isNicknameValid = false;
let isPasswordValid = false;
let isPasswordCheckValid = false;

const showPwd = () => {
  const passwordInput = document.getElementById("pwd");
  const passwordVisibilityButton = document.getElementById("pwdimg");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordVisibilityButton.src = "/images/btn_visibility_on.png";
  } else {
    passwordInput.type = "password";
    passwordVisibilityButton.src = "/images/btn_visibility.png";
  }
};

const showPwdchk = () => {
  const passwordCheckInput = document.getElementById("pwdchk");
  const passwordVisibilityButton = document.getElementById("pwdchkimg");

  if (passwordCheckInput.type === "password") {
    passwordCheckInput.type = "text";
    passwordVisibilityButton.src = "/images/btn_visibility_on.png";
  } else {
    passwordCheckInput.type = "password";
    passwordVisibilityButton.src = "/images/btn_visibility.png";
  }
};

const validateForm = () => {
  const submitButton = document.getElementById("submitBtn");

  if (
    isEmailValid &&
    isNicknameValid &&
    isPasswordValid &&
    isPasswordCheckValid
  ) {
    submitButton.style.backgroundColor = "var(--btn-blue1)";
    submitButton.disabled = false;
  } else {
    submitButton.style.backgroundColor = "var(--cool-gray400)";
    submitButton.disabled = true;
  }
};

const emailValText = () => {
  const emailInput = document.getElementById("email");
  let emailEmptyMessage = document.getElementById("emailEmptyMessage");
  let emailInvalidMessage = document.getElementById("emailInvalidMessage");

  emailInput.addEventListener("focusout", () => {
    if (emailInput.value === "") {
      emailInput.style.outline = "2px solid var(--error-red)";
      emailInvalidMessage.style.display = "none";
      emailEmptyMessage.style.display = "block";
      isEmailValid = false;
    } else if (!emailInput.checkValidity()) {
      emailInput.style.outline = "2px solid var(--error-red)";
      emailEmptyMessage.style.display = "none";
      emailInvalidMessage.style.display = "block";
      isEmailValid = false;
    } else {
      emailInput.style.outline = "none";
      emailEmptyMessage.style.display = "none";
      emailInvalidMessage.style.display = "none";
      isEmailValid = true;
    }
    validateForm();
  });
};

const nicknameValText = () => {
  const nickname = document.getElementById("nickname");
  let nicknameEmptyMessage = document.getElementById("nicknameEmptyMessage");

  nickname.addEventListener("focusout", () => {
    if (nickname.value === "") {
      nickname.style.outline = "2px solid var(--error-red)";
      nicknameEmptyMessage.style.display = "block";
      isNicknameValid = false;
    } else {
      nickname.style.outline = "none";
      nicknameEmptyMessage.style.display = "none";
      isNicknameValid = true;
    }
    validateForm();
  });
};

const pwdValText = () => {
  const passwordInput = document.getElementById("pwd");
  let passwordEmptyMessage = document.getElementById("passwordEmptyMessage");
  let passwordInvalidMessage = document.getElementById(
    "passwordInvalidMessage"
  );

  passwordInput.addEventListener("focusout", () => {
    if (passwordInput.value === "") {
      passwordInput.style.outline = "2px solid var(--error-red)";
      passwordInvalidMessage.style.display = "none";
      passwordEmptyMessage.style.display = "block";
      isPasswordValid = false;
    } else if (passwordInput.value.length < 8) {
      passwordInput.style.outline = "2px solid var(--error-red)";
      passwordEmptyMessage.style.display = "none";
      passwordInvalidMessage.style.display = "block";
      isPasswordValid = false;
    } else {
      passwordInput.style.outline = "none";
      passwordEmptyMessage.style.display = "none";
      passwordInvalidMessage.style.display = "none";
      isPasswordValid = true;
    }
    validateForm();
  });
};

const pwdchkValText = () => {
  const passwordInput = document.getElementById("pwd");
  const passwordCheckInput = document.getElementById("pwdchk");
  let passwordCheckNotMatchMessage = document.getElementById(
    "passwordCheckNotMatchMessage"
  );

  passwordCheckInput.addEventListener("focusout", () => {
    if (passwordCheckInput.value !== passwordInput.value) {
      passwordCheckInput.style.outline = "2px solid var(--error-red)";
      passwordCheckNotMatchMessage.style.display = "block";
      isPasswordCheckValid = false;
    } else {
      passwordCheckInput.style.outline = "none";
      passwordCheckNotMatchMessage.style.display = "none";
      isPasswordCheckValid = true;
    }
    validateForm();
  });
};

emailValText();
nicknameValText();
pwdValText();
pwdchkValText();
