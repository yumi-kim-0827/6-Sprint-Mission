import {
  handleEmailValid,
  handlePasswordValid,
  handleLoginButtonState,
} from '/utils/formValid.js';

const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#email-error');

const passwordInput = document.querySelector('#password');
const passwordError = document.querySelector('#password-error');

const loginButton = document.querySelector('.form-button');

const handleInputValid = (input, error, validFunction) => {
  input.addEventListener('focusout', () => {
    validFunction(input, error);
    handleLoginButtonState(loginButton, emailInput, passwordInput);
  });

  input.addEventListener('input', () => {
    handleLoginButtonState(loginButton, emailInput, passwordInput);
  });
};

handleInputValid(emailInput, emailError, handleEmailValid);
handleInputValid(passwordInput, passwordError, handlePasswordValid);
