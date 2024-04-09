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

const validatePasswordField = () => {
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

validateEmailField();
validatePasswordField();
