const emailValText = () => {
  const email = document.getElementById("email");
  let valText = document.getElementById("emailValMessage");

  email.addEventListener("focusout", () => {
    if (email.value === "") {
      email.style.outline = "2px solid var(--error-red)";
      valText.style.display = "block";
    } else {
      email.style.outline = "none";
      valText.style.display = "none";
    }
  });
};

const nicknameValText = () => {
  const nickname = document.getElementById("nickname");
  let valText = document.getElementById("nicknameValMessage");

  nickname.addEventListener("focusout", () => {
    if (nickname.value === "") {
      nickname.style.outline = "2px solid var(--error-red)";
      valText.style.display = "block";
    } else {
      nickname.style.outline = "none";
      valText.style.display = "none";
    }
  });
};

const pwdValText = () => {
  const pwd = document.getElementById("pwd");
  let valText = document.getElementById("pwdValMessage");

  pwd.addEventListener("focusout", () => {
    if (pwd.value === "") {
      pwd.style.outline = "2px solid var(--error-red)";
      valText.style.display = "block";
    } else {
      pwd.style.outline = "none";
      valText.style.display = "none";
    }
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
    } else {
      pwdchk.style.outline = "none";
      valText.style.display = "none";
    }
  });
};

emailValText();
nicknameValText();
pwdValText();
pwdchkValText();
