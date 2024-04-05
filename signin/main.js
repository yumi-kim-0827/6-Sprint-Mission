// focus in
//if (input에 값이 없을 경우)
// 빨강색 테두리와 아래에 이메일을 입력해주세요~ 에러 메세지

const input = document.querySelector('.input-name');
const inputMyEmail = document.querySelector('#email');
const inputMyUserName = document.querySelector('#user-name');
const inputMyPassword = document.querySelector('#password');
const loginBtn = document.querySelector('#login-btn');

// function printEvent(event) {
//   if ( )
//   event.target.style.color = 'red';
// }

// inputMyEmail.addEventListener('focusout', printEvent)

// focus out 할 때 값이 없는 경우 함수를 실행해 에러메세지를 띄우기
function errorTextEmail () {
  const first = document.createElement('span');
  first.textContent = "이메일을 입력해주세요.";
  input.append(first);
  first.children[-length].childNodes = 'red-text'
}

function PasswordCheck () {
  if (inputMyPassword.value.length < 0) {
    const first = document.createElement('span');
    first.textContent = "비밀번호를 입력해주세요";
    input.append(first);
    first.children[-length].childNodes = 'red-text'
  } else if (inputMyPassword.value.length < 8){
    const first = document.createElement('span');
    first.textContent = "비밀번호를 8자 이상 입력해주세요.";
    input.append(first);
    first.children[-length].childNodes = 'red-text'
  }
}


//버튼 활성화
function checkIdPw () {
  inputMyEmail.value.includes("@") && inputMyPassword.value.length > 5
  ? (loginBtn.style.backgroundColor = "#287aff",
  loginBtn.style.cursor = "pointer")
  : loginBtn.style.backgroundColor = "#287aff64;"
}