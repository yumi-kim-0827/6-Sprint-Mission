document.addEventListener('DOMContentLoaded', function () {
    const elInputUsername = document.querySelector('.joinid'); //아이디1 : 아이디 입력창 정보 가져오기
    const elFailureMessageid = document.querySelector('.failure-messageid'); //아이디2 : 입력값이 없을 때, 실패 메시지 정보 가져오기
    const elFailureMessageTwo = document.querySelector('.failure-message2'); //아이디3 : 이메일 형식이 아닐 때, 실패 메시지2 정보 가져오기 
    const elname = document.querySelector('.joinid.name'); // 닉네임1 : 닉네임 입력창 정보 가져오기
    const elFailureMessagename = document.querySelector('.failure-messagename'); //닉네임2 : 입력값이 없을 때, 실패 메시지 정보 가져오기
    const elInputPassword = document.querySelector('.joinpw.password'); //비밀번호1 : 비밀번호 입력창 정보 가져오기
    const elInputPasswordRetype = document.querySelector('.joinpw.check'); //비밀번호2 : 비밀번호 확인 입력창 정보 가져오기
    const elFailureMessagepw = document.querySelector('.failure-messagepw'); //비밀번호3 : 입력값이 없을 때, 실패 메시지 정보 가져오기
    const elMismatchMessage = document.querySelector('.mismatch-message'); // 비밀번호4 : 비밀번호 불일치일 때, 실패 메시지 정보 가져오기 
    const elStrongPasswordMessage = document.querySelector('.strongPassword-message'); // 비밀번호5 : 8글자 미만일 때, 실패 메시지 정보 가져오기
    const elJoinBtn = document.querySelector('.join-btn'); // 회원가입버튼 정보 가져오기

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

    // 닉네임 입력 체크
    elname.addEventListener('focusout', function () {
        if (!elname.value.trim()) {
            elname.style.outline = '2px solid #F74747';
            elFailureMessagename.classList.remove('hide');
        } else {
            elname.style.outline = '';
            elFailureMessagename.classList.add('hide');
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

    // 비밀번호 확인 체크
    elInputPasswordRetype.addEventListener('focusout', function () {
        if (elInputPassword.value.trim() !== elInputPasswordRetype.value.trim()) {
            elInputPasswordRetype.style.outline = '2px solid #F74747';
            elMismatchMessage.classList.remove('hide');
        } else {
            elInputPasswordRetype.style.outline = '';
            elMismatchMessage.classList.add('hide');
        }
    });

    // 회원가입 버튼 활성화 체크
    function checkFormValidity() {
        return (
            elInputUsername.value.trim() &&
            elname.value.trim() &&
            elInputPassword.value.trim() &&
            elInputPasswordRetype.value.trim() &&
            validateEmail(elInputUsername.value.trim()) &&
            validatePassword(elInputPassword.value.trim()) &&
            elInputPassword.value.trim() === elInputPasswordRetype.value.trim()
        );
    }

    // 버튼 활성/비활성화
    function toggleJoinBtn() {
        if (checkFormValidity()) {
            elJoinBtn.removeAttribute('disabled');
            elJoinBtn.classList.add('active');
        } else {
            elJoinBtn.setAttribute('disabled', 'disabled');
            elJoinBtn.classList.remove('active');
        }
    }

    // 회원가입 버튼 클릭시
    elJoinBtn.addEventListener('click', function(event) {
        // 기본 동작 방지
        event.preventDefault();

        // 유효성 검사
        if (checkFormValidity()) {
            // 이동할 페이지로 리다이렉트
            window.location.href = './signin.html';
        }
    });

    // 입력 값 변경시 버튼 상태 업데이트
    elInputUsername.addEventListener('input', toggleJoinBtn);
    elname.addEventListener('input', toggleJoinBtn);
    elInputPassword.addEventListener('input', toggleJoinBtn);
    elInputPasswordRetype.addEventListener('input', toggleJoinBtn);

});



