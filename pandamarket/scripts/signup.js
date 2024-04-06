import * as authHandler from "./authPageHandler.js";

const eyeIcon = document.getElementById('eyeIcon');
const eyeIconVerify = document.getElementById('eyeIcon-verify');
eyeIcon.addEventListener('click', authHandler.togglePasswordVisibility);
eyeIconVerify.addEventListener('click', authHandler.togglePasswordVisibility);

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const password = document.getElementById('password');
  form.addEventListener('focusin', authHandler.inputFocusInStyle);
  form.addEventListener('focusout', handleValidation);
  // form제출 로직
  form.addEventListener('submit', function (e) {
    const focusout = new Event('focusout', {bubbles: true});
    const inputs = document.querySelectorAll('input');
    e.preventDefault();
    const isFormValid = authHandler.formCheck();
    if (isFormValid) {
      window.location.href = './signin.html';
    } else {
      for (const input of inputs) {
        input.dispatchEvent(focusout);
      }
    }
  });

  function handleValidation(e) {
    const target = e.target;
    let valid = true;
    let message = "";

    switch(target.id) {
      case 'email':
        message = '이메일을 입력해주세요';
        valid = authHandler.validateEmail(target.value);
        if (target.value !== '') {
        message = '잘못된 이메일 형식입니다';
        }
        break;
      case 'password':
        message = '비밀번호를 입력해주세요';
        valid = authHandler.validatePassword(target.value);
        if (target.value !== '') {
          message = '비밀번호를 8자 이상 입력해주세요';
        }
        break;
      case 'nickname':
        message = '닉네임을 입력해주세요';
        if (target.value === '') {
          valid = false;
        }
        break;
      case 'password-verify':
        message = '비밀번호를 다시 한번 입력해주세요';
        valid = authHandler.validatePasswordVerify(password.value, target.value);
        if (target.value !== '') {
          message = '비밀번호가 일치하지 않습니다';
        }
        break;
    }
    if (!valid) {
      authHandler.inputErrorStyle(e);
      authHandler.addErrorMessage(message, target.parentElement);
      authHandler.formCheck();
    } else {
      authHandler.removeErrorMessage(target.parentElement);
      authHandler.inputSuccessStyle(e);
      authHandler.formCheck();
    } 
  }
});