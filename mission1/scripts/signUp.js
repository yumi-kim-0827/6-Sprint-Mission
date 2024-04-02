import { toggleSwitchSignup } from "./switch.js";
const eyeIcon = document.getElementById("eyeIcon");
const passIcon = document.getElementById("passIcon");
eyeIcon.addEventListener("click", () =>
  toggleSwitchSignup(eyeIcon, "passwordBar")
);
passIcon.addEventListener("click", () =>
  toggleSwitchSignup(passIcon, "passwordBar2")
);

