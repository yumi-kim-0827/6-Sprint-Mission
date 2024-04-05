const myEmail = document.getElementById('email');
const myNickname = document.getElementById('nickname');
const myPassword = document.getElementById('password');
const passwordCheck = document.getElementById('password-repeat');

//에러메세지 객체
const EMAIL_ERROR = {
    noValue : '이메일을 입력해주세요.',
    failValue : '잘못된 이메일 형식입니다.',
}

const NICKNAME_ERROR = {
    noValue : '닉네임을 입력해주세요.'
}

const PASSWORD_ERROR  = {
    noValue : '비밀번호를 입력해주세요.',
    failValue : '비밀번호를 8자 이상 입력해주세요.',
    checkValue : '비밀번호가 일치하지 않습니다.',
}