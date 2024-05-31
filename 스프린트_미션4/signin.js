document.addEventListener('DOMContentLoaded', function() {
  const email = document.querySelector('#email');
  const email_error = document.querySelector('#email_error');
  const password = document.querySelector('#password');
  const password_error = document.querySelector('#password_error');
  const loginForm = document.querySelector('form');
  const login_button = document.querySelector('#login-button');

   // 버튼 활성화 비활성화 설정
   function loginButtonAbled() {
    // 모든 필드가 에러가 없고 값이 채워져 있으면 버튼 활성화
    if (
      email.value.trim() !== '' &&
      nickname.value.trim() !== '' &&
      password.value.trim() !== '' &&
      password_check.value.trim() !== '' &&
      !email.classList.contains('error-color') &&
      !nickname.classList.contains('error-color') &&
      !password.classList.contains('error-color') &&
      !password_check.classList.contains('error-color')
    ) {
      login_button.disabled = false;
    } else {
      login_button.disabled = true;
    }
  }

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // 로그인 페이지 함수
    changeToItems();
  });

  function changeToItems() {
    window.location.href = '/items';
  }

  login_button.addEventListener('click', function(event) {
    if (!login_button.disabled) {
      changeToItems();
    } else {
      event.preventDefault();
    }
  })
  email.onblur = function() {
    if (email.value.trim() === '') {
      email.classList.add('error-color');
      email_error.innerHTML = '이메일을 작성해 주세요.';
    }
    else if (!email.value.includes('@')) {
      email.classList.add('error-color');
      email_error.innerHTML = '잘못된 이메일 형식입니다.';
    } else {
      email.classList.remove('error-color');
      email_error.innerHTML = '';
    }

    loginButtonAbled();
  };

  password.onblur = function() {
    if (password.value.trim() === '') {
      password.classList.add('error-color');
      password_error.innerHTML = '비밀번호를 입력해주세요.';
    }
    else if (password.value.length < 8) {
      password.classList.add('error-color');
      password_error.innerHTML = '비밀번호를 8자 이상 입력해주세요.';
    } else {
      password.classList.remove('error-color');
      password_error.innerHTML = '';
    }
    loginButtonAbled();
  };
});



