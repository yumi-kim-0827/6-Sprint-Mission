import { signupBtnClickEvent, visibleIconClickEvent } from './loginSignupButtons.js';

const form = document.querySelector('.signup-form');
const email = document.querySelector('#email');
const firstpassword = document.querySelector('#password');
const passwordCheck = document.querySelector('#password-check');
const signupBtn = document.querySelector('#signup-btn');
const visibleIcons = document.querySelectorAll('.visible-icon');
const nickName = document.querySelector('#nickname');

// 에러 메세지 생성 및 추가
const emailErrMsg = document.createElement('p');
emailErrMsg.classList.add('error-msg');
const passwordErrMsg = document.createElement('p');
passwordErrMsg.classList.add('error-msg');
const passwordCheckErrMsg = document.createElement('p');
passwordCheckErrMsg.classList.add('error-msg');

// 회원가입 버튼 비활성화
signupBtn.setAttribute('disabled', true);

// 회원가입 폼 에러 이벤트 핸들러
function signupErrorEvent(e) {
  // 이메일 에러 조건
  if (email.value === '') {
    // 이메일 빈 문자열인 경우
    email.classList.add('error');
    emailErrMsg.textContent = '이메일을 입력해주세요.';
    email.after(emailErrMsg);
  } else if (!email.checkValidity()) {
    // 이메일 형식 유효하지 않은 경우
    email.classList.add('error');
    emailErrMsg.textContent = '잘못된 이메일 형식입니다.';
    email.after(emailErrMsg);
  } else {
    email.classList.remove('error');
    emailErrMsg.textContent = '';
  }

  // 비밀번호 에러 조건
  if (firstpassword.value === '') {
    // 비밀번호 빈 문자열인 경우
    firstpassword.classList.add('error');
    passwordErrMsg.textContent = '비밀번호를 입력해주세요.';
    firstpassword.after(passwordErrMsg);
  } else if (firstpassword.value.length < 8) {
    // 비밀번호 8자 이하인 경우
    firstpassword.classList.add('error');
    passwordErrMsg.textContent = '비밀번호를 8자 이상 입력 해주세요.';
    firstpassword.after(passwordErrMsg);
  } else {
    firstpassword.classList.remove('error');
    passwordErrMsg.textContent = '';
  }

  // 비밀번호 확인 에러 조건
  if (passwordCheck.value === '') {
    passwordCheck.classList.add('error');
    passwordCheckErrMsg.textContent = '비밀번호를 입력해주세요.';
    passwordCheck.after(passwordCheckErrMsg);
  } else if (firstpassword.value !== passwordCheck.value) {
    passwordCheck.classList.add('error');
    passwordCheckErrMsg.textContent = '비밀번호가 일치하지 않습니다.';
    passwordCheck.after(passwordCheckErrMsg);
  } else {
    passwordCheck.classList.remove('error');
    passwordCheckErrMsg.textContent = '';
  }

  // 회원가입 버튼 활성화 여부
  if (
    email.value === '' ||
    !email.checkValidity() ||
    firstpassword.value === '' ||
    firstpassword.value.length < 8 ||
    passwordCheck.value === '' ||
    firstpassword.value !== passwordCheck.value
  ) {
    signupBtn.setAttribute('disabled', true);
  } else {
    signupBtn.removeAttribute('disabled');
    signupBtn.style.backgroundColor = '#3692ff';
  }
}
form.addEventListener('focusout', signupErrorEvent);

// 회원가입 버튼 클릭시 login 페이지로 이동
signupBtn.addEventListener('click', signupBtnClickEvent);

// 비밀번호 표시 여부
visibleIcons.forEach((icon) => {
  icon.addEventListener('click', visibleIconClickEvent);
});

// 닉네임 텍스트 입력되면 테두리 색깔 유지
function nickNameFocusOut() {
  if (nickName.value !== '') {
    nickName.classList.add('on');
  } else {
    nickName.classList.remove('on');
  }
}
nickName.addEventListener('focusout', nickNameFocusOut);
