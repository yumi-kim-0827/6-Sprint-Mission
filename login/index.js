const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#email-error');

const passwordInput = document.querySelector('#password');
const passwordError = document.querySelector('#password-error');

const handleInputValid = (inputEl, errorEl, errMsg) => {
  if (inputEl.value === '') {
    inputEl.classList.add('error-input');
    errorEl.style.display = 'block';
    errorEl.textContent = errMsg;
  } else {
    inputEl.classList.remove('error-input');
    errorEl.style.display = 'none';
    errorEl.textContent = '';
  }
};

emailInput.addEventListener('focusout', () => {
  handleInputValid(emailInput, emailError, '이메일을 입력해주세요.');
});

passwordInput.addEventListener('focusout', () => {
  handleInputValid(passwordInput, passwordError, '비밀번호를 입력해주세요.');
});
