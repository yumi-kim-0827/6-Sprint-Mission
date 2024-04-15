const userEmail = document.querySelector('.user-email');
const password = document.querySelector('.pw');
const loginButton = document.querySelector('.login-button');

const inputEmail = document.querySelector('.inputEmail');
const wrongEmailFormat = document.querySelector('.wrongEmailFormat');
const inputPassword = document.querySelector('.inputPassword');
const wrongPasswordFormat = document.querySelector('.wrongPasswordFormat');

const email_regex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

function checkEmail () {
  if (!userEmail.value) {
    inputEmail.classList.remove("hide");
    wrongEmailFormat.classList.add("hide");
    userEmail.classList.add("incorrect");
  }
  else if (!email_regex.test(userEmail.value)) {
    wrongEmailFormat.classList.remove("hide");
    inputEmail.classList.add("hide");
    userEmail.classList.add("incorrect");
  }
  else {
    inputEmail.classList.add("hide");
    wrongEmailFormat.classList.add("hide");
    userEmail.classList.remove("incorrect");
  }
}

function checkPassword () {
  if(!password.value) {
    inputPassword.classList.remove("hide");
    wrongPasswordFormat.classList.add("hide");
    password.classList.add("incorrect");
  }
  else if(password.value.length <= 7 && password.value.length >= 1) {
    wrongPasswordFormat.classList.remove("hide");
    inputPassword.classList.add("hide");
    password.classList.add("incorrect");
  }
  else {
    inputPassword.classList.add("hide");
    wrongPasswordFormat.classList.add("hide");
    password.classList.remove("incorrect");
  }
}

function signOkay() {
  if (
    userEmail.value &&
    email_regex.test(userEmail.value) &&
    password.value &&
    password.value.length >= 8
  ) {
    loginButton.classList.remove("buttonDisabled");
  }
  else {
    loginButton.classList.add("buttonDisabled");
  }
}

// userEmail.addEventListener('focusout', checkEmail);
// password.addEventListener('focusout', checkPassword);
// cfPassword.addEventListener('focusout', confirmPassword);

userEmail.addEventListener('input', checkEmail);
password.addEventListener('input', checkPassword);
cfPassword.addEventListener('input', confirmPassword);

userEmail.addEventListener('input', signOkay);
password.addEventListener('input', signOkay);
cfPassword.addEventListener('input', signOkay);
