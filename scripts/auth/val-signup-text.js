(function () {
  let isEmailValid = false;
  let isNicknameValid = false;
  let isPasswordValid = false;
  let isPasswordCheckValid = false;

  const togglePasswordVisibility = () => {
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

  const togglePasswordCheckVisibility = () => {
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

  const validateEmailField = () => {
    const emailInput = document.getElementById("email");
    let emailEmptyMessage = document.getElementById("emailEmptyMessage");
    let emailInvalidMessage = document.getElementById("emailInvalidMessage");

    emailInput.addEventListener("focusout", () => {
      if (emailInput.value === "") {
        emailInput.style.outline = "2px solid var(--error-red)";
        emailInvalidMessage.classList.add("hidden");
        emailEmptyMessage.classList.remove("hidden");
        isEmailValid = false;
      } else if (!emailInput.checkValidity()) {
        emailInput.style.outline = "2px solid var(--error-red)";
        emailEmptyMessage.classList.add("hidden");
        emailInvalidMessage.classList.remove("hidden");
        isEmailValid = false;
      } else {
        emailInput.style.outline = "none";
        emailEmptyMessage.classList.add("hidden");
        emailInvalidMessage.classList.add("hidden");
        isEmailValid = true;
      }
      validateForm();
    });
  };

  const validateNicknameField = () => {
    const nickname = document.getElementById("nickname");
    let nicknameEmptyMessage = document.getElementById("nicknameEmptyMessage");

    nickname.addEventListener("focusout", () => {
      if (nickname.value === "") {
        nickname.style.outline = "2px solid var(--error-red)";
        nicknameEmptyMessage.classList.remove("hidden");
        isNicknameValid = false;
      } else {
        nickname.style.outline = "none";
        nicknameEmptyMessage.classList.add("hidden");
        isNicknameValid = true;
      }
      validateForm();
    });
  };

  const validatePasswordField = () => {
    const passwordInput = document.getElementById("pwd");
    let passwordEmptyMessage = document.getElementById("passwordEmptyMessage");
    let passwordInvalidMessage = document.getElementById(
      "passwordInvalidMessage"
    );

    passwordInput.addEventListener("focusout", () => {
      if (passwordInput.value === "") {
        passwordInput.style.outline = "2px solid var(--error-red)";
        passwordInvalidMessage.classList.add("hidden");
        passwordEmptyMessage.classList.remove("hidden");
        isPasswordValid = false;
      } else if (passwordInput.value.length < 8) {
        passwordInput.style.outline = "2px solid var(--error-red)";
        passwordEmptyMessage.classList.add("hidden");
        passwordInvalidMessage.classList.remove("hidden");
        isPasswordValid = false;
      } else {
        passwordInput.style.outline = "none";
        passwordEmptyMessage.classList.add("hidden");
        passwordInvalidMessage.classList.add("hidden");
        isPasswordValid = true;
      }
      validateForm();
    });
  };

  const validatePasswordCheckField = () => {
    const passwordInput = document.getElementById("pwd");
    const passwordCheckInput = document.getElementById("pwdchk");
    let passwordCheckNotMatchMessage = document.getElementById(
      "passwordCheckNotMatchMessage"
    );

    passwordCheckInput.addEventListener("focusout", () => {
      if (passwordCheckInput.value !== passwordInput.value) {
        passwordCheckInput.style.outline = "2px solid var(--error-red)";
        passwordCheckNotMatchMessage.classList.remove("hidden");
        isPasswordCheckValid = false;
      } else {
        passwordCheckInput.style.outline = "none";
        passwordCheckNotMatchMessage.classList.add("hidden");
        isPasswordCheckValid = true;
      }
      validateForm();
    });
  };

  validateEmailField();
  validateNicknameField();
  validatePasswordField();
  validatePasswordCheckField();
})();
