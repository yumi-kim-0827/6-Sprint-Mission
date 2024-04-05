const nicknameElement = document.getElementById('nickname');
const passwordConfirmationElement = document.getElementById(
  'passwordConfirmation',
);
const message = document.createElement('p');
message.classList.add('err-color');

function nicknameCheck(e) {
  if (!e.target.value) {
    e.target.classList.add('error');
    message.textContent = '닉네임을 입력해주세요';
    e.target.after(message);
  }
}

function nicknameReset(e) {
  if (e.target.classList.contains('error') && e.target.nextElementSibling) {
    e.target.classList.remove('error');
    e.target.nextElementSibling.remove();
  }
}

function passwordConfirmationCheck(e) {
  if (e.target.value !== passwordConfirmationElement.value) {
    e.target.classList.add('error');
    message.textContent = '비밀번호가 일치하지 않습니다';
    e.target.after(message);
  }
}

function passwordConfirmationReset(e) {
  if (e.target.classList.contains('error') && e.target.nextElementSibling) {
    e.target.classList.remove('error');
    e.target.nextElementSibling.remove();
  }
}

nicknameElement.addEventListener('focusout', nicknameCheck);
nicknameElement.addEventListener('focusin', nicknameReset);
passwordConfirmationElement.addEventListener(
  'focusout',
  passwordConfirmationCheck,
);
passwordConfirmationElement.addEventListener(
  'focusin',
  passwordConfirmationReset,
);
