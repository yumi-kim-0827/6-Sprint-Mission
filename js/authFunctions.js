// authFunctions.js

import {
  noneEmailCheck,
  nonePasswordCheck,
  failEmailCheck,
  failPasswordCheck,
  noneNameCheck,
  samePasswordCheck,
  errorMessage,
} from "./sign.js";

export function checkemail(email, emailerror) {
  if (noneEmailCheck(email.value) === false) {
    email.classList.add("error");
    email.classList.remove("success");
    emailerror.style.display = "block";
    emailerror.textContent = errorMessage.none_email;
  } else if (failEmailCheck(email.value) === false) {
    email.classList.add("error");
    email.classList.remove("success");
    emailerror.style.display = "block";
    emailerror.textContent = errorMessage.fail_email;
  } else {
    email.classList.add("success");
    emailerror.style.display = "none";
  }
}

export function checkpassword(password, passworderror) {
  if (nonePasswordCheck(password.value) === false) {
    password.classList.add("error");
    passworderror.style.display = "block";
    passworderror.textContent = errorMessage.none_password;
  } else if (failPasswordCheck(password.value) === false) {
    password.classList.add("error");
    passworderror.textContent = errorMessage.fail_password;
    passworderror.style.display = "block";
  } else {
    password.classList.add("success");
    passworderror.style.display = "none";
  }
}

export function checkname(name, nameerror) {
  if (noneNameCheck(name.value) === false) {
    name.classList.add("error");
    name.classList.remove("success");
    nameerror.style.display = "block";
    nameerror.textContent = errorMessage.none_name;
  } else {
    nameerror.style.display = "none";
    name.classList.add("success");
  }
}

export function checksamepassword(password, samepassword, samepassworderror) {
  if (nonePasswordCheck(samepassword.value) === false) {
    samepassworderror.style.display = "block";
    samepassword.classList.add("error");
    samepassworderror.textContent = errorMessage.none_password;
  } else if (failPasswordCheck(samepassword.value) === false) {
    samepassworderror.style.display = "block";
    samepassword.classList.add("error");
    samepassworderror.textContent = errorMessage.fail_password;
  } else if (!samePasswordCheck(password.value, samepassword.value)) {
    samepassworderror.style.display = "block";
    samepassworderror.textContent = errorMessage.same_password;
  } else {
    samepassword.classList.add("success");
    samepassworderror.style.display = "none";
  }
}

export function changeeye(password, eye) {
  if (password.type === "password") {
    password.type = "text";
    eye.src = "/img/Property 1=Variant2.png";
  } else {
    password.type = "password";
    eye.src = "/img/Property 1=Default.png";
  }
}

export function ablelogin(email, password, loginbutton) {
  const emailValid = noneEmailCheck(email.value) && failEmailCheck(email.value);
  const passwordValid =
    nonePasswordCheck(password.value) && failPasswordCheck(password.value);
  if (emailValid && passwordValid) {
    loginbutton.disabled = false;
    loginbutton.classList.add("buttonable");
  } else {
    loginbutton.disabled = true;
    loginbutton.classList.remove("buttonable");
  }
}

export function ablesubmit(email, password, name, passwordcheck, submitbutton) {
  const emailValid = noneEmailCheck(email.value) && failEmailCheck(email.value);
  const passwordValid =
    nonePasswordCheck(password.value) && failPasswordCheck(password.value);
  const nameValid = noneNameCheck(name.value);
  const passwordCheckValid =
    nonePasswordCheck(passwordcheck.value) &&
    failPasswordCheck(passwordcheck.value);

  if (emailValid && passwordValid && nameValid && passwordCheckValid) {
    submitbutton.disabled = false;
    submitbutton.classList.add("buttonable");
  } else {
    submitbutton.disabled = true;
    submitbutton.classList.remove("buttonable");
  }
}
