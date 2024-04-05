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

//이벤트 리스너 등록
myEmail.addEventListener("focusout",checkId);
myNickname.addEventListener("focusout", checkName);
myPassword.addEventListener("focusout", checkPw);
passwordCheck.addEventListener("focusout", recheckPw);

//이메일 유효성
function checkId() {
    if (myEmail.value.length === 0) {
        document.querySelector("#email-error").innerHTML = EMAIL_ERROR.noValue;
        this.style.border='1px solid red';
    } else if (!isValidEmail(myEmail.value)) {
        document.querySelector("#email-error").innerHTML = EMAIL_ERROR.failValue;
        this.style.border='1px solid red';
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
        this.style.border='1px solid red';
    }
};

