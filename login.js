const loginBtn = document.getElementById('login-button');
const eyeIcons = document.querySelectorAll(".visibility_off");
const form = document.getElementById('Form');
const emailField = document.querySelector(".email-field");
const emailInput = document.getElementById("email");
const passInput = document.getElementById('password');
const passField = document.querySelector(".create-password");

eyeIcons.forEach(eyeIcon => {
  eyeIcon.addEventListener("click", () => {
    const pInput = eyeIcon.parentElement.querySelector("input");

    if (pInput.type === "password") {
      pInput.type = "text"; 
      eyeIcon.src = "image/visibility_on_btn.png";
    } else {
      pInput.type = "password"; 
      eyeIcon.src = "image/visibility_off_btn.png";
    }
  });
});

function checkEmail() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!emailInput.value.match(emailPattern)) {
    emailField.classList.add("invalid");
    emailInput.style.borderColor = "#F74747";
  } else {
    emailField.classList.remove("invalid");
    emailInput.style.borderColor = "";
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

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkEmail();
  createPass();
});

function movePage() {
  checkEmail();
  createPass();

  if (emailField.classList.contains('invalid') || passInput.classList.contains('invalid')) {
    return;
  }
  
  location.replace("items.html");
}

emailInput.addEventListener("keyup", checkEmail);
passInput.addEventListener("keyup", createPass);
loginBtn.addEventListener('click', movePage);
