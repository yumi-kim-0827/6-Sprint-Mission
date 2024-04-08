const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const inputNickname = document.getElementById('nickname');
const inputPasswordConfirm = document.getElementById('password-verify');
const formButton = document.querySelector('.form__button');
const invisibleButton = document.querySelectorAll('.form__invisible-button');

const emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
const emailMsg = document.createElement('span');
const pwMsg = document.createElement('span');
const nicMsg = document.createElement('span');
const cfmPwMsg = document.createElement('span');
emailMsg.classList.add('form__input--error-message');
pwMsg.classList.add('form__input--error-message');
nicMsg.classList.add('form__input--error-message');
cfmPwMsg.classList.add('form__input--error-message');



function addMessage(el, msgEl, msg) {
  el.classList.add('form__input--error');
  msgEl.textContent = msg;
  el.after(msgEl);
}


function showEmailErrorMessage(e) {
  if (!e.target.value) {
    addMessage(e.target, emailMsg, '이메일을 입력해주세요');
  } 
  else if (!emailPattern.test(e.target.value)) {
    addMessage(e.target, emailMsg, '잘못된 이메일 형식입니다');
  }
}

function showNicknameErrorMessage(e) {
  if (!e.target.value) {
    addMessage(e.target, nicMsg, '닉네임을 입력해주세요');
  } 
}

function showPasswordErrorMessage(e) {
  if (!e.target.value) {
    addMessage(e.target, pwMsg, '비밀번호를 입력해주세요');
  } 
  else if (e.target.value.length < 8) {
    addMessage(e.target, pwMsg, '비밀번호를 8자 이상 입력해주세요');
  }
}

function showConfirmPwErrorMessage(e) {
  if (e.target.value !== inputPassword.value) {
    addMessage(e.target, cfmPwMsg, '비밀번호가 일치하지 않습니다');
  } 
}


function removeErrorMessage(e) {
  if (e.target.classList.contains('form__input--error') && e.target.nextElementSibling) {
    e.target.classList.remove('form__input--error');
    e.target.nextElementSibling.remove();
  }
}


function activateLogInButton(e) {
  const condition = 
  !inputEmail.classList.contains('form__input--error') &&
  !inputPassword.classList.contains('form__input--error') &&
  inputEmail.value && inputPassword.value;

  formButton.classList.toggle('form__button--activated', condition);
  condition ? formButton.disabled = false : formButton.disabled = true;
}

function activateSignUpButton(e) {
  const condition = 
  !inputEmail.classList.contains('form__input--error') &&
  !inputNickname.classList.contains('form__input--error') &&
  !inputPassword.classList.contains('form__input--error') &&
  !inputPasswordConfirm.classList.contains('form__input--error') &&
  inputEmail.value && inputNickname.value && 
  inputPassword.value && inputPasswordConfirm.value;

  formButton.classList.toggle('form__button--activated', condition);
  condition ? formButton.disabled = false : formButton.disabled = true;
}


function togglePasswordVisibility(e) {
  const input = e.target.parentElement.nextElementSibling;
  if (input.type === 'password') {
    // input.setAttribute('type', 'text');
    input.type = 'text';
    e.target.setAttribute('src', '../assets/icons/ic_visible.png');
  } else if (input.type === 'text') {
    // input.setAttribute('type', 'password');
    input.type = 'password';
    e.target.setAttribute('src', '../assets/icons/ic_invisible.png');
  }
}


export { 
  inputEmail, 
  inputPassword, 
  inputNickname, 
  inputPasswordConfirm, 
  invisibleButton,
  showEmailErrorMessage,
  showNicknameErrorMessage,
  showPasswordErrorMessage,
  showConfirmPwErrorMessage,
  removeErrorMessage,
  activateLogInButton,
  activateSignUpButton,
  togglePasswordVisibility
};