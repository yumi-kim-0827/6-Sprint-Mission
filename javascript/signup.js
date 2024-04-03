/*입력필드, 에러메세지 가져옴*/
const emailInput = document.getElementById("emailInput");
const emailError = document.getElementById("emailError");
const nicknameInput = document.getElementById("nickname");
const nicknameError = document.getElementById("nicknameError");
const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("passwordError");
const passwordCheckInput = document.getElementById("passwordCheck");
const passwordCheckError = document.getElementById("passwordCheckError");
const signUpButton = document.getElementById('signupButton');

//포커스 아웃 됐을때 이벤트가 발생하도록 처리
emailInput.addEventListener("blur", validateEmail);
nicknameInput.addEventListener("blur", validateNickname);
passwordInput.addEventListener("blur", validatePassword);
passwordCheckInput.addEventListener("blur", validatePasswordCheck);

/*이메일 설정 */
function validateEmail() {
  const email = emailInput.value.trim();

  if (!email) {
    displayEmailError("이메일을 입력해주세요.");
    return false;
  } else if (!email.includes("@") || !email.includes(".")) {
    displayEmailError("잘못된 이메일 형식입니다.");
    return false;
  } else {
    clearEmailError();
    return true;
  }
}

function displayEmailError(message) {
  emailInput.classList.add("error");
  emailError.textContent = message;
  emailError.style.display = "block";
}

function clearEmailError() {
  emailInput.classList.remove("error");
  emailError.textContent = "";
  emailError.style.display = "none";
}
/*닉네임 설정*/
function validateNickname() {
  const nickname = nicknameInput.value.trim();

  if (!nickname) {
    nicknameInput.classList.add("error");
    nicknameError.textContent = "닉네임을 입력해주세요.";
    nicknameError.style.display = "block";
    return false;
  } else {
    nicknameInput.classList.remove("error");
    nicknameError.textContent = "";
    nicknameError.style.display = "none";
    return true;
  }
}
/*비밀번호 설정 */

function validatePassword() {
  const password = passwordInput.value.trim();

  if (!password) {
    displayPasswordError("비밀번호를 입력해주세요.");
    return false;
  } else if (password.length < 8) {
    displayPasswordError("비밀번호를 8자 이상 입력해주세요.");
    return false;
  } else {
    clearPasswordError();
    return true;
  }
}

function displayPasswordError(message) {
  passwordInput.classList.add("error");
  passwordError.textContent = message;
  passwordError.style.display = "block";
}

function clearPasswordError() {
  passwordInput.classList.remove("error");
  passwordError.textContent = "";
  passwordError.style.display = "none";
}
/*비밀번호 확인 설정 */

function validatePasswordCheck() {
  const passwordCheck = passwordCheckInput.value.trim();
  const password = passwordInput.value.trim();

  if (passwordCheck !== password) {
    passwordCheckInput.classList.add("error");
    passwordCheckError.textContent = "비밀번호가 일치하지 않습니다.";
    passwordCheckError.style.display = "block";
    return false;
  } else {
    passwordCheckInput.classList.remove("error");
    passwordCheckError.textContent = "";
    passwordCheckError.style.display = "none";
    return true;
  }
}


function manageButtonState() {
    if (isSignUpButtonEnabled()) {
        signUpButton.classList.remove('disabled');
    } else {
        signUpButton.classList.add('disabled');
    }
}

// 회원가입 버튼의 활성화 상태를 확인하는 함수
function isSignUpButtonEnabled() {
    // 여기에 버튼의 활성화 상태를 확인하는 로직을 추가하세요.
    // 예를 들어, 모든 필드에 유효한 값이 입력되었는지 여부를 확인할 수 있습니다.
    // 위에서 구현한 validateEmail(), validateNickname(), validatePassword(), validatePasswordCheck() 함수 등을 사용하세요.
    const isEmailValid = validateEmail();
    const isNicknameValid = validateNickname();
    const isPasswordValid = validatePassword();
    const isPasswordCheckValid = validatePasswordCheck();

    return isEmailValid && isNicknameValid && isPasswordValid && isPasswordCheckValid;
}

// 회원가입 버튼의 활성화 상태를 관리하는 함수를 실행합니다.
manageButtonState();

