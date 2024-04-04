const emailEl = document.getElementById('email');
const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
const message = document.createElement('span');
message.classList.add('form__input--error-message');


function emailErrorMessage(e) {
  if (!e.target.value) {
    e.target.classList.add('form__input--error');
    message.textContent = '이메일을 입력해주세요.';
    e.target.after(message);
  } 
  else if (!pattern.test(e.target.value)) {
    e.target.classList.add('form__input--error');
    message.textContent = '잘못된 이메일 형식입니다';
    e.target.after(message);
  }
}

function emailFocusIn(e) {
  if (e.target.classList.contains('form__input--error') && e.target.nextElementSibling) {
    e.target.classList.remove('form__input--error');
    e.target.nextElementSibling.remove();
  }
}


emailEl.addEventListener('focusout', emailErrorMessage);
emailEl.addEventListener('focusin', emailFocusIn);


const passwordEL = document.getElementById('password');
const psmessage = document.createElement('span');
psmessage.classList.add('form__input--error-message');

function passwordErrorMessage(e) {
  if (!e.target.value) {
    e.target.classList.add('form__input--error');
    psmessage.textContent = '비밀번호를 입력해주세요';
    e.target.after(psmessage);
  } 
  else if (e.target.value.length < 8) {
    e.target.classList.add('form__input--error');
    psmessage.textContent = '비밀번호를 8자 이상 입력해주세요';
    e.target.after(psmessage);
  }
}

function passwordFocusIn(e) {
  if (e.target.classList.contains('form__input--error') && e.target.nextElementSibling) {
    e.target.classList.remove('form__input--error');
    e.target.nextElementSibling.remove();
  }
}


passwordEL.addEventListener('focusout', passwordErrorMessage);
passwordEL.addEventListener('focusin', passwordFocusIn);



const nicknameEL = document.getElementById('nickname');
const nickmessage = document.createElement('span');
nickmessage.classList.add('form__input--error-message');

function nicknameErrorMessage(e) {
  if (!e.target.value) {
    e.target.classList.add('form__input--error');
    nickmessage.textContent = '닉네임을 입력해주세요';
    e.target.after(nickmessage);
  } 
}

function nicknameFocusIn(e) {
  if (e.target.classList.contains('form__input--error') && e.target.nextElementSibling) {
    e.target.classList.remove('form__input--error');
    e.target.nextElementSibling.remove();
  }
}


nicknameEL.addEventListener('focusout', nicknameErrorMessage);
nicknameEL.addEventListener('focusin', nicknameFocusIn);


const passVarifyEL = document.getElementById('password-verify');
const varifymessage = document.createElement('span');
varifymessage.classList.add('form__input--error-message');

function varifyErrorMessage(e) {
  if (e.target.value !== passwordEL.value) {
    e.target.classList.add('form__input--error');
    varifymessage.textContent = '비밀번호가 일치하지 않습니다';
    e.target.after(varifymessage);
  } 
}

function varifyFocusIn(e) {
  if (e.target.classList.contains('form__input--error') && e.target.nextElementSibling) {
    e.target.classList.remove('form__input--error');
    e.target.nextElementSibling.remove();
  }
}


passVarifyEL.addEventListener('focusout', varifyErrorMessage);
passVarifyEL.addEventListener('focusin', varifyFocusIn);



