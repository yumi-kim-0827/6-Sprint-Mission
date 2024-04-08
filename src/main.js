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

// passwordCheck input
const passwordCheckInput = document.querySelector('#password-check');
const failureMsgPasswordcheck = document.querySelector('.failure-message-passwordcheck');
function passwordMatch() {
    if (passwordCheckInput.value !== passwordInput.value) {
        failureMsgPasswordcheck.classList.remove('hide');
        passwordCheckInput.classList.add('border-error');
    } else {
        passwordCheckInput.classList.remove('border-error');
        failureMsgPasswordcheck.classList.add('hide');
    }
}
function removePasswordcheckError() {
    failureMsgPasswordcheck.classList.add('hide');
}

if (passwordCheckInput) {
    passwordCheckInput.addEventListener('focusout', passwordMatch);
    passwordCheckInput.addEventListener('focusin', removePasswordcheckError);
}

// nickname checker
const nicknameInput = document.querySelector('#nickname');
const failureMsgNicknameNull = document.querySelector('.failure-message-nickname');
function nicknameChecker() {
    if (nicknameInput.value.length < 1) {
        failureMsgNicknameNull.classList.remove('hide');
        nicknameInput.classList.add('border-error');
    } else {
        nicknameInput.classList.remove('border-error');
    }
}

function removeNicknameError() {
    failureMsgNicknameNull.classList.add('hide');
    failureMsgNicknameNull.classList.add('hide');
}
if (nicknameInput) {
    nicknameInput.addEventListener('focusout', nicknameChecker);
    nicknameInput.addEventListener('focusin', removeNicknameError);
}

// Activate LoginBtn
const loginBtn = document.querySelector('.login-btn');

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
if (loginBtn) {
    loginBtn.classList.remove('activated');
    init();
}

// Activate sign-up Btn
const signupBtn = document.querySelector('.signup-btn');

const isActiveSignup = () => {
    const emailValue = emailInput.value;
    const nicknameValue = nicknameInput.value;
    const passwordValue = passwordInput.value;
    const passwordCheckValue = passwordCheckInput.value;

    if (
        emailValue &&
        passwordValue &&
        passwordValue.length >= 8 &&
        checkEmailValidity.test(emailValue) &&
        emailValue.length >= 1 &&
        nicknameValue.length >= 1 &&
        passwordCheckValue === passwordValue
    ) {
        signupBtn.disabled = false;
        signupBtn.classList.add('activated');
    } else {
        signupBtn.disabled = true;
        signupBtn.classList.remove('activated');
    }
};

const initSignup = () => {
    emailInput.addEventListener('input', isActiveSignup);
    passwordInput.addEventListener('input', isActiveSignup);
    emailInput.addEventListener('keyup', isActiveSignup);
    passwordInput.addEventListener('keyup', isActiveSignup);
    nicknameInput.addEventListener('input', isActiveSignup);
    passwordCheckInput.addEventListener('input', isActiveSignup);
    nicknameInput.addEventListener('keyup', isActiveSignup);
    passwordCheckInput.addEventListener('keyup', isActiveSignup);
};
if (signupBtn) {
    signupBtn.classList.remove('activated');
    initSignup();
}

// 비밀번호 타입 토글버튼 구현
const eyeBtn = document.querySelector('.eye_btn');
const eyeBtn2 = document.querySelector('.eye_btn2');

function togglePassword() {
    if (passwordInput.type !== 'text') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}
eyeBtn.addEventListener('click', togglePassword);

function togglePasswordCheck() {
    if (passwordCheckInput.type !== 'text') {
        passwordCheckInput.type = 'text';
    } else {
        passwordCheckInput.type = 'password';
    }
}
if (passwordCheckInput) {
    eyeBtn2.addEventListener('click', togglePasswordCheck);
}
