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




const button = document.querySelector('.form__button');

function activateButton(e) {
  console.log('a');
  console.log(passwordEL.classList.contains('form__input--error'));
  if (
    !emailEl.classList.contains('form__input--error') &&
    !passwordEL.classList.contains('form__input--error') &&
    !nicknameEL.classList.contains('form__input--error') &&
    !passVarifyEL.classList.contains('form__input--error') &&
    emailEl.value && passwordEL.value && nicknameEL.value && passVarifyEL.value
  ) {
    console.log('true');
    button.disabled = false;
    button.classList.add('form__button--activated');
  } else {
    console.log('false');
    button.disabled = true;
    button.classList.remove('form__button--activated');
  }
}





emailEl.addEventListener('focusout', activateButton);
passwordEL.addEventListener('focusout', activateButton);
nicknameEL.addEventListener('focusout', activateButton);
passVarifyEL.addEventListener('focusout', activateButton);



const invisibleButton = document.querySelectorAll('.form__invisible-button');

function buttonVisibleOrNot(e) {
  const input = e.target.parentElement.nextElementSibling;
  if (input.type === 'password') {
    input.setAttribute('type', 'text'); //input.type = 'text' const라 안됨
    e.target.setAttribute('src', '../assets/icons/ic_visible.png');
  } else if (input.type === 'text') {
    input.setAttribute('type', 'password');
    e.target.setAttribute('src', '../assets/icons/ic_invisible.png');
  }
}

invisibleButton[0].addEventListener('click', buttonVisibleOrNot);
invisibleButton[1].addEventListener('click', buttonVisibleOrNot);