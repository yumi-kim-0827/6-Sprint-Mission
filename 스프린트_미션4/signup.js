document.addEventListener('DOMContentLoaded', function() {
  const email = document.querySelector('#email');
  const email_error = document.querySelector('#email_error');
  const nickname = document.querySelector('#nickname');
  const nickname_error = document.querySelector('#nickname_error');
  const password = document.querySelector('#password');
  const password_error = document.querySelector('#password_error');
  const password_check = document.querySelector('#passwordConfirmation');
  const password_check_error = document.querySelector('#password_check_error');
  const signUpForm = document.querySelector('form');
  const signUpButton = document.querySelector('#signup-button');


     // 버튼 활성화 비활성화 설정
     function signUpButtonAbled() {
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
        signUpButton.disabled = false;
      } else {
        signUpButton.disabled = true;
      }
    }
  
    signUpForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // 회원가입 페이지 함수
      changeToSignUp();
    });
  
    function changeToSignUp() {
      window.location.href = '/signup';
    }
  
    signUpButton.addEventListener('click', function(event) {
      if (!signUpButton.disabled) {
        changeToSignUp();
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

    signUpButtonAbled();
  };

  nickname.onblur = function() {
    if (nickname.value.trim() === '') {
      nickname.classList.add('error-color');
      nickname_error.innerHTML = '닉네임을 입력해주세요.';
    } else {
      nickname.classList.remove('error-color');
      nickname_error.innerHTML = '';
    }

    signUpButtonAbled();
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
    signUpButtonAbled();
  };

  password_check.onblur = function() {
    if (password_check.value !== password.value) {
      password_check.classList.add('error-color');
      password_check_error.innerHTML = '비밀번호가 일치하지 않습니다.';
    } else {
      password_check.classList.remove('error-color');
      password_check_error.innerHTML = '';
    }
    signUpButtonAbled();
  };
});



