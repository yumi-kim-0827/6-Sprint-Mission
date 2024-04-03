'use strict';
const emailInput = document.querySelector('#email');
const failureMsg = document.querySelector('.failure-message');
const failureMsg2 = document.querySelector('.failure-message2');

function emailChecker() {
    const checkEmailValidity = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    const emailValue = emailInput.value;

    if (emailValue.length < 1) {
        failureMsg.classList.remove('hide');
        emailInput.classList.add('border-error');
    } else if (checkEmailValidity.test(emailValue) === false) {
        failureMsg2.classList.remove('hide');
    } else {
        emailInput.classList.remove('border-error');
        failureMsg.classList.add('hide');
    }
}

function removeError() {
    failureMsg.classList.add('hide');
    failureMsg2.classList.add('hide');
}

emailInput.addEventListener('focusout', emailChecker);
emailInput.addEventListener('focusin', removeError);

// 비밀번호 타입 토글버튼 구현
const eyeBtn = document.querySelector('.eye_btn');
const pwInput = document.querySelector('#password');

function togglePassword() {
    if (pwInput.type !== 'text') {
        pwInput.type = 'text';
    } else {
        pwInput.type = 'password';
    }
}

eyeBtn.addEventListener('click', togglePassword);
