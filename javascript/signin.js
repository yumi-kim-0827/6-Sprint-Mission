document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('email');

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
