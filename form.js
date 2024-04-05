const myEmail = document.getElementById('email');
const myNickname = document.getElementById('nickname');
const myPassword = document.getElementById('password');
const passwordCheck = document.getElementById('password-repeat');

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
        document.querySelector("#email-error").innerHTML = EMAIL_ERROR.noValue;
        this.style.border=errorBorder;
    } else if (!isValidEmail(myEmail.value)) {
        document.querySelector("#email-error").innerHTML = EMAIL_ERROR.failValue;
        this.style.border=errorBorder;
    } else {
        document.querySelector("#email-error").innerHTML = '';
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
        document.querySelector("#nickname-error").innerHTML = NICKNAME_ERROR.noValue;
        this.style.border=errorBorder;
    } else {
        document.querySelector("#nickname-error").innerHTML = '';
        this.style.border = '';   
    }
};

//비밀번호 유효성
function checkPw() {
    if (myPassword.value.length === 0) {
        document.querySelector("#password-error").innerHTML = PASSWORD_ERROR.noValue;
        this.style.border=errorBorder;
    } else if (myPassword.value.length < 8) {
        document.querySelector("#password-error").innerHTML = PASSWORD_ERROR.failValue;
        this.style.border=errorBorder;
    } else {
        document.querySelector("#password-error").innerHTML = '';
        this.style.border = '';         
    }
};

//비밀번호확인 유효성
function recheckPw() {
    if (passwordCheck.value.length === 0) {
        document.querySelector("#password-repeat-error").innerHTML = PASSWORD_ERROR.noValue;
        this.style.border=errorBorder;
    } else if (passwordCheck.value !== myPassword.value) {
        document.querySelector("#password-repeat-error").innerHTML = PASSWORD_ERROR.checkValue;
        this.style.border=errorBorder;
    } else {
        document.querySelector("#password-repeat-error").innerHTML = '';
        this.style.border = '';         
    }
};
