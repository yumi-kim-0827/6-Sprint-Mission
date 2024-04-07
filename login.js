const emailInput = document.getElementById("email");
const pwdInput = document.getElementById("pwd");
const errorEmailWrong = document.querySelector(".error_email_wrong");
const errorEmailUndefined = document.querySelector(".error_email_undefined");
const errorPwdWrong = document.querySelector(".error_pwd_wrong");
const errorPwdUndefined = document.querySelector(".error_pwd_undefined");
const loginSubmitButton = document.querySelector(".login_submit_button");

function emailCheck(email_address) {
  const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  if (!email_regex.test(email_address)) {
    return false;
  } else {
    return true;
  }
}

emailInput.addEventListener("focusout", (event) => {
  if (event.target.value == "") {
    errorEmailUndefined.classList.remove("hide");
    errorEmailWrong.classList.add("hide");
  } else {
    if (emailCheck(event.target.value)) {
      errorEmailUndefined.classList.add("hide");
      event.target.classList.remove("error_border");
      errorEmailWrong.classList.add("hide");
    } else {
      errorEmailUndefined.classList.add("hide");
      event.target.classList.add("error_border");
      errorEmailWrong.classList.remove("hide");
    }
  }
});

pwdInput.addEventListener("focusout", (event) => {
  if (event.target.value == "") {
    errorPwdUndefined.classList.remove("hide");
    errorPwdWrong.classList.add("hide");
  } else {
    if (event.target.value.length >= 8) {
      errorPwdUndefined.classList.add("hide");
      event.target.classList.remove("error_border");
      errorPwdWrong.classList.add("hide");
    } else {
      errorPwdUndefined.classList.add("hide");
      event.target.classList.add("error_border");
      errorPwdWrong.classList.remove("hide");
    }
  }
});

function handlerActive() {
  if (
    emailCheck(emailInput.value) &&
    pwdInput.value &&
    pwdInput.value.length >= 8
  ) {
    loginSubmitButton.disabled = false;
  } else {
    loginSubmitButton.disabled = true;
  }
}
loginSubmitButton.disabled = true;
emailInput.addEventListener("keyup", handlerActive);
pwdInput.addEventListener("keyup", handlerActive);
