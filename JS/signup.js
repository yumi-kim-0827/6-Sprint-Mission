const inputEmailArea = document.querySelector('#input-em-area');
const inputPasswordArea = document.querySelector('#input-pw-area');
const inputNickNameArea = document.querySelector('#input-nickname-area');
const inputRePasswordArea = document.querySelector('#input-re-pw-area');
const inputEmail = document.querySelector('#input-email');
const inputPassword = document.querySelector('#input-password');
const inputNickName = document.querySelector('#input-nickname');
const inputRePassword = document.querySelector('#input-re-password');
const loginButton = document.querySelector('#login-button');
const visibilityIcon = document.querySelectorAll('.visibility');

function btAble () {
  if(inputEmail.value.indexOf('.com') &&
    inputPassword.value.length > 7 &&
    inputNickName.value.length > 0 &&
    inputRePassword.value === inputPassword.value) {
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
  btAble()
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
  btAble()
})

inputRePassword.addEventListener('input', () => {
  const span = document.createElement('span');
  span.classList.add('error');

  const spanRemove = inputRePasswordArea.querySelector('.error');
  if(spanRemove) {
    inputRePasswordArea.removeChild(spanRemove);
    inputRePassword.classList.remove('errorInput');
  }

  if(inputRePassword.value !== inputPassword.value) {
    span.textContent = '비밀번호가 일치하지 않습니다.';
    inputRePasswordArea.append(span);
    inputRePassword.classList.add('errorInput')
  }
  btAble()
})

inputNickName.addEventListener('input', () => {
  const span = document.createElement('span');
  span.classList.add('error');

  const spanRemove = inputNickNameArea.querySelector('.error');
  if(spanRemove) {
    inputNickNameArea.removeChild(spanRemove);
    inputNickName.classList.remove('errorInput');
  }

  if(inputNickName.value.length < 1) {
    span.textContent = '닉네임을 입력해주세요.';
    inputNickNameArea.append(span);
    inputNickName.classList.add('errorInput');
  }
  btAble()
})

// 심화
visibilityIcon.forEach((el,index) => {
  el.addEventListener('click', () => {
    const input = document.querySelector(`input[data-index="${index}"]`);
    if (el.src.includes('visibility_off.svg')) {
      el.src = './images/logo/visibility_on.svg';
      el.alt = "visibility-on-button"
      input.type = 'text';
    } else {
      el.src = './images/logo/visibility_off.svg';
      el.alt = "visibility-off-button"
      input.type = 'password';
    }
  })
})
