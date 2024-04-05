document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const loginButton = document.querySelector('button[type="submit"]');

  // 입력창이 변경될 때마다 유효성을 검사하여 로그인 버튼을 활성화 또는 비활성화되도록 설정
  emailInput.addEventListener('focusout', validateInputs);
  passwordInput.addEventListener('focusout', validateInputs);

  // 로그인 버튼 클릭 시 '/items'로 이동
  loginButton.addEventListener('click', function (event) {
    event.preventDefault(); // 기본 동작인 폼 제출을 방지
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const validEmail = isValidEmail(email);
    const validPassword = password.length >= 8;

    if (validEmail && validPassword) {
      window.location.href = '/items.html'; // 유효한 경우 '/items'로 이동
    }
  });

  // 입력값이 유효한 경우에만 로그인 버튼을 활성화
  function validateInputs() {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const validEmail = isValidEmail(email);
    const validPassword = password.length >= 8;

    if (validEmail && validPassword) {
      loginButton.disabled = false; // 유효한 경우 버튼을 활성화
    } else {
      loginButton.disabled = true; // 유효하지 않은 경우 버튼을 비활성화
    }
  }

  // 이메일 유효성을 검사
  function isValidEmail(email) {
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
  const nicknameInput = document.getElementById('nickname');

  nicknameInput.addEventListener('focusout', function () {
    const nickname = nicknameInput.value.trim();
    const errorContainer = document.getElementById('nickname-error');

    // 값이 없는 경우 에러 메시지 출력
    if (nickname === '') {
      nicknameInput.classList.add('error');
      nicknameInput.style.border = '1px solid red';
      if (!errorContainer) {
        const errorMessage = document.createElement('div');
        errorMessage.id = 'nickname-error';
        errorMessage.classList.add('error-message');
        errorMessage.textContent = '닉네임을 입력해주세요.';
        errorMessage.style.color = 'red';

        nicknameInput.parentNode.insertBefore(
          errorMessage,
          nicknameInput.nextSibling
        );
      }
    } else {
      // 값이 있는 경우 에러 메시지 제거
      nicknameInput.classList.remove('error');
      const errorContainer = document.getElementById('nickname-error');
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
