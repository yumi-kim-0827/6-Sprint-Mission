window.onload = function(){

const psw_icon = document.querySelector('.psw_input .psw_view');
const psw_insert = document.querySelector('.psw_insert');

const psw_confirm_icon = document.querySelector('.psw_confirm_input .psw_view');
const psw_confirm = document.querySelector('.psw_confirm');

  // 비밀번호 보기 토글
  psw_icon.addEventListener('click', function() {
    if(psw_insert.type == 'password'){
      psw_insert.type = 'text';
    }else{
      psw_insert.type = 'password';
    }
  });
  // 비밀번호 확인 보기 토글
  psw_confirm_icon.addEventListener('click', function() {
    if(psw_confirm.type == 'password'){
      psw_confirm.type = 'text';
    }else{
      psw_confirm.type = 'password';
    }
  });

  
  
}