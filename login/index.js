import {
  handleEmailValid,
  handlePasswordValid,
  handleButtonState,
} from '/utils/formValid.js';

const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#email-error');

const passwordInput = document.querySelector('#password');
const passwordError = document.querySelector('#password-error');

const inputButton = document.querySelector('.form-button');

emailInput.addEventListener('focusout', () => {
  handleEmailValid(emailInput, emailError);
  handleButtonState(inputButton, emailInput, passwordInput);
});

passwordInput.addEventListener('focusout', () => {
  handlePasswordValid(passwordInput, passwordError);
  handleButtonState(inputButton, emailInput, passwordInput);
});

emailInput.addEventListener('input', () => {
  handleButtonState(inputButton, emailInput, passwordInput);
});

passwordInput.addEventListener('input', () => {
  handleButtonState(inputButton, emailInput, passwordInput);
});
