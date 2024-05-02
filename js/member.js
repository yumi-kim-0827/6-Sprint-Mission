// *** 로그인 ***
const emailInput = document.querySelector("#email");
const emailError = document.querySelector(".email_error");
const passwordInput = document.querySelector("#password");
const passwordError = document.querySelector(".password_error");
const loginBtn = document.querySelector("#login_btn");
const passwordIcons = document.getElementsByClassName("password_icon");

const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

// 이메일
emailInput.addEventListener("focusout", () => {
  if (emailInput.value === "" || !pattern.test(emailInput.value)) {
    emailInput.classList.add("error");
    if (emailInput.value === "") {
      emailError.innerText = "이메일을 입력해주세요.";
    } else if (pattern.test(emailInput.value) === false) {
      emailError.innerText = "잘못된 이메일 형식입니다.";
    }
    emailError.style.display = "block";
  }
});
emailInput.addEventListener("focusin", () => {
  emailInput.classList.remove("error");
  emailError.innerText = "";
  emailError.style.display = "none";
});

// 패스워드
passwordInput.addEventListener("focusout", () => {
  if (passwordInput.value === "" || passwordInput.value.length < 8) {
    passwordInput.classList.add("error");
    if (passwordInput.value === "") {
      passwordError.innerText = "비밀번호를 입력해주세요.";
    } else if (passwordInput.value.length < 8) {
      passwordError.innerText = "비밀번호를 8자 이상 입력해주세요.";
    }
    passwordError.style.display = "block";
  }
});
passwordInput.addEventListener("focusin", () => {
  passwordInput.classList.remove("error");
  passwordError.innerText = "";
  passwordError.style.display = "none";
});

// 눈 모양 아이콘 클릭시
for (let i = 0; i < passwordIcons.length; i++) {
  const prevInput = passwordIcons[i].previousElementSibling;
  passwordIcons[i].addEventListener("click", () => {
    prevInput.type = "text";
    passwordIcons[i].innerHTML = '<img src="../image/pw_icon_on.png">';
  });
  passwordIcons[i].addEventListener("mouseout", () => {
    prevInput.type = "password";
    passwordIcons[i].innerHTML = '<img src="../image/pw_icon.png">';
  });
}

/*
const loginInputs = [emailInput, passwordInput];
const errorMsgs = [emailError, passwordError];

loginInputs.forEach((input) => {
  input.addEventListener('input', () => {
    errorMsgs.forEach((errorMsg) => {
      console.log(input);
      if(input.value === ''){
        loginBtn.disabled = true;
      }else {
        loginBtn.disabled = false;
      }
    });
  });
});
*/
