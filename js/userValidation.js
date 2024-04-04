const inputs = document.querySelectorAll('.input-wrapper input');
const icons = document.querySelectorAll('.password-group .input-icon');

/**
 * 유효성 체크 결과 다루는 함수
 * sucessValidation : 유효성 검사 통과시 실행 함수
 * failedValidation : 유효성 검사 실패시 실행 함수
 */

const sucessValidation = (inputWrapper, errorEl) => {
  inputWrapper.classList.remove('error');
  errorEl.textContent = '';
}

const failedValidation = (inputWrapper, errorEl, text) => {
  inputWrapper.classList.add('error');
  errorEl.textContent = text;
}

// 이메일 유효성 검사
const emailValidationCheck = (value, wrapper, errorMessageEl) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  let message = '';

  if (value === '') {
    message = '이메일을 입력해주세요';
    failedValidation(wrapper, errorMessageEl, message);
  } else if (!emailRegex.test(value)) {
    message = '잘못된 이메일 형식입니다';
    failedValidation(wrapper, errorMessageEl, message);
  } else {
    sucessValidation(wrapper, errorMessageEl);
  }
}

// 비밀번호 유효성 검사
const passwordValidationCheck = (value, wrapper, errorMessageEl) => {
  const MIN_LENGTH = 8;
  const { length } = value;
  let message = '';

  if (value === '') {
    message = '비밀번호를 입력해주세요';
    failedValidation(wrapper, errorMessageEl, message);
  } else if (length < MIN_LENGTH) {
    message = '비밀번호를 8자 이상 입력해주세요'
    failedValidation(wrapper, errorMessageEl, message);
  } else {
    sucessValidation(wrapper, errorMessageEl);
  }
}

// 비밀번호 확인 유효성 검사
const passwordCheck = (target, wrapper, errorMessageEl) => {
  const { value:passwordCheckValue } = target;

  const password = document.querySelector('#password');
  const { value:passwordValue } = password;

  let message = '비밀번호가 일치하지 않습니다';

  if(passwordCheckValue !== passwordValue) {
    failedValidation(wrapper, errorMessageEl, message);
  } else {
    sucessValidation(wrapper, errorMessageEl);
  }
}

// 닉네임 유효성 검사
const nameValidationCheck = (value, wrapper, errorMessageEl) => {
  let message = '닉네임을 입력해주세요';
  if(value === '') {
    failedValidation(wrapper, errorMessageEl, message);
  } else {
    sucessValidation(wrapper, errorMessageEl);
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

  inputs.forEach((input) => {
    const { value } = input;
    if(value !== '' && !error) {
      button.classList.remove('off')
    } else {
      button.classList.add('off')
    }
  })
}

// input 구분 후 유효성 체크
const validationCheck = (event) => {
  const { target } = event;
  const { id, value } = target;
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
inputs.forEach((input) => {
  input.addEventListener('focusout', validationCheck);
  input.addEventListener('input', buttonActiveCheck);
})

// 비밀번호 아이콘 클릭 이벤트
icons.forEach((icon) => {
  icon.addEventListener('click', passwordIconToggle)
})