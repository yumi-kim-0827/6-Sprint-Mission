import {
  emailCheck,
  checkEmail,
  updateEmailOutLine,
  checkPassword,
  updatePwdOutLine,
} from "./login.js";

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const pwdContainer = document.querySelector("#pwdContainer");
const signupBtn = document.querySelector("#signupBtn");
signupBtn.disabled = true;
const emailUnderMessage = document.createElement("p");
const pwdUnderMessage = document.createElement("p");
emailUnderMessage.className = "inputUnderMessage";
pwdUnderMessage.className = "inputUnderMessage";

email.addEventListener("input", checkEmail);
email.addEventListener("focusout", updateEmailOutLine);

password.addEventListener("input", checkPassword);
password.addEventListener("focusout", updatePwdOutLine);
