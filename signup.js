const signupBtn = document.getElementById('signup-button');
const form = document.getElementById('Form'); 
const emailField = document.querySelector(".email-field");
const emailInput = document.querySelector(".email");
const passInput = document.getElementById('password');
const eyeIcons = document.querySelectorAll(".visibility_off"); 
const passField = document.querySelector(".create-password");
const cPassInput = document.getElementById('password-repeat');
const confirmError = document.querySelector(".confirm-error");

eyeIcons.forEach(eyeIcon => {
  eyeIcon.addEventListener("click", () => {
    const passwordInput = eyeIcon.parentElement.querySelector("input");

    if (passwordInput.type === "password") {
      passwordInput.type = "text"; 
      eyeIcon.src = "image/visibility_on_btn.png";
    } else {
      passwordInput.type = "password"; 
      eyeIcon.src = "image/visibility_off_btn.png"; 
    }
  });
});

function checkEmail() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!emailInput.value.match(emailPattern)) {
    emailField.classList.add("invalid"); 
    emailField.querySelector(".email-error").style.display = "block";
  } else {
    emailField.classList.remove("invalid"); 
    emailField.querySelector(".email-error").style.display = "none";
  }
}

function createPass() {
  const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!passInput.value.match(passPattern) || passInput.value.length < 8) {
    passInput.classList.add("invalid");
    passField.querySelector(".password-error").style.display = "block";
  } else {
    passInput.classList.remove("invalid");
    passField.querySelector(".password-error").style.display = "none";
  }
}

function checkPasswordMatch() {
  const passValue = passInput.value;

  if (passValue !== cPassInput.value) {
    cPassInput.classList.add("invalid");
    confirmError.style.display = "block";
  } else {
    cPassInput.classList.remove("invalid");
    confirmError.style.display = "none";
  }
}

form.addEventListener("submit", function(e) {
  e.preventDefault();
  checkEmail(); 
  createPass();
  checkPasswordMatch();
});

function movePage() {
  checkEmail();
  createPass();

  if (emailField.classList.contains('invalid') || passInput.classList.contains('invalid')) {
    return;
  }

  location.replace("login.html");
}

signupBtn.addEventListener('click', movePage);
emailInput.addEventListener("keyup", checkEmail);
passInput.addEventListener("keyup", createPass);
cPassInput.addEventListener("keyup", checkPasswordMatch); 