const email = document.querySelector('#email');
const nickname = document.querySelector('#nickname');
const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#passwordConfirmation');

function emailCheck(e) {
  if (email.value.length == 0) {
    const p = document.createElement('p');
    p.classList.add('color');
    p.textContent = '이메일을 입력해주세요.';
    e.target.after(p);
  }
}

function nicknameCheck(e) {
  if (nickname.value.length == 0) {
    const p = document.createElement('p');
    p.classList.add('color');
    p.textContent = '닉네임을 입력해주세요.';
    e.target.after(p);
  }
}

function passwordCheck(e) {
  const p = document.createElement('p');
  p.classList.add('color');
  if (password.value.length == 0) {
    p.textContent = '비밀번호를 입력해주세요.';
  } else if (password.value.length < 8) {
    p.textContent = '비밀번호를 8자 이상 입력해주세요.';
  }
  e.currentTarget.after(p);
}

function passwordConfirmationCheck(e) {
  if (password.value != passwordConfirmation.value) {
    const p = document.createElement('p');
    p.classList.add('color');
    p.textContent = '비밀번호가 일치하지 않습니다..';
    e.currentTarget.after(p);
  }
}

function remove(e) {
  const deleteTarget = document.getElementById('.color');
  deleteTarget.remove();
}

email.addEventListener('focusout', emailCheck);
//email.addEventListener('focusin', remove);
nickname.addEventListener('focusout', nicknameCheck);
const passwordWrapper = document.querySelector('.input-wrapper');
passwordWrapper.addEventListener('focusout', passwordCheck);
passwordWrapper.addEventListener('focusout', passwordConfirmationCheck);
//password.addEventListener('focusin', remove);
