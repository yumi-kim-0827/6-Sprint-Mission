const email = document.querySelector('#email');

function emailCheck(e) {
  const checkMessage = email.value;
  if (checkMessage.length == 0) {
    const p = document.createElement('p');
    p.classList.add('color');
    p.textContent = '이메일을 입력해주세요.';
    e.target.after(p);
  }
}

function passwordCheck(e) {
  const password = document.querySelector('#password');
  const p = document.createElement('p');
  p.classList.add('color');
  if (password.value.length == 0) {
    p.textContent = '비밀번호를 입력해주세요.';
  } else if (password.value.length < 8) {
    p.textContent = '비밀번호를 8자 이상 입력해주세요.';
  }
  e.currentTarget.after(p);
}

function remove(e) {
  const deleteTarget = document.getElementById('.color');
  deleteTarget.remove();
}

email.addEventListener('focusout', emailCheck);
//email.addEventListener('focusin', remove);
const password = document.querySelector('.input-wrapper');
password.addEventListener('focusout', passwordCheck);
//password.addEventListener('focusin', remove);
