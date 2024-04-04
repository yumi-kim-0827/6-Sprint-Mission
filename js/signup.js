const emailInputElement = document.getElementById('email');
const emailMessageElement = document.getElementById('email-input-message');
const pwdInputElement = document.getElementById('password');
const pwdMessageElement = document.getElementById('pwd-input-message');
const pwdBtnElement = document.getElementById('password-btn');
const checkPwdBtnElement = document.getElementById('check-password-btn');

/**
 * email 유효성 검사에 실패한 경우 실행되는 함수
 *
 * @param {Object} event
 */
function checkEmailInput(event) {
  const NULL_MESSAGE = '이메일을 입력해주세요.';
  const WRONG_MESSAGE = '잘못된 이메일 형식입니다.';
  const REGEXP =
    /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/i;
  const email = emailInputElement.value;

  if (!email) {
    event.target.style.border = '1px solid red';
    emailMessageElement.innerText = NULL_MESSAGE;
    emailMessageElement.classList.add('message-on');
  } else if (!REGEXP.test(email)) {
    event.target.style.border = '1px solid red';
    emailMessageElement.innerText = WRONG_MESSAGE;
    emailMessageElement.classList.add('message-on');
  }
}

/**
 * password 유효성 검사에 실패한 경우 실행되는 함수
 * 
 * @param {Object} event 
 */
function checkPwdInput(event) {
  const NULL_MESSAGE = '비밀번호를 입력해주세요.';
  const WRONG_MESSAGE = '비밀번호를 8자 이상 입력해주세요.';

  if (!pwdInputElement.value) {
    event.target.style.border = '1px solid red';
    pwdMessageElement.innerText = NULL_MESSAGE;
    pwdMessageElement.classList.add('message-on');
  } else if (pwdInputElement.value.length < 9) {
    event.target.style.border = '1px solid red';
    pwdMessageElement.innerText = WRONG_MESSAGE;
    pwdMessageElement.classList.add('message-on');
  }
}

/**
 * input 태그에 focusin 된 경우 원상태로 돌리는 함수
 * 
 * @param {Object} event 
 */
function resetInputMessage(event) {
  event.target.style.border = 'initial';
  emailMessageElement.classList.remove('message-on');
}

/**
 * 비밀번호를 보여주는 버튼에 아이콘 변경 클래스 추가
 *
 * @param {Object} event
 */
function toggleBtnClassName(event) {
  event.target.classList.toggle('visibility');
}

emailInputElement.addEventListener('focusout', checkEmailInput);
emailInputElement.addEventListener('focusin', resetInputMessage);
pwdInputElement.addEventListener('focusout', checkPwdInput);
pwdInputElement.addEventListener('focusin', resetPwdEvent);
pwdBtnElement.addEventListener('click', toggleBtnClassName);
checkPwdBtnElement.addEventListener('click', toggleBtnClassName);