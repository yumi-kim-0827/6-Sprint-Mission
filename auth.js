const emailInput = document.getElementById('email_input');
const emailErrorMessage = document.getElementById('emailErrorMessage');
const nickname = document.getElementById('nickname');
const passwordInput = document.getElementById('pw_input');
const passwordErrorMessage = document.getElementById('passwordErrorMessage');
const passwordInput2 = document.getElementById('pw_input2');
const passwordMismatchMessage = document.getElementById('passwordMismatchError');
const loginButton = document.getElementById('loginButton');
const signinButton = document.getElementById('signinButton');

function showError(input, errorMessage) {
  input.classList.add('error');
  errorMessage.style.display = 'block';
}

function hideError(input, errorMessage) {
  input.classList.remove('error');
  errorMessage.style.display = 'none';
}

  // 유효성 검사 로직 
function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
function validatePassword(password) {
  return password.length >= 8;
}
function validateNickname(nickname) {
  if (nickname.trim() === '') {
      return false; // 닉네임이 비어 있으면 유효하지 않음
  } else {
      return true; // 닉네임이 입력되었으면 유효함
  }
}

function checkPasswordMatch() {
  if (passwordInput.value !== passwordInput2.value) {
    showError(passwordInput2, passwordMismatchMessage);
  } else {
    hideError(passwordInput2, passwordMismatchMessage);
  }
  upadateSigninButton();
}

passwordInput.addEventListener('input',checkPasswordMatch);
passwordInput2.addEventListener('input',checkPasswordMatch);


emailInput.addEventListener('focusout',function() {
  if (!validateEmail(emailInput.value)){
    showError(emailInput, emailErrorMessage);
  } else {
    hideError(emailInput, emailErrorMessage);
  }
  updateLoginButton();
});

passwordInput.addEventListener('focusout',function() {
  if(!validatePassword(passwordInput.value)) {
    showError(passwordInput,passwordErrorMessage);
  } else {
    hideError(passwordInput, passwordErrorMessage);
  }
  updateLoginButton();
});


//버튼 활성화 여부
function updateLoginButton(){
  if(emailInput.value && validateEmail(emailInput.value) && passwordInput.value && validatePassword(passwordInput.value)){
    loginButton.disabled = false;
  } else{
    loginButton.disabled = true;
  }
}
function updateSigninButton(){
  if(emailInput.value && validateEmail(emailInput.value) && validateNickname(nickname.value) && passwordInput.value && validatePassword(passwordInput.value) && checkPasswordMatch(passwordInput2.value)){
    signinButton.disabled = false;
  } else{
    signinButton.disabled = true;
  }
}


loginButton.addEventListener('click',function(){
  window.location.href = './items';
})
signinButton.addEventListener('click',function(){
  window.location.href = './signin';
})