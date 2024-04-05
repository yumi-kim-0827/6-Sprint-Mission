// 비밀번호 show And hide 버튼
const signInHideBtn = document.getElementById('signin-hide-btn');

signInHideBtn.addEventListener('mousedown', () => {
  passwordInput.setAttribute('type', 'text');
  document.querySelector('.on').style.display = 'inline-block';
  document.querySelector('.off').style.display = 'none';
});

signInHideBtn.addEventListener('mouseup', () => {
  passwordInput.setAttribute('type', 'password');
  document.querySelector('.on').style.display = 'none';
  document.querySelector('.off').style.display = 'inline-block';
});

// 이메일, 비밀번호, 로그인 버튼
// ### 이메일 인풋
const emailInput = document.getElementById('user-email');
const messagePlace = emailInput.parentElement;
const message = document.createElement('p');

const regex = new RegExp(
  "([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])"
  );

const makeEmailMessage = (str) => {
  emailInput.classList.add('message-border');
  message.textContent = str;
  message.classList.add('null-message');
  messagePlace.append(message);
}

const deleteEmailMessage = () => {
  emailInput.classList.remove('message-border');
  message.textContent = '';
  message.classList.remove('null-message');

  if(messagePlace.lastElementChild === message){
    messagePlace.removeChild(message);
  } else {
    messagePlace;
  };

  console.log('이메일 통과');
}

const checkEmail = (e) => {
  const email = e.target.value;
  if(email === '') {
    makeEmailMessage('이메일을 입력해주세요.');
  } else {
    regex.test([email]) === true ? deleteEmailMessage() : makeEmailMessage('잘못된 이메일 형식입니다.');
  }
};

emailInput.addEventListener('focusout', checkEmail);

// ### 비밀번호 인풋
const passwordInput = document.getElementById('user-password');
const passwordMessage = document.createElement('p');
const passwordMessagePlace = document.querySelector('.input-items.password');

const makeMessage = (message) => {
  passwordInput.classList.add('message-border');
  passwordMessage.textContent = message;
  passwordMessage.classList.add('null-message');
  passwordMessagePlace.append(passwordMessage);
};

const deleteMessage = () => {
  passwordInput.classList.remove('message-border');
  passwordMessage.textContent = '';
  passwordMessage.classList.remove('null-message');

  if(passwordMessagePlace.lastElementChild === passwordMessage){
    passwordMessagePlace.removeChild(passwordMessage);
  } else {
    passwordMessagePlace;
  };

  console.log('비밀번호 통과');
}

const checkPassword = (e) => {
  const password = e.target.value;

  if(password === ''){
    makeMessage('비밀번호를 입력해주세요.');
  } else {
    password.length > 7 ? deleteMessage() : makeMessage('비밀번호를 8자 이상 입력해주세요.');
  }
};

passwordInput.addEventListener('focusout', checkPassword);

// ### 로그인 버튼
const logInBtn = document.getElementById('btn');

const moveItems = () => {
  const email = emailInput.value;
  const emailCheck = regex.test([email]);
  const passwordCheck = passwordInput.value;

  if(emailCheck === false){
    emailInput.focus();
    console.log('이메일 검사 불합격');
  };

  if(passwordCheck.length < 7){
    passwordInput.focus();
    console.log('비밀번호 8자리가 아님');
  };

  if(email === '' && passwordCheck === ''){
    emailInput.focus();
    passwordInput.focus();
    console.log('이메일 비번 입력 안함');
  }

  if(email === '' || passwordCheck === ''){
    email === '' ? emailInput.focus() : passwordInput.focus();
    console.log('이메일 또는 비번 입력 안함');
  };

  if(emailCheck === true && passwordCheck.length > 7 ){
    location.href = '/page/items.html';
  };
}

logInBtn.addEventListener('click', moveItems);