let emailVal = false;
let pwdVal = false;

const showPwd = () => {
  const pwd = document.getElementById("pwd");
  const showPwd = document.getElementById("pwdimg");

  if (pwd.type === "password") {
    pwd.type = "text";
    showPwd.src = "/images/btn_visibility_on.png";
  } else {
    pwd.type = "password";
    showPwd.src = "/images/btn_visibility.png";
  }
};

const validateForm = () => {
  const submitBtn = document.getElementById("submitBtn");

  if (emailVal && pwdVal) {
    submitBtn.style.backgroundColor = "var(--btn-blue1)";
  }
};

const emailValText = () => {
  const email = document.getElementById("email");
  let valText = document.getElementById("emailValMessage");

  email.addEventListener("focusout", () => {
    if (email.value === "" || !email.checkValidity()) {
      email.style.outline = "2px solid var(--error-red)";
      valText.style.display = "block";
      emailVal = false;
    } else {
      email.style.outline = "none";
      valText.style.display = "none";
      emailVal = true;
    }
    validateForm();
  });
};

const pwdValText = () => {
  const pwd = document.getElementById("pwd");
  let valText = document.getElementById("pwdValMessage");

  pwd.addEventListener("focusout", () => {
    if (pwd.value === "") {
      pwd.style.outline = "2px solid var(--error-red)";
      valText.style.display = "block";
      pwdVal = false;
    } else {
      pwd.style.outline = "none";
      valText.style.display = "none";
      pwdVal = true;
    }
    validateForm();
  });
};

emailValText();
pwdValText();
