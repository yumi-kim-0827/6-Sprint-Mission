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

function generateErrorMessage(errorMessage, targetElement) {
  const hasClassName = targetElement.querySelector('.errorMessage') != null;

  if (!hasClassName) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('errorMessage');
    newDiv.textContent = `${errorMessage}`;
    newDiv.style.margin = "0px 16px 24px";
    newDiv.style.color = "#f74747";
    newDiv.style.fontSize = "15px";
    newDiv.style.fontWeight = "600";
    targetElement.appendChild(newDiv);
  } else {
    removeErrorMessage(targetElement);
    generateErrorMessage(errorMessage, targetElement);
  }
}

function removeErrorMessage(targetElement) {
  const hasClassName = targetElement.querySelector('.errorMessage');
  if (hasClassName) {
    hasClassName.remove();
  }
}

function validateAuthForm(event, path) {
  //focusout발생
  event.preventDefault();
  const submitButton = document.querySelector('.submit-button');
  const focusout = new Event('focusout');
  const inputs = document.getElementsByTagName('input');
  [...inputs].forEach((input) => input.dispatchEvent(focusout));
  // form 제출 전 확인
  const errorMessage = document.querySelectorAll('.errorMessage');
  if (errorMessage.length === 0) {
    const form = submitButton.closest('form');
    window.location.href = `./${path}`;
    // form.submit();
  }
}

function inputErrorStyle(event) {
  event.target.style.outline = "2px solid #f74747";
};

function inputSuccessStyle(event) {
  event.target.style.outline = 0;
};

function inputFocusInStyle(event) {
  event.target.style.outline = "2px solid #3692ff";
}

export { togglePasswordVisibility, inputErrorStyle, inputSuccessStyle, inputFocusInStyle, validateEmail,generateErrorMessage, removeErrorMessage, validatePasswordLength, validateAuthForm};
