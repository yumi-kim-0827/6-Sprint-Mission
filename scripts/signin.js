const email = document.getElementById("email");
const emailResult = document.querySelector(".email_result");

const password = document.getElementById("password");
const passwordResult = document.querySelector(".password_result");

const nickname = document.getElementById("nickname");
const nicknameResult = document.querySelector(".nickname_result");

const passwordRepeat = document.getElementById("password_repeat");
const passwordRepeatResult = document.querySelector(".password_repeat_result");

const signinButton = document.getElementById("signin-button")
const signupButton = document.getElementById("signup-button")

email.addEventListener('focusout', (error) => {
    emailCheck(error.target)
});

password.addEventListener('focusout', (error) => {
    passwordCheck(error.target)
});

nickname.addEventListener('focusout', (error) => {
    nicknameCheck(error.target)
});

passwordRepeat.addEventListener('focusout', (error) => {
    passwordRepeatCheck(error.target)
});


function emailCheck(input){
    // 이메일 : 1) 영문, 숫자, 특수문자(-, _, .) 사용 가능
    //        2) 도메인 . 전에 @ 등장
    //        3) 도메인 . 후에 2-3 문자 등장
    var emailPattern = /^[0-9-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (input.value.length === 0) {
        emailResult.textContent = '이메일을 입력해주세요';
        emailResult.style.color = '#F74747';
        email.classList.remove('check_success');
        email.classList.add('check_error');

    } else if (!(input.value.match(emailPattern) != null)) {
        emailResult.textContent = '잘못된 이메일 형식입니다';
        emailResult.style.color = '#F74747';
        email.classList.remove('check_success');
        email.classList.add('check_error');
        
    } else {
        emailResult.textContent = '';
        email.classList.remove('check_error');
        email.classList.add('check_success');
        signinButtonActive();
        signupButtonActive();
    }

};

function passwordCheck(input){
    // 비밀번호 : 8글자 이상
    if (input.value.length === 0) {
        passwordResult.textContent = '비밀번호를 입력해주세요';
        passwordResult.style.color = '#F74747';
        password.classList.remove('check_success');
        password.classList.add('check_error');

    } else if (input.value.length < 8){
        passwordResult.textContent = '비밀번호를 8자 이상 입력해주세요';
        passwordResult.style.color = '#F74747';
        password.classList.remove('check_success');
        password.classList.add('check_error');

    } else {
        passwordResult.textContent = '';
        password.classList.remove('check_error');
        password.classList.add('check_success');
        signinButtonActive();
        signupButtonActive();
    }
};


function nicknameCheck(input){
    if (input.value === ""){
        nicknameResult.textContent = '닉네임을 입력해주세요';
        nicknameResult.style.color = '#F74747';
        nickname.classList.remove('check_success');
        nickname.classList.add('check_error');
    } else {
        nicknameResult.textContent = '';
        nickname.classList.remove('check_error');
        nickname.classList.add('check_success');
        signupButtonActive();
    }
};

function passwordRepeatCheck(input) {
    if (input.value !== password.value){
        passwordRepeatResult.textContent = '비밀번호가 일치하지 않습니다';
        passwordRepeatResult.style.color = '#F74747';
        passwordRepeat.classList.remove('check_success');
        passwordRepeat.classList.add('check_error');
    } else {
        passwordRepeatResult.textContent = '';
        passwordRepeat.classList.remove('check_error');
        passwordRepeat.classList.add('check_success');
        signupButtonActive();
    }
}

function signinButtonActive() {
    // 하나라도 에러가 있으면 버튼 비활성화
    if (email.classList.contains('check_success') && password.classList.contains('check_success')) {
        signinButton.disabled = false;
    } else {
        signinButton.disabled = true;       
    }
}

function signupButtonActive() {
    // 하나라도 에러가 있으면 버튼 비활성화
    if (email.classList.contains('check_success') && password.classList.contains('check_success')
    && nickname.classList.contains('check_success') && passwordRepeat.classList.contains('check_success')) {
        signupButton.disabled = false;
    } else {
        signupButton.disabled = true;       
    }
}