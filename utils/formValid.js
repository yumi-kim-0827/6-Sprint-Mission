import ERROR_MSG from '/constants/errorMessage.js';
import emailPattern from './emailValidPattern.js';

/**
 * 로그인 버튼 비활성화 / 활성화
 */
export const handleButtonState = (buttonEl, emailEl, passwordEl) => {
  if (
    emailEl.classList.contains('error-input') ||
    passwordEl.classList.contains('error-input') ||
    emailEl.value === '' ||
    passwordEl.value.length < 8
  ) {
    buttonEl.disabled = true;
    buttonEl.classList.remove('active');
  } else {
    buttonEl.disabled = false;
    buttonEl.classList.add('active');
  }
};

/**
 * 이메일 유효성 검사
 */
export const handleEmailValid = (emailEl, errorEl) => {
  if (emailEl.value === '') {
    emailEl.classList.add('error-input');
    errorEl.style.display = 'block';
    errorEl.textContent = ERROR_MSG.emailEmpty;
  } else if (!emailPattern.test(emailEl.value)) {
    emailEl.classList.add('error-input');
    errorEl.style.display = 'block';
    errorEl.textContent = ERROR_MSG.emailFormat;
  } else {
    emailEl.classList.remove('error-input');
    errorEl.style.display = 'none';
    errorEl.textContent = '';
  }
};

/**
 * 비밀번호 유효성 검사
 */
export const handlePasswordValid = (passwordEl, errorEl) => {
  if (passwordEl.value === '') {
    passwordEl.classList.add('error-input');
    errorEl.style.display = 'block';
    errorEl.textContent = ERROR_MSG.passwordEmpty;
  } else if (passwordEl.value.length < 8) {
    passwordEl.classList.add('error-input');
    errorEl.style.display = 'block';
    errorEl.textContent = ERROR_MSG.passwordLength;
  } else {
    passwordEl.classList.remove('error-input');
    errorEl.style.display = 'none';
    errorEl.textContent = '';
  }
};

/**
 * 닉네임 유효성 검사
 */
export const handleNicknameValid = (nicknameEl, errorEl) => {
  if (nicknameEl.value === '') {
    nicknameEl.classList.add('error-input');
    errorEl.style.display = 'block';
    errorEl.textContent = ERROR_MSG.nicknameEmpty;
  } else {
    nicknameEl.classList.remove('error-input');
    errorEl.style.display = 'none';
    errorEl.textContent = '';
  }
};

/**
 * 비밀번호 확인 유효성 검사
 */
export const handlePwdCheckValid = (passwordEl, pwdCheckEl, errorEl) => {
  if (passwordEl.value !== pwdCheckEl.value) {
    pwdCheckEl.classList.add('error-input');
    errorEl.style.display = 'block';
    errorEl.textContent = ERROR_MSG.pwdMismatch;
  } else {
    pwdCheckEl.classList.remove('error-input');
    errorEl.style.display = 'none';
    errorEl.textContent = '';
  }
};
