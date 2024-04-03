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
