const myEmail = document.getElementById('email');
const emailError= document.querySelector('#email-error');
const myNickname = document.getElementById('nickname');
const nicknameError = document.querySelector("#nickname-error");
const myPassword = document.getElementById('password');
const pwError = document.querySelector("#password-error");
const passwordCheck = document.getElementById('password-repeat');
const pwCheckError = document.querySelector("#password-repeat-error");
const pwImage = document.querySelector('.password-image');
const loginButton = document.querySelector('.login-pill-button');

//에러메세지
const EMAIL_ERROR = {
    noValue : '이메일을 입력해주세요.',
    failValue : '잘못된 이메일 형식입니다.',
};

const NICKNAME_ERROR = {
    noValue : '닉네임을 입력해주세요.'
};

const PASSWORD_ERROR  = {
    noValue : '비밀번호를 입력해주세요.',
    failValue : '비밀번호를 8자 이상 입력해주세요.',
    checkValue : '비밀번호가 일치하지 않습니다.',
};

const errorBorder = '1px solid red';

//이벤트 리스너 등록
myEmail.addEventListener("focusout",checkId);
myNickname.addEventListener("focusout", checkName);
myPassword.addEventListener("focusout", checkPw);
passwordCheck.addEventListener("focusout", recheckPw);

//이메일 유효성
function checkId() {
    if (myEmail.value.length === 0) {
        emailError.innerHTML = EMAIL_ERROR.noValue;
        this.style.border=errorBorder;
    } else if (!isValidEmail(myEmail.value)) {
        emailError.innerHTML = EMAIL_ERROR.failValue;
        this.style.border=errorBorder;
    } else {
        emailError.innerHTML = '';
        this.style.border = '';         
    }
};

//이메일 유효성 검사
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

//닉네임 유효성
function checkName() {
    if (myNickname.value.length === 0) {
        nicknameError.innerHTML = NICKNAME_ERROR.noValue;
        this.style.border=errorBorder;
    } else {
        nicknameError.innerHTML = '';
        this.style.border = '';   
    }
};

//비밀번호 유효성
function checkPw() {
    if (myPassword.value.length === 0) {
        pwError.innerHTML = PASSWORD_ERROR.noValue;
        this.style.border=errorBorder;
    } else if (myPassword.value.length < 8) {
        pwError.innerHTML = PASSWORD_ERROR.failValue;
        this.style.border=errorBorder;
    } else {
        pwError.innerHTML = '';
        this.style.border = '';         
    }
};

//비밀번호확인 유효성
function recheckPw() {
    if (passwordCheck.value.length === 0) {
        pwCheckError.innerHTML = PASSWORD_ERROR.noValue;
        this.style.border=errorBorder;
    } else if (passwordCheck.value !== myPassword.value) {
        pwCheckError.innerHTML = PASSWORD_ERROR.checkValue;
        this.style.border=errorBorder;
    } else {
        pwCheckError.innerHTML = '';
        this.style.border = '';         
    }
};

//버튼 활성화
myEmail.addEventListener("keyup", activeEvent);
myNickname.addEventListener("keyup", activeEvent);
myPassword.addEventListener("keyup", activeEvent);
passwordCheck.addEventListener("keyup", activeEvent);

function activeEvent() {
    const emailValid = isValidEmail(myEmail.value);
    const nicknameValid = myNickname.value !== '';
    const pwValid = myPassword.value !== '' && myPassword.value.length >= 8;
    const recheckPwValid = myPassword.value === passwordCheck.value;

    if (emailValid && nicknameValid && pwValid && recheckPwValid) {
        loginButton.disabled = false;
    } else {
        loginButton.disabled = true;
    }
};

//비밀번호 눈 아이콘 표시
pwImage.addEventListener('click', function() {
    if (myPassword.type === 'password') {
        myPassword.type = 'text';
        pwImage.src = '/images/logo/password-visible.png';
    } else {
        myPassword.type = 'password';
        pwImage.src = '/images/logo/password.png';
    }
});