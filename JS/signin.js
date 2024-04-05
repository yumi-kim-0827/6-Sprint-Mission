const inputEmailArea = document.querySelector('#input-em-area');
const inputPasswordArea = document.querySelector('#input-pw-area');
const inputEmail = document.querySelector('#input-email');
const inputPassword = document.querySelector('#input-password');
const loginButton = document.querySelector('#login-button');
const visibilityIcon = document.querySelector('#visibility-icon');


function btnAble () {
  if(inputEmail.value.indexOf('.com') && inputPassword.value.length > 7) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
}

inputEmail.addEventListener('input', () => {
  const span = document.createElement('span');
  span.classList.add('error');

// document로 .error을 선택하면 node가 어느 자식요소를 처리해야하할지
// 모르기때문에 정확하게 inputPasswordArea.querySelector를 처리해
// 에러발생을 막는다
  const spanRemove = inputEmailArea.querySelector('.error');
  if(spanRemove) {
    inputEmailArea.removeChild(spanRemove);
    inputEmail.classList.remove('errorInput');
  }


  if(inputEmail.value.indexOf('com') == -1 && inputEmail.value.length >= 1) {
    span.textContent ='잘못된 이메일 형식입니다.'
    inputEmailArea.append(span);
    inputEmail.classList.add('errorInput');
  }else if(inputEmail.value.length < 1){
    span.textContent ='이메일을 입력해주세요';
    inputEmailArea.append(span);
    inputEmail.classList.add('errorInput');
  }
  btnAble();
})

inputPassword.addEventListener('input', () => {
  const span = document.createElement('span');
  span.classList.add('error');

  const spanRemove = inputPasswordArea.querySelector('.error');
  if(spanRemove) {
    inputPasswordArea.removeChild(spanRemove);
    inputPassword.classList.remove('errorInput');
  }

  if(inputPassword.value.length < 8 && inputPassword.value.length >= 1 ) {
    span.textContent = '비밀번호를 8자 이상 입력해주세요.';
    inputPasswordArea.append(span);
    inputPassword.classList.add('errorInput')
  } else if(inputPassword.value.length < 1) {
    span.textContent = '비밀번호를 입력해주세요.';
    inputPasswordArea.append(span);
    inputPassword.classList.add('errorInput');
  }
  btnAble();
})


visibilityIcon.addEventListener('click', () => {
  if (visibilityIcon.src.includes('visibility_off.svg')) {
    visibilityIcon.src = './images/logo/visibility_on.svg';
    visibilityIcon.alt = "visibility-on-button"
    inputPassword.type = 'text';
  } else {
    visibilityIcon.src = './images/logo/visibility_off.svg';
    visibilityIcon.alt = "visibility-off-button"
    inputPassword.type = 'password';
  }
})

