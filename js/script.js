window.onload = function(){ // js start !!

    // ** email BLUR 에러 표시 **
    const emailinsertId = document.getElementById('email_insertId'); //이메일 입력폼
    const emailPattern = /^[A-Za-z0-9]+@[A-Za-z0-9]+.com$/; //이메일 유효성
    let emailValid = false;

    //이메일 포커스아웃할 때, 이벤트 리스너
    emailinsertId.addEventListener('blur', function(event){
      const email = event.target.value;
      //이메일 형식이 맞지 않는 경우 ... 에러메세지
      if( email.length > 0 && !emailPattern.test(email)){
        document.querySelector('.email_notice').textContent='잘못된 이메일 형식입니다.';
      }else if( email.length < 1 ){
      //아무것도 안적힌 경우 ... 에러메세지
        document.querySelector('.email_notice').textContent='이메일을 입력해주세요';
      }else{
      //올바른 이메일 형식 ... 에러메세지 제거
        document.querySelector('.email_notice').textContent='';
        emailValid = true;
      }
      console.log(emailValid);
      return emailValid;
    })




    // ** psw BLUR 에러 표시 **
    const pswInsertId = document.getElementById('psw_insertId'); //비밀번호 입력폼

    pswInsertId.addEventListener('blur', function(event){
      //비밀번호에 아무것도 안적혀있을 때 ... 에러메세지
      if( event.target.value.length > 0 && event.target.value.length < 8 ){
        document.querySelector('.psw_notice').textContent='비밀번호를 8자 이상 입력해주세요.';
        return false;
      }else if( event.target.value.length <1 ){
      //비밀번호가 적혔는데 8자 미만일 때 ... 에러메세지
        document.querySelector('.psw_notice').textContent='비밀번호를 입력해주세요.';
        return false;
      } else {
      //잘 적혀있을 때 ... 에러메세지 제거
        document.querySelector('.psw_notice').textContent='';
        return true;
      }
    })

    //이메일, 비밀번호 전부 return true일 때, 로그인 버튼 활성화

} // js end !!