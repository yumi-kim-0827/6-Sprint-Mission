'use strict';
// Check email validity
const emailInput = document.querySelector('#email');
const failureMsgNull = document.querySelector('.failure-message-null');
const failureMsgInvalid = document.querySelector('.failure-message-invalid');
const checkEmailValidity = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

emailInput.classList.remove('border-error');
function emailChecker() {
    const emailValue = emailInput.value;

    if (emailValue.length < 1) {
        failureMsgNull.classList.remove('hide');
        emailInput.classList.add('border-error');
    } else if (checkEmailValidity.test(emailValue) === false) {
        failureMsgInvalid.classList.remove('hide');
        emailInput.classList.add('border-error');
    } else {
        failureMsgNull.classList.add('hide');
        emailInput.classList.remove('border-error');
    }
}

function removeError() {
    failureMsgNull.classList.add('hide');
    failureMsgInvalid.classList.add('hide');
}

emailInput.addEventListener('focusout', emailChecker);
emailInput.addEventListener('focusin', removeError);

// Check password validity
const passwordInput = document.querySelector('#password');
const failureMsgPasswordNull = document.querySelector('.failure-message-password-null');
const failureMsgPasswordInvalid = document.querySelector('.failure-message-password-invalid');

function passwordChecker() {
    const passwordValue = passwordInput.value;

    if (passwordValue.length < 1) {
        failureMsgPasswordNull.classList.remove('hide');
        passwordInput.classList.add('border-error');
    } else if (passwordValue.length < 8) {
        failureMsgPasswordInvalid.classList.remove('hide');
        passwordInput.classList.add('border-error');
    } else {
        passwordInput.classList.remove('border-error');
        failureMsgPasswordNull.classList.add('hide');
    }
}

function removePasswordError() {
    failureMsgPasswordNull.classList.add('hide');
    failureMsgPasswordInvalid.classList.add('hide');
}

passwordInput.addEventListener('focusout', passwordChecker);
passwordInput.addEventListener('focusin', removePasswordError);

// Activate LoginBtn
const loginBtn = document.querySelector('.login-btn');
const form = document.querySelector('form');
loginBtn.classList.remove('activated');
const isActiveLogin = () => {
    const emailValue = emailInput.value;
    let passwordValue = passwordInput.value;

    if (
        emailValue &&
        passwordValue &&
        passwordValue.length >= 8 &&
        checkEmailValidity.test(emailValue) &&
        emailValue.length >= 1
    ) {
        loginBtn.disabled = false;
        loginBtn.classList.add('activated');
    } else {
        loginBtn.disabled = true;
        loginBtn.classList.remove('activated');
    }
};

const init = () => {
    emailInput.addEventListener('input', isActiveLogin);
    passwordInput.addEventListener('input', isActiveLogin);
    emailInput.addEventListener('keyup', isActiveLogin);
    passwordInput.addEventListener('keyup', isActiveLogin);
};

init();

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
