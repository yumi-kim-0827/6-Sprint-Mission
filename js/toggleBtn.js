const pwdBtnElement = document.getElementById('password-btn');

/**
 * 비밀번호를 보여주는 버튼에 아이콘 변경 클래스 추가
 *
 * @param {Object} event
 */
function toggleBtnClassName(event) {
  event.target.classList.toggle('visibility');
}

pwdBtnElement.addEventListener('click', toggleBtnClassName);