// 비밀번호 보기 버튼
const signInHideBtn = document.getElementById('signup-hide-btn');

signInHideBtn.addEventListener('mousedown', () => {
  document.getElementById('user-password').setAttribute('type', 'text');
  document.querySelector('.off').style.display = 'none';
  document.querySelector('.on').style.display = 'inline-block';
});

signInHideBtn.addEventListener('mouseup', () => {
  document.getElementById('user-password').setAttribute('type', 'password');
  document.querySelector('.off').style.display = 'inline-block';
  document.querySelector('.on').style.display = 'none';
});

// 비밀번호 재확인 보기 버튼
const reConFirmBtn = document.getElementById('signup-reconfirm-btn');

reConFirmBtn.addEventListener('mousedown', () => {
  document.getElementById('user-password-reconfirm').setAttribute('type', 'text');
  document.querySelector('.reconfi-off').style.display = 'none';
  document.querySelector('.reconfi-on').style.display = 'inline-block';
});

reConFirmBtn.addEventListener('mouseup', () => {
  document.getElementById('user-password-reconfirm').setAttribute('type', 'password');
  document.querySelector('.reconfi-off').style.display = 'inline-block';
  document.querySelector('.reconfi-on').style.display = 'none';
});

// 이메일 인풋
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
};

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

// ### 닉네임 인풋
const nickName = document.getElementById('user-name');
const nickNameMessage = document.createElement('p');
const nickNameMessagePlace = nickName.parentElement;

const makeNickNameMessage = (str) => {
  nickName.classList.add('message-border');
  nickNameMessage.textContent = str;
  nickNameMessage.classList.add('null-message');
  nickNameMessagePlace.append(nickNameMessage);
};

const deleteNickNameMessage = () => {
  nickName.classList.remove('message-border');
  nickNameMessage.textContent = '';
  nickNameMessage.classList.remove('null-message');

  if(nickNameMessagePlace.lastElementChild === nickNameMessage){
    nickNameMessagePlace.removeChild(nickNameMessage);
  } else {
    nickNameMessagePlace;
  };
  console.log('닉네임 통과');
}

const checkNickName = (e) => {
  const userNickName = e.target.value;

  if(userNickName === '') {
    makeNickNameMessage('닉네임을 입력해주세요.');
  } else {
    deleteNickNameMessage();
  }
}

nickName.addEventListener('focusout', checkNickName);

// ### 비밀번호
// 비밀번호 확인
const passwordInput = document.getElementById('user-password');
const passwordMessage = document.createElement('p');
const passwordMessagePlace = document.querySelector('.password-area');

const makeMessage = (str) => {
  passwordInput.classList.add('message-border');
  passwordMessage.textContent = str;
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
};

const checkPassword = (e) => {
  const password = e.target.value;

  if(password === ''){
    makeMessage('비밀번호를 입력해주세요.');
  } else {
    password.length > 7 ? deleteMessage() : makeMessage('비밀번호를 8자 이상 입력해주세요.');
  }
};

passwordInput.addEventListener('focusout', checkPassword);

// 비밀번호 재확인
const passwordInputRe = document.getElementById('user-password-reconfirm');
const passwordMessageRe = document.createElement('p');
const passwordMessagePlaceRe = document.querySelector('.password-re-area');

const makeMessageRe = (str) => {
  passwordInputRe.classList.add('message-border');
  passwordMessageRe.textContent = str;
  passwordMessageRe.classList.add('null-message');
  passwordMessagePlaceRe.append(passwordMessageRe);
};

const deleteMessageRe = () => {
  passwordInputRe.classList.remove('message-border');
  passwordMessageRe.textContent = '';
  passwordMessageRe.classList.remove('null-message');

  if(passwordMessagePlaceRe.lastElementChild === passwordMessageRe){
    passwordMessagePlaceRe.removeChild(passwordMessageRe);
  } else {
    passwordMessagePlaceRe;
  }
};

const checkPasswordRe = (e) => {
  const passwordRe = e.target.value;
  const password = passwordInput.value;

  if(passwordRe === '' || passwordRe !== password ){
    makeMessageRe('비밀번호가 일치하지 않습니다.');
  } else {
    passwordRe === passwordInput.value ? deleteMessageRe() : makeMessageRe('비밀번호가 일치하지 않습니다.');
  }
};

passwordInputRe.addEventListener('focusout', checkPasswordRe);

// ### 회원가입 버튼
const signUpBtn = document.getElementById('btn');


const moveSignIn = () => {
  const email = emailInput.value;
  const emailCheck = regex.test([email]);
  const passwordCheck = passwordInput.value;
  const passwordCheckRe = passwordInputRe.value;
  const nickNameCheck = nickName.value;

  if(emailCheck === false){
    emailInput.focus();
    console.log('이메일 검사 불합격');
  };

  if(nickNameCheck === ''){
    nickName.focus();
    console.log('닉네임 입력 안함');
  };

  if(passwordCheck.length < 7){
    passwordInput.focus();
    console.log('비밀번호 8자리가 아님');
  };

  if(passwordCheckRe !== passwordCheck){
    passwordInputRe.focus();
    console.log('비밀번호가 같지 않음');
  };

  if(email === '' && passwordCheck === ''){
    passwordInput.focus();
    emailInput.focus();
    console.log('이메일 비번 입력 안함');
  };

  if(email === '' || passwordCheck === ''){
    email === '' ? emailInput.focus() : nickNameCheck === '' ? nickName.focus() : passwordInput.focus();
    console.log('이메일 비번 또는 닉네임 입력 안함');
  };

  if(emailCheck === true && nickNameCheck !== ''){
    if(passwordCheck.length > 7 && passwordCheckRe === passwordCheck){
      location.href = '/page/signin.html';
    }
  }
};

signUpBtn.addEventListener('click', moveSignIn);