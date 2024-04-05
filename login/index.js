const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#email-error');

const passwordInput = document.querySelector('#password');
const passwordError = document.querySelector('#password-error');

const inputButton = document.querySelector('.form-button');

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const handleButtonState = () => {
  if (
    emailInput.classList.contains('error-input') ||
    passwordInput.classList.contains('error-input') ||
    emailInput.value === '' ||
    passwordInput.value.length < 8
  ) {
    inputButton.disabled = true;
    inputButton.classList.remove('active');
  } else {
    inputButton.disabled = false;
    inputButton.classList.add('active');
  }
};

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
    handleButtonState();
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
    handleButtonState();
  }
};

emailInput.addEventListener('focusout', () => {
  handleEmailValid(emailInput, emailError);
});

passwordInput.addEventListener('focusout', () => {
  handlePasswordValid(passwordInput, passwordError);
});

emailInput.addEventListener('input', () => {
  handleButtonState();
});

passwordInput.addEventListener('input', () => {
  handleButtonState();
});
