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

emailValText();
pwdValText();
