// 로그인 버튼 이벤트 핸들러
function loginBtnClickEvent() {
  window.location.href = '/pages/items';
}

// 회원가입 버튼 이벤트 핸들러
function signupBtnClickEvent() {
  window.location.href = '/pages/login';
}

// 비밀번호 표시 이벤트 핸들러
function visibleIconClickEvent(e) {
  const password = e.target.parentElement.querySelector('.password');
  if (!e.target.classList.contains('on')) {
    e.target.classList.add('on');
    password.setAttribute('type', 'text');
    password.setAttribute('autocomplete', 'off');
  } else {
    e.target.classList.remove('on');
    password.setAttribute('type', 'password');
    password.setAttribute('autocomplete', 'current-password');
  }
}

export { loginBtnClickEvent, signupBtnClickEvent, visibleIconClickEvent };
