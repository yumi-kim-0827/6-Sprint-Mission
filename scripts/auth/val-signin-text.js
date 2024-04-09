(function () {
  let isEmailValid = false;
  let isPasswordValid = false;

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

  const validateForm = () => {
    const submitButton = document.getElementById("submitBtn");

    if (isEmailValid && isPasswordValid) {
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

  validateEmailField();
  validatePasswordField();
})();
