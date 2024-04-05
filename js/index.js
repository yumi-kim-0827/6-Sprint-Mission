/*

----- 키포인트 -----

1. 중복코드 줄이고 코드 재사용이 되게 
2. 이메일일때 혹은 비밀번호 일떄 어떻게 구분해서 하냐

*/


//auth input 태그들
const loginId = document.getElementById('login_ID');
const pwdId = document.getElementById('login_PWD');

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
inputFocus 함수 활용도를 높이고 inputFocus 함수안에 코드를 클린하게 작성하기 위해 해당 함수에 중첩if문을 사용했는데 어떤가요...? inputFocus 함수에 작성하는게 나을까요? 아님 코드를 나눌까요?
그리고 return할 때 inputfocus if문 사용으로 true, false 값을 반대로 작성했는데 이런식으로 작성해도 괜찮나요?
*/

//auth 이메일 input 값이 잘못되어있는 경우
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
    }

}

//auth의 모든 input들이 check 상태인지 확인후 auth submit버튼 활성화
function checkAuth() {
    const checkInputs = document.querySelectorAll('input[data-check]');
    const button = document.getElementById('auth_btn');
    const valueToCheck = 'check';
    let allInputsContainValue = true;

    checkInputs.forEach(input => {
        const dataCheckValue = input.dataset.check;
        if (!dataCheckValue || !dataCheckValue.includes(valueToCheck)) {
            allInputsContainValue = false;
            return; //foreach문 빠져나감
        }
    });

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
    }

    checkAuth();
    
}


checkAuth();
loginId.addEventListener('focusout', () => {inputFocus('login_ID', '이메일을 입력해주세요.', '잘못된 이메일 형식입니다.')});
pwdId.addEventListener('focusout', () =>  {inputFocus('login_PWD', '비밀번호를 입력해주세요.', '비밀번호를 8자 이상 입력해주세요.')});
