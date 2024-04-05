
const emailInput = document.querySelector('#signin-email');
const pwInput = document.querySelector('#signin-pw');

const showErrorEmail = document.querySelector('.show-error-email');
const showErrorPw = document.querySelector('.show-error-pw');

const loginBtn = document.querySelector('.login-Btn');

let emailCheck;
let pwCheck;

emailInput.addEventListener('focusout', function () {
    if (emailInput.value === "") {
        emailInput.style.outline = "2px solid #F74747";
        showErrorEmail.textContent = '이메일을 입력해주세요';
        showErrorEmail.style.display = 'block';
        emailCheck = false;
    }
    else if (emailInput.value.indexOf('@') == -1) {
        emailInput.style.outline = "2px solid #F74747";
        showErrorEmail.textContent = '잘못된 이메일입니다';
        showErrorEmail.style.display = 'block';
        emailCheck = false;
    }
    else {
        emailCheck = true;
    }

    if (emailCheck && pwCheck) { 
        console.log('이메일&패스워드 정상입력');
        loginBtn.style.backgroundColor = "#3692ff";
        loginBtn.style.cursor = "pointer"
    }
    else {
        loginBtn.style.backgroundColor = "#9ca3af";
        loginBtn.style.cursor = "default"
    }
});

emailInput.addEventListener('focus', function () {
    emailInput.style.outline = "2px solid #3182f6";
    showErrorEmail.style.display = 'none';
});


pwInput.addEventListener('focusout', function () {
    if (pwInput.value === "") {
        pwInput.style.outline = "2px solid #F74747";
        showErrorPw.textContent = '비밀번호를 입력해주세요';
        showErrorPw.style.display = 'block';
        pwCheck = false;
    }
    else if (pwInput.value.length < 8) {
        pwInput.style.outline = "2px solid #F74747";
        showErrorPw.textContent = '비밀번호를 8자 이상 입력해주세요';
        showErrorPw.style.display = 'block';
        pwCheck = false;
    }
    else {
        pwCheck = true;
    }

    if (emailCheck && pwCheck) { 
        loginBtn.style.backgroundColor = "#3692ff";
        loginBtn.style.cursor = "pointer";
        loginBtn.style.pointerEvents = "all";
    }
    else {
        loginBtn.style.backgroundColor = "#9ca3af";
        loginBtn.style.cursor = "default";
    }
});

pwInput.addEventListener('focus', function () {
    pwInput.style.outline = "2px solid #3182f6";
    showErrorPw.style.display = 'none';
});

loginBtn.addEventListener('click', function () {
    window.location.href = "/pages/items.html";
});