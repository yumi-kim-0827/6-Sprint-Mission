// 이메일 유효성 검사
const emailValidationCheck = (value, wrapper, errorMessage) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

  if (value === '') {
    wrapper.classList.add('error');
    errorMessage.textContent = '이메일을 입력해주세요';
  } else if (!emailRegex.test(value)) {
    wrapper.classList.add('error');
    errorMessage.textContent = '잘못된 이메일 형식입니다';
  } else {
    wrapper.classList.remove('error');
    errorMessage.textContent = '';
  }
}

// 비밀번호 유효성 검사
const passwordValidationCheck = (value, wrapper, errorMessage) => {
  const MIN_LENGTH = 8;
  const { length } = value;

  if (value === '') {
    wrapper.classList.add('error');
    errorMessage.textContent = '비밀번호를 입력해주세요';
  } else if (length < MIN_LENGTH) {
    wrapper.classList.add('error');
    errorMessage.textContent = '비밀번호를 8자 이상 입력해주세요';
  } else {
    wrapper.classList.remove('error');
    errorMessage.textContent = '';
  }
}

// 비밀번호 확인 유효성 검사
const passwordCheck = (target, wrapper, errorMessage) => {
  const { value:passwordCheckValue } = target;

  const password = document.querySelector('#password');
  const { value:passwordValue } = password;

  if(passwordCheckValue !== passwordValue) {
    wrapper.classList.add('error');
    errorMessage.textContent = '비밀번호가 일치하지 않습니다';
  } else {
    wrapper.classList.remove('error');
    errorMessage.textContent = '';
  }
}

// 닉네임 유효성 검사
const nameValidationCheck = (value, wrapper, errorMessage) => {
  if(value === '') {
    wrapper.classList.add('error');
    errorMessage.textContent = '닉네임을 입력해주세요';
  } else {
    wrapper.classList.remove('error');
    errorMessage.textContent = '';
  }
}

// 비밀번호 아이콘 토글 기능
const passwordIconToggle = (event) => {
  const { target } = event;
  const parent = target.closest('.password-group');
  parent.classList.toggle('off');

  const input = parent.querySelector('input');
  const img = parent.querySelector('.input-icon img');

  if(parent.classList.contains('off')) {
    input.type = 'password';
    img.src = 'img/visibility_off.svg';
  } else {
    input.type = 'text';
    img.src = 'img/visibility_on.svg';
  }
}

// 버튼 활성화
const buttonActiveCheck = () => {
  const button = document.querySelector('form button');
  const error = document.querySelector('.error');
  const inputs = document.querySelectorAll('.input-wrapper input');

  inputs.forEach((input) => {
    const { value } = input;
    if(value !== '' && !error) {
      button.classList.remove('off')
    } else {
      button.classList.add('off')
    }
  })
}

const validationCheck = (event) => {
  const { target } = event;
  const { id } = target;
  const { value } = target;
  const wrapper = target.closest('.input-wrapper');
  const errorMessage = wrapper.querySelector('.error-message');

  switch (id) {
    case 'email':
      emailValidationCheck(value, wrapper, errorMessage);
      break;
    
    case 'name':
      nameValidationCheck(value, wrapper, errorMessage);
      break;

    case 'password':
      passwordValidationCheck(value, wrapper, errorMessage);
      break;

    case 'password-check':
      passwordCheck(target, wrapper, errorMessage);
      break;
  }

  buttonActiveCheck();
}

// 유효성 체크
const inputs = document.querySelectorAll('.input-wrapper input');

inputs.forEach((input) => {
  input.addEventListener('focusout', validationCheck);
  input.addEventListener('change', buttonActiveCheck);
})


// 비밀번호 아이콘 클릭
const icons = document.querySelectorAll('.password-group .input-icon');

icons.forEach((icon) => {
  icon.addEventListener('click', passwordIconToggle)
})