document.addEventListener('DOMContentLoaded', function () {
    const elInputUsername = document.querySelector('.loginid'); //아이디1 : 아이디 입력창 정보 가져오기
    const elFailureMessageid = document.querySelector('.failure-messageid'); //아이디2 : 입력값이 없을 때, 실패 메시지 정보 가져오기
    const elFailureMessageTwo = document.querySelector('.failure-message2'); //아이디3 : 이메일 형식이 아닐 때, 실패 메시지2 정보 가져오기 
    const elInputPassword = document.querySelector('.loginpw'); //비밀번호1 : 비밀번호 입력창 정보 가져오기
    const elFailureMessagepw = document.querySelector('.failure-messagepw'); // 비밀번호 2 : 입력값이 없을 때, 실패 메시지 정보 가져오기
    const elStrongPasswordMessage = document.querySelector('.strongPassword-message'); // 비밀번호3 : 8글자 미만일 때, 실패 메시지 정보 가져오기
    const elloginBtn = document.querySelector('.login-btn'); // 로그인버튼 정보 가져오기

    // 이메일 유효성 검사 함수
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // 비밀번호 유효성 검사 함수
    function validatePassword(password) {
        return password.length >= 8;
    }

    // 이메일 입력 체크
    elInputUsername.addEventListener('focusout', function () {
        if (!elInputUsername.value.trim()) { //빈값일때
            elInputUsername.style.outline = '2px solid #F74747';
            elFailureMessageid.classList.remove('hide');
            elFailureMessageTwo.classList.add('hide');
        } else { //빈값이 아닐때
            if (elInputUsername.value.trim() && !validateEmail(elInputUsername.value.trim())) {
                elInputUsername.style.outline = '2px solid #F74747';
                elFailureMessageid.classList.add('hide');
                elFailureMessageTwo.classList.remove('hide');
            } else {
                elInputUsername.style.outline = '';
                elFailureMessageid.classList.add('hide');
                elFailureMessageTwo.classList.add('hide');
            }
        }
    });

    // 비밀번호 입력 체크
    elInputPassword.addEventListener('focusout', function () {
        if (!elInputPassword.value.trim()) {
            elInputPassword.style.outline = '2px solid #F74747';
            elFailureMessagepw.classList.remove('hide');
            elStrongPasswordMessage.classList.add('hide');
        } else {
            if (elInputPassword.value.trim() && !validatePassword(elInputPassword.value.trim())) {
                elInputPassword.style.outline = '2px solid #F74747';
                elFailureMessagepw.classList.add('hide');
                elStrongPasswordMessage.classList.remove('hide');
            } else {
                elInputPassword.style.outline = '';
                elFailureMessagepw.classList.add('hide');
                elStrongPasswordMessage.classList.add('hide');
            }
        }
    });

    // 로그인 버튼 활성화 체크
    function checkFormValidity() {
        return (
            elInputUsername.value.trim() &&
            elInputPassword.value.trim() &&
            validateEmail(elInputUsername.value.trim()) &&
            validatePassword(elInputPassword.value.trim())
        );
    }

    // 버튼 활성/비활성화
    function toggleJoinBtn() {
        if (checkFormValidity()) {
            elloginBtn.removeAttribute('disabled');
            elloginBtn.classList.add('active');
        } else {
            elloginBtn.setAttribute('disabled', 'disabled');
            elloginBtn.classList.remove('active');
        }
    }

    // 로그인 버튼 클릭시
    elloginBtn.addEventListener('click', function(event) {
        // 기본 동작 방지
        event.preventDefault();

        // 유효성 검사
        if (checkFormValidity()) {
            // 이동할 페이지로 리다이렉트
            window.location.href = './items.html';
        }
    });

    // 입력 값 변경시 버튼 상태 업데이트
    elInputUsername.addEventListener('input', toggleJoinBtn);
    elInputPassword.addEventListener('input', toggleJoinBtn);

});

