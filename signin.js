const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const signinButton = document.querySelector('.signin-signup-form button');

function validateEmail(email) {
  return email.includes('@') && email.includes('.');
}

function validatePassword(password) {
  return password.length >= 8;
}

emailInput.addEventListener('focusout', function() {
  const email = emailInput.value.trim();
  const errorMessage =  emailInput.nextElementSibling;

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


passwordInput.addEventListener('focusout', function() {
  const password = passwordInput.value.trim();
  const errorMessage =  passwordInput.nextElementSibling;

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


signinButton.addEventListener('click', function(event) {
  if (!emailInput.classList.contains('error') && !passwordInput.classList.contains('error')) {
    event.preventDefault();
    window.location.href = './items.html';
  }
});

function validateForm() {
  if (emailInput.classList.contains('error') || passwordInput.classList.contains('error') || emailInput.classList.contains('initial-input') || passwordInput.classList.contains('initial-input')) { //비정상
    signinButton.disabled = true;
    signinButton.classList.remove('able-button');
  } else { //정상
    signinButton.disabled = false;
    signinButton.classList.add('able-button');
  }
}