let flag = false;
export function toggleSwitch() {
  const eyeIcon = document.getElementById("eyeIcon");
  const passwordLabel = document.getElementsByClassName("passwordBar");
  flag = !flag;
  if (flag) {
    eyeIcon.src = "/icon/openPassword.png";
    return (passwordLabel[0].type = "text");
  }
  eyeIcon.src = "/icon/hidePassword.png";
  return (passwordLabel[0].type = "password");
}

export function toggleSwitchSignup(name = String,className) {
  const eyeIcon = document.getElementById(name);
  const passwordLabel = document.getElementsByClassName(className);
  flag = !flag;
  if (flag) {
    eyeIcon.src = "/icon/openPassword.png";
    return (passwordLabel[0].type = "text");
  }
  eyeIcon.src = "/icon/hidePassword.png";
  return (passwordLabel[0].type = "password");
}

