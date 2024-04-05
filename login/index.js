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

emailInput.addEventListener('focusout', () => {
  handleEmailValid(emailInput, emailError);
  handleLoginButtonState(loginButton, emailInput, passwordInput);
});

passwordInput.addEventListener('focusout', () => {
  handlePasswordValid(passwordInput, passwordError);
  handleLoginButtonState(loginButton, emailInput, passwordInput);
});

emailInput.addEventListener('input', () => {
  handleLoginButtonState(loginButton, emailInput, passwordInput);
});

passwordInput.addEventListener('input', () => {
  handleLoginButtonState(loginButton, emailInput, passwordInput);
});
