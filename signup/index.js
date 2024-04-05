import {
  handleSignupButtonState,
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

const signupButton = document.querySelector('.form-button');

const handleInputValid = (input, error, validFunction) => {
  input.addEventListener('focusout', () => {
    const functionArgs =
      validFunction === handlePwdCheckValid
        ? [passwordInput, input, error]
        : [input, error];

    validFunction(...functionArgs);

    handleSignupButtonState(
      signupButton,
      emailInput,
      nicknameInput,
      passwordInput,
      pwdCheckInput
    );
  });

  input.addEventListener('input', () => {
    handleSignupButtonState(
      signupButton,
      emailInput,
      nicknameInput,
      passwordInput,
      pwdCheckInput
    );
  });
};

handleInputValid(emailInput, emailError, handleEmailValid);
handleInputValid(nicknameInput, nicknameError, handleNicknameValid);
handleInputValid(passwordInput, passwordError, handlePasswordValid);
handleInputValid(pwdCheckInput, pwdCheckError, handlePwdCheckValid);
