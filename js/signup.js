import {
  checkemail,
  checkpassword,
  checkname,
  checksamepassword,
  changeeye,
  ablesubmit,
} from "../js/authFunctions.js";

const email = document.querySelector(".input-email");
const password = document.querySelector(".input-password");
const submitbutton = document.querySelector("button");
const name = document.querySelector(".input-name");
const samepassword = document.querySelector("#password-check");
const emailerror = document.querySelector(".email-error");
const passworderror = document.querySelector(".password-error");
const nameerror = document.querySelector(".name-error");
const samepassworderror = document.querySelector(".samepassword-error");
const eye1 = document.querySelector(".password-img1");
const eye2 = document.querySelector(".password-img2");

email.addEventListener("focusout", function () {
  checkemail(email, emailerror);
  ablesubmit(email, password, name, samepassword, submitbutton);
});
password.addEventListener("focusout", function () {
  checkpassword(password, passworderror);
  ablesubmit(email, password, name, samepassword, submitbutton);
});

samepassword.addEventListener("focusout", function () {
  checksamepassword(password, samepassword, samepassworderror);
});

name.addEventListener("focusout", function () {
  checkname(name, nameerror);
});
eye1.addEventListener("click", function () {
  changeeye(password, eye1);
});
eye2.addEventListener("click", function () {
  changeeye(samepassword, eye2);
});
