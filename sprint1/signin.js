const emailElement = document.getElementById('email');
const passwordElement = document.getElementById('password');
const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
const errMessage = document.createElement('p');
errMessage.classList.add('err-color');

function emailCheck(e) {
  const checkMessage = email.value;
  if (!e.target.value) {
    e.target.classList.add('error');
    errMessage.textContent = '이메일을 입력해주세요.';
    e.target.after(errMessage);
  } else if (!pattern.test(e.target.value)) {
    e.target.classList.add('error');
    errMessage.textContent = '잘못된 이메일 형식입니다';
    e.target.after(errMessage);
  }
}

function emailReset(e) {
  if (e.target.classList.contains('error') && e.target.nextElementSibling) {
    e.target.classList.remove('error');
    e.target.nextElementSibling.remove();
  }
}

function passwordCheck(e) {
  if (!e.target.value) {
    e.target.classList.add('error');
    errMessage.textContent = '비밀번호를 입력해주세요';
    e.target.after(errMessage);
  } else if (e.target.value.length < 8) {
    e.target.classList.add('error');
    errMessage.textContent = '비밀번호를 8자 이상 입력해주세요';
    e.target.after(errMessage);
  }
}

function passwordReset(e) {
  if (e.target.classList.contains('error') && e.target.nextElementSibling) {
    e.target.classList.remove('error');
    e.target.nextElementSibling.remove();
  }
}

emailElement.addEventListener('focusout', emailCheck);
emailElement.addEventListener('focusin', emailReset);
passwordElement.addEventListener('focusout', passwordCheck);
passwordElement.addEventListener('focusin', passwordReset);
