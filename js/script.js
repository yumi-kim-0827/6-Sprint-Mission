window.onload = function(){ // js start !!

    // ** 이메일 BLUR 에러 표시 **

    const email_insertId = document.getElementById('email_insertId'); //이메일입력폼
    const email_pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/; //이메일 유효성
    
    //이메일 포커스아웃할 때,
    email_insertId.addEventListener('blur', function(event){
      //이메일 형식이 맞지 않는 경우 > 에러메세지
      if( event.target.value.length > 0 && !email_pattern.test(event.target.value)){
        document.querySelector('.email_notice').textContent='잘못된 이메일 형식입니다.';
      //아무것도 안적힌 경우 > 에러메세지
      }else if( event.target.value.length < 1 ){ 
        document.querySelector('.email_notice').textContent='이메일을 입력해주세요';
      }else{
        document.querySelector('.email_notice').textContent='';
      }
    })


  } // js end !!