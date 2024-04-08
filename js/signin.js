import {
  checkemail,
  checkpassword,
  ablelogin,
  changeeye,
} from "./authFunctions.js";

const email = document.querySelector(".input-email");
const password = document.querySelector(".input-password");
const loginbutton = document.querySelector("button");
const emailerror = document.querySelector(".email-error");
const passworderror = document.querySelector(".password-error");
const eye = document.querySelector(".password-img1");

email.addEventListener("focusout", function () {
  checkemail(email, emailerror);
  ablelogin(email, password, loginbutton);
});
password.addEventListener("focusout", function () {
  checkpassword(password, passworderror);
  ablelogin(email, password, loginbutton);
});
eye.addEventListener("click", function () {
  changeeye(password, eye);
});
