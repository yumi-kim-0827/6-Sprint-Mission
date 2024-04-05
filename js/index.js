/*

----- 키포인트 -----

1. 중복코드 줄이고 코드 재사용이 되게 
2. 이메일일때 혹은 비밀번호 일떄 어떻게 구분해서 하냐

*/


//auth input 태그들
const loginId = document.getElementById('login_ID');
const pwdId = document.getElementById('login_PWD');
const pwdIdCheck = document.getElementById('login_PWD2');
const nickName = document.getElementById('login_Name');

//wrong class 삽입, 삭제 코드가 중복으로 들어가 따로 변수에 담았음
const addWrong = (el) => {
    el.classList.add('wrong');
    el.nextElementSibling.classList.add('wrong');
    //데이터셋에 check 삭제
    el.dataset.check = '';
};
const removeWrong = (el) => {
    if(el.classList.contains('wrong')){
        el.classList.remove('wrong');
        el.nextElementSibling.classList.remove('wrong');
    }
    //데이터셋에 check 추가
    el.dataset.check = 'check';
}

/*
******멘토님께******
inputFocus 함수 활용도를 높이고 inputFocus 함수안에 코드를 클린하게 작성하기 위해 wrongAuth 함수에 중첩if문을 사용했는데 나쁜 방법인가요...? (if(input === loginId) 부분) 
inputFocus 함수에 작성하는게 나을까요? 
아님 코드를 각각 이메일일때 비밀번호일떄 등등으로 나누는게 나을까요?
그리고 return할 때 inputfocus 함수에서 if문 사용으로 인해 true, false 값을 반대로 작성했는데 이런식으로 작성해도 괜찮나요?

addEventListener 유효성 때문에 2가지 방법을 생각해 봤는데 (login화면에서 닉네임 태그가 없어서 에러남)
1. 모듈화 2. 각 페이지에 script 추가
둘 중에 어떤게 더 좋은 선택일까요?
저는 쉬운길인 2번을 선택하긴 했습니다....ㅎ 
그런데 이렇게 하면 각 페이지에 동일한 addlistener가 추가되서 중복된 코드들이 있어서 어떡하면 좋을지 질문합니다!
*/

//auth 이메일 input 값이 제대로 되어있는지 확인
function wrongAuth(el){
    const input = document.getElementById(el);

    if(input === loginId){
        //이메일 일 때
        email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
        //이메일 형식 확인
        if(!email_regex.test(loginId.value)){ 
            addWrong(input);
            return true;
        }else{
            //해당 input 태그에 wrong 클래스가 있는지 확인 후 있으면 삭제
            removeWrong(input);
            return false;
        }
    }else if(input === pwdId){
        //비밀번호 일 때
        if(input.value.length < 8){
            addWrong(input);
            return true;
        }else{
            removeWrong(input);
            return false;
        }
    }else if(input === pwdIdCheck){
        //비밀번호 확인
        if(pwdId.value != pwdIdCheck.value){
            addWrong(input);
            return true;
        }else{
            removeWrong(input);
            return false;
        } 
    }

}

//auth의 모든 input들이 check 상태인지 확인후 auth submit버튼 활성화
function checkAuth() {
    const checkInputs = document.querySelectorAll('input[data-check]');
    const button = document.getElementById('auth_btn');
    const valueToCheck = 'check';
    let allInputsContainValue = true;

    //모든 input에 data-check 값이 check인지 확인 
    checkInputs.forEach(input => {
        const dataCheckValue = input.dataset.check;
        if (!dataCheckValue || !dataCheckValue.includes(valueToCheck)) {
            allInputsContainValue = false;
            return; //foreach문 빠져나감
        }
    });

    //버튼에 디스에이블 속성값 변경
    if (allInputsContainValue) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
    console.log('checkAuth 실행')
}

//auth input 태그에 포커스 아웃되었을때 실행될 함수
function inputFocus(inputId, inputEmpty, inputWrong){
    const input = document.getElementById(inputId);
    const inputSpan = input.nextElementSibling;
    if(input.value === ''){
        //input이 비었을때
        addWrong(input);
        inputSpan.textContent = inputEmpty;
        
    }else if(wrongAuth(inputId)){
        //잘못된 값을 넣었을때
        inputSpan.textContent = inputWrong;
    }else{
        removeWrong(input);
    }

    checkAuth();
    
}

//비밀번호 보이기
function pwdShow(el){
    const pwdLabel = el.previousElementSibling;
    
    //password type 바꾸기
    const input = pwdLabel.querySelector('input');
    const currentType = input.getAttribute('type');
    const newType = currentType === 'password' ? 'text' : 'password';
    input.setAttribute('type', newType);

    //눈모양 바꾸기
    const currentSrc = el.getAttribute('src');
    const newSrc = currentSrc === '../image/login/eye.png' ? '../image/login/eye2.png' : '../image/login/eye.png';
    el.setAttribute('src', newSrc);
}

checkAuth();
