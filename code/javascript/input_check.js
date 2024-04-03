


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
    const password_visible_btn = err_m.nextElementSibling;
    if(password === ''){
        userInput.classList.add('err-input');
        err_m.textContent = '비밀번호를 입력해주세요'
        password_visible_btn.style.top = '45%';
        return false;
    }else if(password.length < 8){
        userInput.classList.add('err-input');
        err_m.textContent = '비밀번호를 8자 이상 입력해주세요';
        password_visible_btn.style.top = '45%';
        return false;
    }else{
        userInput.classList.remove('err-input');
        err_m.textContent = ''
        password_visible_btn.style.top = '55%';
        return true;
    }

}

const nickNameCheck = (userInput)=>{
    const nickName = userInput.value;
    const err_m = userInput.nextElementSibling;
    if(nickName === ''){
        userInput.classList.add('err-input');
        err_m.textContent = '닉네임을 입력해주세요'
        return false;
    }else{
        userInput.classList.remove('err-input');
        err_m.textContent = ''
        return true;
    }

}

const passwordDoubleCheck = (userInput,password1)=>{
    
    const password2 = userInput.value;
    const err_m = userInput.nextElementSibling;
    const password_visible_btn = err_m.nextElementSibling;
    if(password1 !== password2){
        userInput.classList.add('err-input');
        err_m.textContent = '비밀번호가 일치하지 않습니다'
        password_visible_btn.style.top = '45%';
        return false;
    }else{
        userInput.classList.remove('err-input');
        err_m.textContent = ''
        password_visible_btn.style.top = '55%';
        return true;
    }



}

const visible =(eye)=>{
    const err_m=eye.previousElementSibling;
    const userInput = err_m.previousElementSibling;
    console.log("ss")
    if(userInput.type === 'password'){
        userInput.type ='text';
        eye.src="../image/signin_image/visibility_visible.png";
    }else{
        userInput.type ='password';
        eye.src="../image/signin_image/visibility_hidden.png";   
    }
}

export{emailCheck,passwordCheck,passwordDoubleCheck,nickNameCheck,visible}