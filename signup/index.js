import {
  handleEmailValid,
  handleNicknameValid,
  handlePasswordValid,
  handlePwdCheckValid,
} from '/utils/formValid.js';

const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#email-error');

const nicknameInput = document.querySelector('#nickname');
const nicknameError = document.querySelector('#nickname-error');

const passwordInput = document.querySelector('#password');
const passwordError = document.querySelector('#password-error');

const pwdCheckInput = document.querySelector('#password-check');
const pwdCheckError = document.querySelector('#password-check-error');

emailInput.addEventListener('focusout', () => {
  handleEmailValid(emailInput, emailError);
});

nicknameInput.addEventListener('focusout', () => {
  handleNicknameValid(nicknameInput, nicknameError);
});

passwordInput.addEventListener('focusout', () => {
  handlePasswordValid(passwordInput, passwordError);
});

pwdCheckInput.addEventListener('focusout', () => {
  handlePwdCheckValid(passwordInput, pwdCheckInput, pwdCheckError);
});
