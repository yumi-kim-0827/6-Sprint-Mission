const $emailInput = document.querySelector('#email');
const $emailAlertInfo = document.querySelector('.email_alertInfo');
const $passwordInput = document.querySelector('#password');
const $passwordAlertInfo = document.querySelector('.password_alertInfo');

const $button = document.querySelector('button');

//------------------------------------------------------------
const emailAlert = (e) => {
  $emailInput.style.margin = '0';
  $emailInput.style.outline = 'solid red';
  $emailAlertInfo.style.color = 'red';
  if (e.target.value.length === 0) {
    $emailAlertInfo.textContent = '이메일을 입력해주세요.';
  } else if (/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/) {
    $emailAlertInfo.textContent = '잘못된 이메일 형식입니다.';
  }
};

const passwordAlert = (e) => {
  $passwordInput.style.margin = '0';
  $passwordInput.style.outline = 'solid red';
  $passwordAlertInfo.style.color = 'red';
  if (e.target.value.length === 0) {
    $passwordAlertInfo.textContent = '비밀번호를 입력해주세요.';
  } else if (e.target.value.length < 8) {
    $passwordAlertInfo.textContent = '비밀번호를 8자 이상 입력해주세요.';
  }
};

const movePage = (e) => {
  e.prventDefault();
  const $a = document.createElement('a');
  $button.appendChild($a);
  $a.setAttribute('href', '"home.html');
  // a태그에 속성 추가
  emailAlert ? (e.target.style = 'disabled') : 'none';
};

// 이벤트 핸들러 모음
$emailInput.addEventListener('focusout', emailAlert);
$passwordInput.addEventListener('focusout', passwordAlert);

$button.addEventListener('click', movePage);
