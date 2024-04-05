const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#email-error');

const passwordInput = document.querySelector('#password');
const passwordError = document.querySelector('#password-error');

emailInput.addEventListener('focusout', () => {
  if (emailInput.value === '') {
    emailInput.classList.add('error-input');
    emailError.style.display = 'block';
    emailError.textContent = '이메일을 입력해주세요.';
  } else {
    emailInput.classList.remove('error-input');
    emailError.style.display = 'none';
    emailError.textContent = '';
  }
});

passwordInput.addEventListener('focusout', () => {
  if (passwordInput.value === '') {
    passwordInput.classList.add('error-input');
    passwordError.style.display = 'block';
    passwordError.textContent = '비밀번호를 입력해주세요.';
  } else {
    passwordInput.classList.remove('error-input');
    passwordError.style.display = 'none';
    passwordError.textContent = '';
  }
});
