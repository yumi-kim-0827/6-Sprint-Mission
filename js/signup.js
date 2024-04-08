const emailInputElement = document.getElementById('email');
const emailMessageElement = document.getElementById('email-input-message');
const pwdInputElement = document.getElementById('password');
const checkPwdBtnElement = document.getElementById('check-password-btn');
const pwdMessageElement = document.getElementById('pwd-input-message');
const pwdBtnElement = document.getElementById('password-btn');
const submitBtnElement = document.getElementById('submit-btn');
const nickInputElement = document.getElementById('nickname');
const nickMessageElement = document.getElementById('nick-input-message');
const checkPwdInputElement = document.getElementById('check-password');
const checkPwdMessageElement = document.getElementById(
  'check-pwd-input-message',
);

const EMAIL_REGEXP =
  /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/i;

/**
 * 이메일 유효성 검사 실패 함수
 */
function checkEmailInput(event) {
  const NULL_MESSAGE = '이메일을 입력해주세요.';
  const WRONG_MESSAGE = '잘못된 이메일 형식입니다.';
  const email = emailInputElement.value;

  if (!email) {
    event.target.style.border = '1px solid red';
    emailMessageElement.innerText = NULL_MESSAGE;
    emailMessageElement.classList.add('message-on');
  } else if (!EMAIL_REGEXP.test(email)) {
    event.target.style.border = '1px solid red';
    emailMessageElement.innerText = WRONG_MESSAGE;
    emailMessageElement.classList.add('message-on');
  }
}

/**
 * 이메일에 focusin 된 경우 원상태로 돌리는 함수
 */
function resetEmailEvent(event) {
  event.target.style.border = 'initial';
  emailMessageElement.classList.remove('message-on');
}

/**
 * 비밀번호 유효성 검사 실패 함수
 */
function checkPwdInput(event) {
  const NULL_MESSAGE = '비밀번호를 입력해주세요.';
  const WRONG_MESSAGE = '비밀번호를 8자 이상 입력해주세요.';
  const pwd = pwdInputElement.value;

  if (!pwd) {
    event.target.style.border = '1px solid red';
    pwdMessageElement.innerText = NULL_MESSAGE;
    pwdMessageElement.classList.add('message-on');
  } else if (pwd.length < 8) {
    event.target.style.border = '1px solid red';
    pwdMessageElement.innerText = WRONG_MESSAGE;
    pwdMessageElement.classList.add('message-on');
  }
}

/**
 * 비밀번호에 focusin 된 경우 원상태로 돌리는 함수
 */
function resetPwdEvent(event) {
  event.target.style.border = 'initial';
  pwdMessageElement.classList.remove('message-on');
}

/**
 * 닉네임 유효성 검사 실패 함수
 */
function checkNickInput(event) {
  const NULL_MESSAGE = '닉네임을 입력해주세요.';

  if (!nickInputElement.value) {
    event.target.style.border = '1px solid red';
    nickMessageElement.innerText = NULL_MESSAGE;
    nickMessageElement.classList.add('message-on');
  }
}

/**
 * 닉네임에 focusin 된 경우 원상태로 돌리는 함수
 */
function resetNickEvent(event) {
  event.target.style.border = 'initial';
  nickMessageElement.classList.remove('message-on');
}

/**
 * 비밀번호 확인 유효성 검사 실패 함수
 */
function checkPwdInput2(event) {
  const WRONG_MESSAGE = '비밀번호가 일치하지 않습니다.';
  const pwd = pwdInputElement.value;
  const checkPwd = checkPwdInputElement.value;

  if (pwd !== checkPwd) {
    event.target.style.border = '1px solid red';
    checkPwdMessageElement.innerText = WRONG_MESSAGE;
    checkPwdMessageElement.classList.add('message-on');
  }
}

/**
 * 비밀번호 확인에 focusin 된 경우 원상태로 돌리는 함수
 */
function resetCheckPwdEvent(event) {
  event.target.style.border = 'initial';
  checkPwdMessageElement.classList.remove('message-on');
}

/**
 * 비밀번호 보여주기 이벤트
 */
function toggleBtnClassName(event) {
  event.target.classList.toggle('visibility');
}

// TODO: 유효성 검사 추가
/**
 * 유효성 검사 후 로그인 버튼 활성화/비활성화 함수
 *
 * @param {Object} event
 */
function checkValid(event) {
  submitBtnElement.classList.remove('submit-on');
  if (
    !(
      emailInputElement.value &&
      pwdInputElement.value &&
      nickInputElement.value &&
      checkPwdInputElement.value
    )
  ) {
    submitBtnElement.disabled = true;
  } else if (!EMAIL_REGEXP.test(email) && pwdInputElement.value.length < 8) {
    submitBtnElement.disabled = true;
  } else if (pwdInputElement.value !== checkPwdInputElement.value) {
    submitBtnElement.disabled = true;
  } else {
    submitBtnElement.disabled = false;
    submitBtnElement.classList.add('submit-on');
  }
}

emailInputElement.addEventListener('keyup', checkValid);
pwdInputElement.addEventListener('keyup', checkValid);
nickInputElement.addEventListener('keyup', checkValid);
checkPwdInputElement.addEventListener('keyup', checkValid);
emailInputElement.addEventListener('focusout', checkEmailInput);
emailInputElement.addEventListener('focusin', resetEmailEvent);
pwdInputElement.addEventListener('focusout', checkPwdInput);
pwdInputElement.addEventListener('focusin', resetPwdEvent);
nickInputElement.addEventListener('focusout', checkNickInput);
nickInputElement.addEventListener('focusin', resetNickEvent);
checkPwdInputElement.addEventListener('focusout', checkPwdInput2);
checkPwdInputElement.addEventListener('focusin', resetCheckPwdEvent);
// TODO: 비밀번호 보이기 기능
pwdBtnElement.addEventListener('click', toggleBtnClassName);
checkPwdBtnElement.addEventListener('click', toggleBtnClassName);
