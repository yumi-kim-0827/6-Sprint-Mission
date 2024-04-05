document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const loginButton = document.querySelector('button[type="submit"]');

  emailInput.addEventListener('focusout', validateInputs);
  passwordInput.addEventListener('focusout', validateInputs);

  // 입력값이 유효한 경우에만 로그인 버튼을 활성화
  function validateInputs() {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const validEmail = isValidEmail(email);
    const validPassword = password.length >= 8;

    if (validEmail && validPassword) {
      loginButton.disabled = false;
    } else {
      loginButton.disabled = true;
    }
  }

  function isValidEmail(email) {
    // 이메일 형식을 정규표현식으로 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  emailInput.addEventListener('focusout', function () {
    const email = emailInput.value.trim();
    const errorContainer = document.getElementById('email-error');

    // focus out일 때 에러 메세지 출력
    if (email === '') {
      emailInput.classList.add('error');
      emailInput.style.border = '1px solid red';
      if (!errorContainer) {
        const errorMessage = document.createElement('div');
        errorMessage.id = 'email-error';
        errorMessage.classList.add('error-message');
        errorMessage.textContent = '이메일을 입력해주세요.';
        errorMessage.style.color = 'red';

        emailInput.parentNode.insertBefore(
          errorMessage,
          emailInput.nextSibling
        );
      }
    } else {
      emailInput.classList.remove('error');
      const errorContainer = document.getElementById('email-error');
      if (errorContainer) {
        errorContainer.remove();
      }
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('email');

  emailInput.addEventListener('focusout', function () {
    const email = emailInput.value.trim();
    const errorContainer = document.getElementById('email-error');

    // 이메일 형식 확인을 위한 정규표현식
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      showError();
    } else {
      removeError();
      emailInput.style.border = '1px solid #3692ff'; // 이메일 형식이 올바른 경우 테두리 색상 변경
    }
  });

  // 에러 메시지를 표시하는 함수
  function showError() {
    emailInput.classList.add('error');
    emailInput.style.border = '1px solid red';

    const errorContainer = document.getElementById('email-error');
    if (!errorContainer) {
      const errorMessage = document.createElement('div');
      errorMessage.id = 'email-error';
      errorMessage.classList.add('error-message');
      errorMessage.textContent = '잘못된 이메일 형식입니다.';
      errorMessage.style.color = 'red';
      emailInput.parentNode.insertBefore(errorMessage, emailInput.nextSibling);
    }
  }

  // 에러 메시지를 삭제하는 함수
  function removeError() {
    emailInput.classList.remove('error');
    emailInput.style.border = '1px solid #3692ff'; // 이메일 형식이 올바른 경우 테두리 색상 변경

    const errorContainer = document.getElementById('email-error');
    if (errorContainer) {
      errorContainer.remove();
    }
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const passwordInput = document.getElementById('password');

  passwordInput.addEventListener('focusout', function () {
    const password = passwordInput.value.trim();

    if (password === '') {
      showError('비밀번호를 입력해주세요.'); // 값이 없는 경우 에러 메시지 표시
    } else if (password.length < 8) {
      showError('비밀번호를 8자 이상 입력해주세요.'); // 값이 8자 미만인 경우 에러 메시지 표시
    } else {
      removeError(); // 값이 있는 경우 에러 메시지 삭제
    }
  });

  // 에러 메시지를 표시하는 함수
  function showError(message) {
    const errorContainer = document.getElementById('password-error');
    if (!errorContainer) {
      const errorMessage = document.createElement('div');
      errorMessage.id = 'password-error';
      errorMessage.classList.add('error-message');
      errorMessage.textContent = message;
      errorMessage.style.color = 'red';
      errorMessage.style.marginTop = '8px'; // 에러 메시지의 위쪽 여백 추가
      passwordInput.parentNode.appendChild(errorMessage);
    }
  }

  // 에러 메시지를 삭제하는 함수
  function removeError() {
    const errorContainer = document.getElementById('password-error');
    if (errorContainer) {
      errorContainer.remove();
    }
  }
});
