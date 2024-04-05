// const email = document.querySelector('#email')
// const password = document.querySelector("#password")
// const button = document.querySelector(".button")


// function a함수(){
//   if(eamil == false){
//     console.log('이메일을 입력해주세요')
//   }else{
//     if(email !== 이메일형식){
//       console.log("잘못된 이메일 형식입니다.")
//     }
//   }
// }
// function b함수(){
//   if(password == false){
//     console.log('비밀번호를 입력하세요')
//   }else{
//     if(password <= 8){
//       console.log("비밀번호를 8글자 이상 입력하세요")
//   }
//   }
// }
// function c함수(){
//   if(a함수 === false){
//     if(b함수 === false){
//       버튼 활성화
//     }
//   }
// }
// email.addEventListener("focusout", 'a함수')
// password.addEventListener("focusout", 'b함수')
// button.addEventListener("click", 'c함수')

      // JavaScript 코드 시작
      document.addEventListener("DOMContentLoaded", function() {
        // 페이지가 로드되면 실행될 함수

        // 이메일 입력란 요소를 가져옵니다.
        var emailInput = document.getElementById("email");

        // 이메일 입력란 아래에 힌트 메시지를 추가합니다.
        var hintMessage = document.createElement("div");
        hintMessage.textContent = "이메일을 입력하세요";
        hintMessage.className = "input-hint";
        emailInput.parentNode.insertBefore(hintMessage, emailInput.nextSibling);

        // 이메일 입력란에 입력 이벤트를 추가합니다.
        emailInput.addEventListener("input", function() {
          // 입력된 이메일 값을 가져옵니다.
          var emailValue = emailInput.value.trim();

          // 이메일 값이 있는 경우 힌트 메시지를 숨깁니다.
          if (emailValue !== "") {
            hintMessage.style.display = "none";
          } else {
            // 이메일 값이 없는 경우 힌트 메시지를 다시 표시합니다.
            hintMessage.style.display = "block";
          }

          // 이메일 형식을 확인합니다.
          var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          if (!emailPattern.test(emailValue) && emailValue !== "") {
            // 이메일 형식이 아닌 경우 에러 메시지를 표시합니다.
            document.getElementById("error-message").style.display = "block";
          } else {
            // 이메일 형식이 올바른 경우 에러 메시지를 숨깁니다.
            document.getElementById("error-message").style.display = "none";
          }
        });
      });