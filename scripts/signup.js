'use strict';

const form = document.querySelector('form');
const email = document.querySelector('#panda-market-email');
const nickname = document.querySelector('#panda-market-nickname');
const password = document.querySelector('#panda-market-password');
const password_confirm = document.querySelector('#panda-market-password-confirm');
const form_button = document.querySelector('#panda-market-signup-button');
const invalidSpanList = document.querySelectorAll('.invalid-message');
const emailValidityChar =  /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9]+\.[A-Za-z]{2,3}/;

const checkValidity = () => {
    const _valid = [...invalidSpanList].every((v) => [...v['classList']].includes('valid'));
    if(_valid) { form_button.disabled = false; }
    else { form_button.disabled = true; }
}

const emailConfirm = (e) => {
    if(email.value === "" || !emailValidityChar.test(email.value)) {
        email.classList.add('invalid');
        invalidSpanList[0].textContent = (email.value === "" ? '이메일을 입력해주세요.' : '잘못된 이메일 형식입니다.');
        invalidSpanList[0].classList.remove('hide', 'valid');
    } else if(email.value !== "" && !!emailValidityChar.test(email.value)) {
        email.classList.remove('invalid');
        invalidSpanList[0].classList.add('hide', 'valid');
    }
    checkValidity();
}

const selectPasswordSpan = () => {
    if(invalidSpanList.length === 2) {
        return [ invalidSpanList[1], null];
    } else {
        return [ invalidSpanList[2], invalidSpanList[3]];
    }
}

const passwordCompare = () => {
    if(password.value === "" || password_confirm.value === "") return;

    const [passwordSpan, passwordConfirmSpan] =  selectPasswordSpan();
    if(password.value !== password_confirm.value) {
        password.classList.add('invalid');
        password_confirm.classList.add('invalid');
        passwordSpan.classList.remove('hide', 'valid');
        passwordConfirmSpan.classList.remove('hide', 'valid');
        passwordSpan.textContent = '비밀번호가 일치하지 않습니다.';
        passwordConfirmSpan.textContent = '비밀번호가 일치하지 않습니다.';
    } else if(password.value === password_confirm.value) {
        password.classList.remove('invalid');
        password_confirm.classList.remove('invalid');
        passwordSpan.classList.add('hide', 'valid');
        passwordConfirmSpan.classList.add('hide', 'valid');
    }
    checkValidity();
}
const passwordCheck = (e) => {
    const [passwordSpan, passwordConfirmSpan] =  selectPasswordSpan();

    if(password.value === "" || password.value.length < 8) {
        password.classList.add('invalid');
        passwordSpan.classList.remove('hide', 'valid');
        passwordSpan.textContent = (password.value === "" ? '비밀번호를 입력해주세요.' : '비밀번호를 8자 이상 입력해주세요.');
    } else if(password.value !== "" && password.value.length >= 8) {
        password.classList.remove('invalid');
        passwordSpan.classList.add('hide', 'valid');
        passwordCompare();
    }

    if (password_confirm && e.target === password_confirm) {
        if (password_confirm.value === "" || password_confirm.value.length < 8) {
            password_confirm.classList.add('invalid');
            passwordConfirmSpan.classList.remove('hide', 'valid');
            passwordConfirmSpan.textContent = (password_confirm.value === "" ? '비밀번호를 입력해주세요.' : '비밀번호를 8자 이상 입력해주세요.');
        } else if(password_confirm.value !== "" && password_confirm.value.length >= 8) {
            password_confirm.classList.remove('invalid');
            passwordConfirmSpan.classList.add('hide', 'valid');
            passwordCompare();
        }
    }
    checkValidity();
}

const nicknameConfirm = (e) => {
    if(nickname.value === "") {
        nickname.classList.add('invalid');
        invalidSpanList[1].classList.remove('hide', 'valid');
        invalidSpanList[1].textContent = '닉네임을 입력해주세요.';
    } else if (e.target.value !== "") {
        nickname.classList.remove('invalid');
        invalidSpanList[1].classList.add('hide', 'valid');
    }
    checkValidity();
}




if(email) {
    email.addEventListener('focusout', emailConfirm);
}
if(nickname) {
    nickname.addEventListener('focusout', nicknameConfirm);
}
if(password) {
    password.addEventListener('focusout', passwordCheck);
}
if(password_confirm) {
    password_confirm.addEventListener('focusout', passwordCheck);
    password.addEventListener('input', passwordCompare);
    password_confirm.addEventListener('input', passwordCompare);
}

