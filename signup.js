const emailInput = document.getElementById("email");
const nicknameInput = document.getElementById("nickname");
const pwdInput = document.getElementById("pwd");
const pwdCheckInput = document.getElementById("pwd_check");
const errorEmailWrong = document.querySelector(".error_email_wrong");
const errorEmailUndefined = document.querySelector(".error_email_undefined");
const errorPwdWrong = document.querySelector(".error_pwd_wrong");
const errorPwdUndefined = document.querySelector(".error_pwd_undefined");
const errorPwdCheck = document.querySelector(".error_pwd_check");
const errorNickname = document.querySelector(".error_nickname");
const signupSubmitButton = document.querySelector(".signup_submit_button");

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

nicknameInput.addEventListener("focusout", (event) => {
  if (event.target.value == "") {
    errorNickname.classList.remove("hide");
    event.target.classList.add("error_border");
  } else {
    errorNickname.classList.add("hide");
    event.target.classList.remove("error_border");
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

pwdCheckInput.addEventListener("focusout", (event) => {
  if (pwdInput.value === pwdCheckInput.value) {
    errorPwdCheck.classList.add("hide");
    event.target.classList.remove("error_border");
  } else {
    errorPwdCheck.classList.remove("hide");
    event.target.classList.add("error_border");
  }
});

function handlerActive() {
  if (
    emailCheck(emailInput.value) &&
    nicknameInput.value &&
    pwdInput.value &&
    pwdInput.value.length >= 8 &&
    pwdInput.value === pwdCheckInput.value
  ) {
    signupSubmitButton.disabled = false;
  } else {
    signupSubmitButton.disabled = true;
  }
}
signupSubmitButton.disabled = true;
emailInput.addEventListener("keyup", handlerActive);
nicknameInput.addEventListener("keyup", handlerActive);
pwdInput.addEventListener("keyup", handlerActive);
pwdCheckInput.addEventListener("keyup", handlerActive);
