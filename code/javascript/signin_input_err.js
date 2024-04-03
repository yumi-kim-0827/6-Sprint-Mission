

const Input = document.querySelector('form');
const login_btn =  document.querySelector('.login-form button');
const password_visible_btn = document.querySelectorAll('.password-visible-btn');
let passwordValid=false;
let emailValid=false;

login_btn.setAttribute('disabled', true);
login_btn.addEventListener('click', ()=>{console.log('login!')});


const emailCheck = (userInput)=>{ 
    
    const email = userInput.value;
    const exp_text = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    const err_m = userInput.nextElementSibling;
   
    if(email === ''){
        userInput.classList.add('err-input');
        err_m.textContent = '이메일을 입력해주세요'
        return false;
    }else if(!exp_text.test(email)){
        userInput.classList.add('err-input');
        err_m.textContent = '잘못된 이메일 형식입니다'
        return false;
    }else{
        userInput.classList.remove('err-input');
        err_m.textContent = ''
        return true;
    }

}

const passwordCheck = (userInput)=>{
    const password = userInput.value;
    const err_m = userInput.nextElementSibling;
    if(password === ''){
        userInput.classList.add('err-input');
        err_m.textContent = '비밀번호를 입력해주세요'
        password_visible_btn[0].style.top = '45%';
        return false;
    }else if(password.length < 8){
        userInput.classList.add('err-input');
        err_m.textContent = '비밀번호를 8자 이상 입력해주세요';
        password_visible_btn[0].style.top = '45%';
        return false;
    }else{
        userInput.classList.remove('err-input');
        err_m.textContent = ''
        password_visible_btn[0].style.top = '55%';
        return true;
    }

}


Input.addEventListener('input',(event)=>{
    const userInput = event.target;

    switch(userInput.id){
        case 'userEmail': emailValid =  emailCheck(userInput);
        break;
        case 'userPassword': passwordValid = passwordCheck(userInput);
        break;
    }

    if(emailValid&&passwordValid){
        login_btn.removeAttribute('disabled');
    }else{
        login_btn.setAttribute('disabled', true);
    }
    
});


export {emailCheck,passwordCheck};