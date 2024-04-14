const email = document.querySelector('#email') // 이메일 입력값 확인하기 위해 선언
const email_input_err = document.querySelector('#email_input_err') // 이메일 입력에러
const email_form_err = document.querySelector('#email_form_err') // 이메일 형식에러
let email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,4}$/i; // 이메일 유효성검사 양식

const nickname = document.querySelector('#nickname') // 닉네임 입력값 확인하기 위해 선언
const nickname_input_err = document.querySelector('#nickname_input_err')  // 닉네임 입력에러

const pwd = document.querySelector('#pwd') // 비밀번호 입력값 확인하기 위해 선언
const pwd_input_err = document.querySelector('#pwd_input_err') // 비밀번호 입력에러
const pwd_length_err = document.querySelector('#pwd_length_err') //비밀번호 8글자 이하 에러

const pwd_check = document.querySelector('#pwd_check')
const pwd_check_input_err = document.querySelector('#pwd_check_input_err')
const pwd_different = document.querySelector('#pwd_different')

const signin_btn = document.querySelector('#signin_btn')





const email_check = () => {
  if (!email.value) { // 입력값이 falsy면 실행
    email_form_err.classList.remove('hidden_event') // 에러가 겹치지않게 class 삭제해줌
    email_input_err.classList.add('hidden_event') 
    signin_btn.disabled = true // 버튼 비활성화
  } else if (!email_regex.test(email.value)) {
    email_input_err.classList.remove('hidden_event') // 에러가 겹치지않게 class 삭제해줌
    email_form_err.classList.add('hidden_event')
    signin_btn.disabled = true
  } else {
    email_form_err.classList.remove('hidden_event')
    email_input_err.classList.remove('hidden_event')
    signin_btn.disabled = false // 버튼 활성화
  }
}

const nickname_check = () => {
  if (!nickname.value) {
    nickname_input_err.classList.add('hidden_event')
    signin_btn.disabled = true
  } else {
    nickname_input_err.classList.remove('hidden_event')
    signin_btn.disabled = false
  }
}

const passwd = () => {
  console.log(pwd.value.length)
  if (!pwd.value) {
    pwd_length_err.classList.remove('hidden_event')
    pwd_input_err.classList.add('hidden_event')
    signin_btn.disabled = true
  } else if (pwd.value.length < 8) {
    pwd_input_err.classList.remove('hidden_event')
    pwd_length_err.classList.add('hidden_event')
    signin_btn.disabled = true
  } else {
    pwd_input_err.classList.remove('hidden_event')
    pwd_length_err.classList.remove('hidden_event')
    signin_btn.disabled = false
  }
}

const passwd_check = () => {
  if (pwd.value !== pwd_check.value) {
    pwd_check_input_err.classList.remove('hidden_event')
    pwd_different.classList.add('hidden_event')
    signin_btn.disabled = true
  } else if (!pwd_check.value) {
    pwd_different.classList.remove('hidden_event')
    pwd_check_input_err.classList.add('hidden_event')
    signin_btn.disabled = true
  } else {
    pwd_check_input_err.classList.remove('hidden_event')
    pwd_different.classList.remove('hidden_event')
    signin_btn.disabled = false
  }
}


email.addEventListener('focusout', email_check)
nickname.addEventListener('focusout', nickname_check)
pwd.addEventListener('focusout', passwd)
pwd_check.addEventListener('focusout',passwd_check)