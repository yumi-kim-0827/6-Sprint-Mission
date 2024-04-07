const userEmail = document.querySelector('#user-email');
const password = document.querySelector('#pw');
const button = document.querySelector('button');

const inputEmail = document.querySelector('.inputEmail');
const wrongEmailFormat = document.querySelector('.wrongEmailFormat');
const inputPassword = document.querySelector('.inputPassword');
const wrongPasswordFormat = document.querySelector('.wrongPasswordFormat');

function checkEmail () {
  const email_regex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;;
  if(!userEmail.value) {
    inputEmail.classList.remove("hide");
    wrongEmailFormat.classList.add("hide");
  }
  else if(!email_regex.test(userEmail.value)) {
    wrongEmailFormat.classList.remove("hide");
    inputEmail.classList.add("hide");
  }
  else {
    inputEmail.classList.add("hide");
    wrongEmailFormat.classList.add("hide");
  }
}

function checkPassword () {
  if(!password.value) {
    inputPassword.classList.remove("hide");
    wrongPasswordFormat.classList.add("hide");
  }
  else if(password.value.length <= 7 && password.value.length >= 1) {
      wrongPasswordFormat.classList.remove("hide");
      inputPassword.classList.add("hide");
    }
  else {
    inputPassword.classList.add("hide");
    wrongPasswordFormat.classList.add("hide");
  }
}

userEmail.addEventListener('focusout', checkEmail);
password.addEventListener('focusout', checkPassword);