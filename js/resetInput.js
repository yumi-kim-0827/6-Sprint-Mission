const emailMessageElement = document.getElementById('email-input-message');
const emailInputElement = document.getElementById('email');

/**
 * input 태그에 focusin 된 경우 원상태로 돌리는 함수
 * 
 * @param {Object} event 
 */
function resetInputMessage(event) {
  event.target.style.border = 'initial';
  emailMessageElement.classList.remove('message-on');
}

emailInputElement.addEventListener('focusin', resetInputMessage);