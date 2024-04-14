const email = document.querySelector('#email')
const form_email = document.querySelector('#form_email')
const passwd = document.querySelector('#pwd')
const form_pwd = document.querySelector('#form_pwd')
const btn = document.querySelector('#log_btn')



// 이메일 input에서 아무것도 작성 안했을 시 추가하는 p코드
const email_input_err = document.createElement('p')
email_input_err.textContent = '이메일을 입력해주세요'

//이메일 유효성 검사코드 근데 여기서 마지막에 {3,4}가 무엇을 의미하는지 모르겠다.
let email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,4}$/i;

// 이메일 양식대로 제대로 작성을 안하면 추가하는 p코드
const email_input_form = document.createElement('p')
email_input_form.textContent = "잘못된 이메일 형식입니다."

// 비밀번호 input에서 아무것도 작성하지 않으면 추가되는 p코드
const pwd_input_err = document.createElement('p')
pwd_input_err.textContent = "비밀번호를 입력해주세요"

// 비밀번호길이가 8보다 낮으면 추가되는 p코드
const pwd_length_err = document.createElement('p')
pwd_length_err.textContent = '비밀번호를 8자 이상 입력해주세요'



const emailcheck = () => {
  if (!email.value) {
    email_input_form.remove() // 에러메시지가 겹치는 걸 방지
    form_email.append(email_input_err)
    email.classList.add('email_err')
    btn.disabled = true; //버튼 비활성화
  } else if (!email_regex.test(email.value)) {
    email_input_err.remove() // 에러메시지가 겹치는 걸 방지
    form_email.append(email_input_form)
    email.classList.add('email_err')
    btn.disabled = true;
  }
  else {
    email_input_err.remove()
    email_input_form.remove()
    email.removeAttribute('class')
    btn.disabled = false; //버튼 활성화
  }
}


const pwdcheck = () => {
  if (!pwd.value) {
    pwd_length_err.remove() // 에러메시지가 겹치는 걸 방지
    form_pwd.append(pwd_input_err)
    passwd.classList.add('pwd_err')
    btn.disabled = true; //버튼 비활성화
  } else if (passwd.value.length < 8) {
    pwd_input_err.remove() // 에러메시지가 겹치는 걸 방지
    form_pwd.append(pwd_length_err)
    passwd.classList.add('pwd_err')
    btn.disabled = true;
  }
  else {
    pwd_input_err.remove()
    pwd_length_err.remove()
    passwd.removeAttribute('class')
    btn.disabled = false; //버튼 활성화
  }
}



email.addEventListener('focusout', emailcheck)
passwd.addEventListener('focusout', pwdcheck)