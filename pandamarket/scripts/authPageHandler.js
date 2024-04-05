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

function validatePasswordLength(password) {
  if (password.length < 8) {
    return false;
  }
  return true;
}

function addErrorMessage(errorMessage, targetParentElement) {
  const hasClassName = targetParentElement.querySelector('.errorMessage') != null;
  const errorInput = targetParentElement.querySelector('input');
  if (!hasClassName) {
    errorInput.classList.add('error');
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
  const errorInput = targetParentElement.querySelector('input');
  const hasClassName = targetParentElement.querySelector('.errorMessage');
  if (hasClassName) {
    errorInput.classList.remove('error');
    hasClassName.remove();
  }
}

function validateAuthForm(event, path) {
  event.preventDefault();
  // focusout 발생
  // const submitButton = document.querySelector('.submit-button');
  const focusout = new Event('focusout');
  const inputs = document.querySelectorAll('input');
  [...inputs].forEach((input) => input.dispatchEvent(focusout));
  // form 제출 전 확인
  const errorInputs = document.querySelectorAll('.error');
  if (errorInputs.length === 0) {
    window.location.href = `./${path}`;
    // const form = submitButton.closest('form');
    // form.submit();
  } else {
    console.log(errorInputs);
    errorInputs[0].focus();
  }
}
// 요구사항 충족 시 버튼 활성화
function formCheck() {
  const errorInputs = document.querySelectorAll('.error');
  const submitBtn = document.querySelector('.submit-button');
  if (errorInputs.length === 0) {
    submitBtn.style.backgroundColor = "#3691ff";
  } else {
    submitBtn.style.backgroundColor = "#9ca3af";
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

export { togglePasswordVisibility, inputErrorStyle, inputSuccessStyle, inputFocusInStyle, validateEmail, addErrorMessage, removeErrorMessage, validatePasswordLength, validateAuthForm, formCheck}
