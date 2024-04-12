document.addEventListener("DOMContentLoaded", function() {
    var passwordFields = document.querySelectorAll('.loginpw, .joinpw');
    var passwordToggles = document.querySelectorAll('.password-eye');
    
    passwordToggles.forEach(function(toggle, index) {
        toggle.addEventListener('click', function() {
            var passwordField = passwordFields[index];

            // 현재 입력란의 타입이 password이면 text로, text이면 password로 변경
            var type = (passwordField.getAttribute('type') === 'password') ? 'text' : 'password';
            passwordField.setAttribute('type', type);
        
            // 배경 이미지 변경
            if (type === 'password') {
                toggle.style.backgroundImage = "url('./img/ic-noeye.png')";
            } else {
                toggle.style.backgroundImage = "url('./img/ic-eye.png')";
            }
        });
    });
});