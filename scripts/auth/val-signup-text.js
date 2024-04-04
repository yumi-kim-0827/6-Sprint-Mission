let emailVal = false;
let nicknameVal = false;
let pwdVal = false;
let pwdchkVal = false;

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

const showPwdchk = () => {
  const pwdchk = document.getElementById("pwdchk");
  const showPwdchk = document.getElementById("pwdchkimg");

  if (pwdchk.type === "password") {
    pwdchk.type = "text";
    showPwdchk.src = "/images/btn_visibility_on.png";
  } else {
    pwdchk.type = "password";
    showPwdchk.src = "/images/btn_visibility.png";
  }
};

const validateForm = () => {
  const submitBtn = document.getElementById("submitBtn");

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
    if (pwd.value.length < 8) {
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
