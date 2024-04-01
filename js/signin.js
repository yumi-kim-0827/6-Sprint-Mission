const signInHideBtn = document.getElementById('signin-hide-btn');
const passwordInput = document.getElementById('user-password');

const show = () => {
  passwordInput.setAttribute('type', 'text');
  document.querySelector('.on').style.display = 'inline-block';
  document.querySelector('.off').style.display = 'none';
};

const hide = () => {
  passwordInput.setAttribute('type', 'password');
  document.querySelector('.on').style.display = 'none';
  document.querySelector('.off').style.display = 'inline-block';
};

signInHideBtn.addEventListener('mousedown', show);
signInHideBtn.addEventListener('mouseup', hide);
