import {toggleSwitch} from "./switch.js";
//클로저로  변수 함수에 저장이 된다.
const toggle = document.getElementById("eyeIcon");
toggle.addEventListener("click",toggleSwitch)
