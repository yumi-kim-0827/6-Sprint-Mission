
import { emailCheck,passwordCheck,passwordDoubleCheck,nickNameCheck} from "./input_check.js";


const Input = document.querySelector('form');
const login_btn =  document.querySelector('.login-form button');
login_btn.setAttribute('disabled', true);
let passwordValid = false;
let emailValid = false;
let nickNameValid = false;
let password1;
let passwordDoubleCheckValid = false;

Input.addEventListener("input", (event) => {
  const userInput = event.target;

  switch (userInput.id) {
    case "userEmail":
      emailValid = emailCheck(userInput);
      break;
    case "userPassword":
      passwordValid = passwordCheck(userInput);
      password1 = userInput.value;
      break;
    case "userPasswordCheck":
      passwordDoubleCheckValid = passwordDoubleCheck(userInput, password1);
      break;
    case "userNickName":
      nickNameValid = nickNameCheck(userInput);
      break;
  }

  if (
    emailValid &&
    passwordValid &&
    passwordDoubleCheckValid &&
    nickNameValid
  ) {
    login_btn.removeAttribute("disabled");
  } else {
    login_btn.setAttribute("disabled", true);
  }
});

login_btn.addEventListener('click', (event)=> {
    event.preventDefault();
    window.location.href = "./signin.html";
});
