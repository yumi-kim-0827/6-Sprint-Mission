window.onload = function(){ // js start !!

    // ** email BLUR 에러 표시 **
    const emailinsertId = document.getElementById('email_insertId'); //이메일 입력폼
    const emailPattern = /^[A-Za-z0-9]+@[A-Za-z0-9]+.com$/; //이메일 유효성 패턴
    let emailValid = false; //이메일 유효성

    //이메일 포커스아웃할 때, 이벤트 리스너
    emailinsertId.addEventListener('blur', function(event){
      const email = event.target.value;
      //이메일 형식이 맞지 않는 경우 ... 에러메세지
      if( email.length > 0 && !emailPattern.test(email)){
        document.querySelector('.email_notice').textContent='잘못된 이메일 형식입니다.';
        emailValid = false;
      }else if( email.length < 1 ){
      //아무것도 안적힌 경우 ... 에러메세지
        document.querySelector('.email_notice').textContent='이메일을 입력해주세요';
        emailValid = false;
      }else{
      //올바른 이메일 형식 ... 에러메세지 제거, 유효성 true
        document.querySelector('.email_notice').textContent='';
        emailValid = true;
      }
      console.log(pswValid)
    });


    // ** psw BLUR 에러 표시 **
    const pswInsertId = document.getElementById('psw_insertId'); //비밀번호 입력폼
    let pswValid = false; //비번 유효성

    pswInsertId.addEventListener('blur', function(event){
      const password = event.target.value;
      //비밀번호에 아무것도 안적혀있을 때 ... 에러메세지
      if( password.length > 0 && password.length < 8 ){
        document.querySelector('.psw_notice').textContent='비밀번호를 8자 이상 입력해주세요.';
        pswValid = false;
      }else if( password.length <1 ){
      //비밀번호가 적혔는데 8자 미만일 때 ... 에러메세지
        document.querySelector('.psw_notice').textContent='비밀번호를 입력해주세요.';
        pswValid = false;
      } else {
      //잘 적혀있을 때 ... 에러메세지 제거, 유효성 true
        document.querySelector('.psw_notice').textContent='';
        pswValid = true;
      }
      //이메일, 비밀번호 전부 return true일 때, 로그인 버튼 활성화
      if( emailValid && pswValid){
        document.querySelector('.login_btn').disabled = false;
        document.querySelector('.login_btn').style.backgroundColor = '#3692FF';
        document.querySelector('.login_btn').style.color = '#ffffff';
      }
    });

    // ** psw 보기, 아이콘 토글 **
    const pswView = document.querySelector('.psw_view');//패쓰워드 입력폼 아이콘
   
    pswView.addEventListener('click', function(){
      if( pswInsertId.type == 'password'){ //패스워드 표시면, 텍스트로 변경
        pswInsertId.type = 'text';
        pswView.firstElementChild.src = './images/psw_visible.png';
      }else{ //텍스트 표시면, 패스워드로 변경
        pswInsertId.type = 'password';
        pswView.firstElementChild.src = './images/psw_nonvisible.png';
      }
    });

    // ** 닉네임 BLUR 에러 표시 **
    const nicknameInsertId = document.getElementById('nickname_insertId'); //비밀번호 입력폼
    let nickNameValid = false; //닉네임 유효성

    nicknameInsertId.addEventListener('blur', function(event){
      const email = event.target.value;
      //닉네임을 안적은 경우 ... 에러메세지
      if( email.length < 1 ){
        document.querySelector('.nickname_notice').textContent='닉네임을 입력해주세요.';
        nickNameValid = false;
      }else{
      //올바른 이메일 형식 ... 에러메세지 제거, 유효성 true
        document.querySelector('.nickname_notice').textContent='';
        nickNameValid = true;
      }
    });

    // ** psw 확인 일치 **
    const psw_confirmId = document.getElementById('psw_confirmId'); //비밀번호 입력폼
    let pswConfirmValid = false; //비번 확인 유효성

    psw_confirmId.addEventListener('blur', function(event){
      if( pswInsertId.value !== event.target.value){
        document.querySelector('.psw_confim_notice').textContent='비밀번호가 일치하지 않습니다.';
        pswConfirmValid = trfalseue;
      }else{
        document.querySelector('.psw_confim_notice').textContent='';
        pswConfirmValid = true;
      }
      //이메일, 닉네임, 비밀번호 전부 return true일 때, 로그인 버튼 활성화
      if( emailValid && pswValid && pswConfirmValid && nickNameValid){
        document.querySelector('.signIn_btn').disabled = false;
        document.querySelector('.signIn_btn').style.backgroundColor = '#3692FF';
        document.querySelector('.signIn_btn').style.color = '#ffffff';
      }
    });
    


} // js end !!