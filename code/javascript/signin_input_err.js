import { Input,login_btn,passwordValid,emailValid } from "./signup_input_err.js";



Input.addEventListener('input',(event)=>{

    if(emailValid&&passwordValid){
        login_btn.removeAttribute('disabled');
    }else{
        login_btn.setAttribute('disabled', true);
    }
});


login_btn.addEventListener('click', (event)=> {
    event.preventDefault();
    window.location.href = "./items.html";
});

