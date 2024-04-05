const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#email-error');

const passwordInput = document.querySelector('#password');
const passwordError = document.querySelector('#password-error');

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const handlePasswordValid = (inputEl, errorEl) => {
  if (inputEl.value === '') {
    inputEl.classList.add('error-input');
    errorEl.style.display = 'block';
    errorEl.textContent = '비밀번호를 입력해주세요.';
  } else if (inputEl.value.length < 8) {
    inputEl.classList.add('error-input');
    errorEl.style.display = 'block';
    errorEl.textContent = '비밀번호를 8자 이상 입력해주세요.';
  } else {
    inputEl.classList.remove('error-input');
    errorEl.style.display = 'none';
    errorEl.textContent = '';
  }
};

const handleEmailValid = (inputEl, errorEl) => {
  if (inputEl.value === '') {
    inputEl.classList.add('error-input');
    errorEl.style.display = 'block';
    errorEl.textContent = '이메일을 입력해주세요.';
  } else if (!emailPattern.test(inputEl.value)) {
    inputEl.classList.add('error-input');
    errorEl.style.display = 'block';
    errorEl.textContent = '잘못된 이메일 형식입니다.';
  } else {
    inputEl.classList.remove('error-input');
    errorEl.style.display = 'none';
    errorEl.textContent = '';
  }
};

emailInput.addEventListener('focusout', () => {
  handleEmailValid(emailInput, emailError);
});

passwordInput.addEventListener('focusout', () => {
  handlePasswordValid(passwordInput, passwordError);
});
