const loginEail = document.getElementById("email");
const loginPw = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");

function color() {
    if(
        loginEail.value.length > 0 && 
        loginEail.value.indexOf("@") !== -1 && 
        loginPw.value.length >=8
    ) {
        loginBtn.style.backgroundColor = "#3692ff";
        loginBtn.style.cursor = "pointer";
        loginBtn.style.disabled = false;
    } else {
        loginBtn.style.backgroundColor = "#9ca3af";
        loginBtn.disabled = true;
    }
}

loginEail.addEventListener("keyup", color);
loginPw.addEventListener("keyup", color);