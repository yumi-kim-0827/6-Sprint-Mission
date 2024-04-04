let emailVal = false;
let nicknameVal = false;
let pwdVal = false;
let pwdchkVal = false;

const validateForm = () => {
  const submitBtn = document.getElementById("submitBtn");

  console.log(emailVal, nicknameVal, pwdVal, pwdchkVal);

  if (emailVal && nicknameVal && pwdVal && pwdchkVal) {
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

const nicknameValText = () => {
  const nickname = document.getElementById("nickname");
  let valText = document.getElementById("nicknameValMessage");

  nickname.addEventListener("focusout", () => {
    if (nickname.value === "") {
      nickname.style.outline = "2px solid var(--error-red)";
      valText.style.display = "block";
      nicknameVal = false;
    } else {
      nickname.style.outline = "none";
      valText.style.display = "none";
      nicknameVal = true;
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

const pwdchkValText = () => {
  const pwd = document.getElementById("pwd");
  const pwdchk = document.getElementById("pwdchk");
  let valText = document.getElementById("pwdchkValMessage");

  pwdchk.addEventListener("focusout", () => {
    if (pwdchk.value !== pwd.value) {
      pwdchk.style.outline = "2px solid var(--error-red)";
      valText.style.display = "block";
      pwdchkVal = false;
    } else {
      pwdchk.style.outline = "none";
      valText.style.display = "none";
      pwdchkVal = true;
    }
    validateForm();
  });
};

emailValText();
nicknameValText();
pwdValText();
pwdchkValText();
