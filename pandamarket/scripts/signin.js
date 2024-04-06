import * as authHandler from "./authPageHandler.js";

const eyeIcon = document.getElementById('eyeIcon');
eyeIcon.addEventListener('click', authHandler.togglePasswordVisibility);

// dom파싱, 로드된 이후 실행하며 이벤트 위임을 구현해 보자
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  form.addEventListener('focusin', authHandler.inputFocusInStyle);
  form.addEventListener('focusout', handleValidation);
  // form제출 로직
  form.addEventListener('submit', function (e) {
  const focusout = new Event('focusout',{ bubbles:true});
  const inputs = document.querySelectorAll('input');
    e.preventDefault();
    const isFormValid = authHandler.formCheck();
    if (isFormValid) {
      window.location.href = './item.html';
    } else {
      for(const input of inputs) {
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