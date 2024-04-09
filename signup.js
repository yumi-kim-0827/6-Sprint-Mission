const emailInput = document.querySelector('#email');
const nicknameInput = document.querySelector('#nickname');
const passwordInput = document.querySelector('#password');
const passwordCheckInput = document.querySelector('#password-check');
const signupButton = document.querySelector('.signin-signup-form button');

function validateEmail(email) {
  return email.includes('@') && email.includes('.');
}

function validatePassword(password) {
  return password.length >= 8;
}

emailInput.addEventListener('focusout', function() {
  const email = emailInput.value.trim();
  const errorMessage = emailInput.nextElementSibling;

  emailInput.classList.remove('initial-input');

  if (email === '') {
      emailInput.classList.add('error');
      emailInput.classList.remove('success');
      errorMessage.textContent = '이메일을 입력해주세요.';
      errorMessage.style.display = 'block';
  } else if (!validateEmail(email)) {
      emailInput.classList.add('error');
      emailInput.classList.remove('success');
      errorMessage.textContent = '잘못된 이메일 형식입니다.';
      errorMessage.style.display = 'block';
  } else { //유효한 경우
      emailInput.classList.remove('error');
      emailInput.classList.add('success');
      errorMessage.style.display = 'none';
  }
  validateForm();
});

nicknameInput.addEventListener('focusout', function() {
  const nickname = nicknameInput.value.trim();
  const errorMessage = nicknameInput.nextElementSibling;
  nicknameInput.classList.remove('initial-input');

  if (nickname === '') {
    nicknameInput.classList.add('error');
    nicknameInput.classList.remove('success');
    errorMessage.textContent = '닉네임을 입력해주세요.';
    errorMessage.style.display = 'block';
  } else {
    nicknameInput.classList.remove('error');
    nicknameInput.classList.add('success');
    errorMessage.style.display = 'none';
  }
  validateForm();
});


passwordInput.addEventListener('focusout', function() {
  const password = passwordInput.value.trim();
  errorMessage = passwordInput.nextElementSibling;

  passwordInput.classList.remove('initial-input');

  if (password === '') {
      passwordInput.classList.add('error');
      passwordInput.classList.remove('success');
      errorMessage.textContent = '비밀번호를 입력해주세요.';
      errorMessage.style.display = 'block';
  } else if (!validatePassword(password)) {
      passwordInput.classList.add('error');
      passwordInput.classList.remove('success');
      errorMessage.textContent = '비밀번호를 8자 이상 입력해주세요.';
      errorMessage.style.display = 'block';
  } else {  //유효한 경우
      passwordInput.classList.remove('error');
      passwordInput.classList.add('success');
      errorMessage.style.display = 'none';
  }
  validateForm();
});

passwordCheckInput.addEventListener('focusout', function() {
  const passwordCheck = passwordCheckInput.value.trim();
  const password = passwordInput.value.trim();
  const errorMessage = passwordCheckInput.nextElementSibling;

  passwordCheckInput.classList.remove('initial-input');

  if ((passwordCheck === '') || (password !== passwordCheck)) {
    passwordCheckInput.classList.add('error');
    passwordCheckInput.classList.remove('success');
    errorMessage.textContent = '비밀번호가 일치하지 않습니다.';
    errorMessage.style.display = 'block';
  } else {
    passwordCheckInput.classList.remove('error');
    passwordCheckInput.classList.add('success');
    errorMessage.style.display = 'none';
  }

  validateForm();
});


signupButton.addEventListener('click', function(event) {
  if (!emailInput.classList.contains('error') && !passwordInput.classList.contains('error')) {
    event.preventDefault();
    window.location.href = './signin.html';
  }
});


function validateForm() {
  if (emailInput.classList.contains('error') || nicknameInput.classList.contains('error') || passwordInput.classList.contains('error') || passwordCheckInput.classList.contains('error') || emailInput.classList.contains('initial-input') || nicknameInput.classList.contains('initial-input') || passwordInput.classList.contains('initial-input') || passwordCheckInput.classList.contains('initial-input')) { //비정상
    signupButton.disabled = true;
    signupButton.classList.remove('able-button');
  } else { //정상
    signupButton.disabled = false;
    signupButton.classList.add('able-button');
  }
}
