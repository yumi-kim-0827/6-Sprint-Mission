import { toggleSwitch } from "./switch.js";
import { emailError,pwError } from "./loginCheck.js";
//클로저로  변수 함수에 저장이 된다.
const toggle = document.getElementById("eyeIcon");
toggle.addEventListener("click", toggleSwitch);

const input = document.querySelector(".emailInput");
const errorMessage = document.querySelector(".email-error-message");
input.addEventListener("focusout",()=>emailError(input,btn,errorMessage));

const pwInput = document.querySelector(".passwordBar");
const errorMessage2 = document.querySelector(".pw-error-message");
pwInput.addEventListener("focusout",()=>pwError(pwInput,btn,errorMessage2))

const btn = document.querySelector(".loginButton");
