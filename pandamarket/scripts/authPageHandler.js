function togglePasswordVisibility(event) {
  const eyeIconParent = event.target.parentNode;
  const passwordInput = eyeIconParent.previousElementSibling;
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeIconParent.innerHTML = '<img src="./images/open_eye.png" alt="비밀번호 보이기">';
  } else {
    passwordInput.type = 'password';
    eyeIconParent.innerHTML = '<img src="./images/close_eye.png" alt="비밀번호 숨기기">';
  }
}

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 
  return regex.test(email);
}

function validatePassword(password) {
  if (password.length < 8) {
    return false;
  }
  return true;
}

function validatePasswordVerify(password, passwordVerify) {
  if (password === passwordVerify && password !== '') {
    return true;
  }
  return false;
}

function addErrorMessage(errorMessage, targetParentElement) {
  const hasClassName = targetParentElement.querySelector('.errorMessage') != null;
  if (!hasClassName) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('errorMessage');
    newDiv.textContent = `${errorMessage}`;
    targetParentElement.appendChild(newDiv);
  } else {
    removeErrorMessage(targetParentElement);
    addErrorMessage(errorMessage, targetParentElement);
  }
}

function removeErrorMessage(targetParentElement) {
  const hasClassName = targetParentElement.querySelector('.errorMessage');
  if (hasClassName) {
    hasClassName.remove();
  }
}

// focusout 발생후 모든 input조사,확인 후 버튼 색상 변경, 제출가능 불가능 리턴
function formCheck() {
    let isFormValid = true;
    const submitBtn = document.querySelector('.submit-button');
    const inputs = document.querySelectorAll('input');
    const password = document.getElementById('password');
    for(const input of inputs) {
      switch(input.id) {
        case 'email':
          isFormValid = validateEmail(input.value);
          break;
        case 'password':
          isFormValid = validatePassword(input.value);
          break;
        case 'nickname':
          if (input.value === '') {
            isFormValid = false;
          } else {
            isFormValid = true;
          }
          break;
        case 'password-verify':
          isFormValid = validatePasswordVerify(password.value, input.value);
          break;
      }
      if (isFormValid === false) {
        break;
      }
    };
    if (isFormValid) {
      console.log('활성');
      submitBtn.style.backgroundColor = "#3691ff";
      return true;
    } else {
      submitBtn.style.backgroundColor = "#9ca3af";
      return false;
    }
}

function inputErrorStyle(event) {
  event.target.style.outline = "2px solid #f74747";
}

function inputSuccessStyle(event) {
  event.target.style.outline = 0;
}

function inputFocusInStyle(event) {
  event.target.style.outline = "2px solid #3692ff";
}

export { togglePasswordVisibility, inputErrorStyle, inputSuccessStyle, inputFocusInStyle, validateEmail, addErrorMessage, removeErrorMessage, validatePassword, formCheck, validatePasswordVerify}
