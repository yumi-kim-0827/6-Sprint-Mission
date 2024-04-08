const loginEail = document.getElementById("email");
const loginPw = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");

function colorize() {
    const isEmailValid = loginEmail.value.length > 0 && loginEmail.value.indexOf("@") !== -1;
    const isPwValid = loginPw.value.length >= 8;
    if(isEmailVaild && isPwValid) {
        loginBtn.style.backgroundColor = "#3692ff";
        loginBtn.style.cursor = "pointer";
        loginBtn.style.disabled = false;
    } else {
        loginBtn.style.backgroundColor = "#9ca3af";
        loginBtn.disabled = true;
    }
}

loginEail.addEventListener("keyup", colorize);
loginPw.addEventListener("keyup", colorize);