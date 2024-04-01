// 비밀번호 확인 버튼
const signInHideBtn = document.getElementById('signup-hide-btn');

const show = () => {
  document.getElementById('user-password').setAttribute('type', 'text');
  document.querySelector('.off').style.display = 'none';
  document.querySelector('.on').style.display = 'inline-block';
};

const hide = () => {
  document.getElementById('user-password').setAttribute('type', 'password');
  document.querySelector('.off').style.display = 'inline-block';
  document.querySelector('.on').style.display = 'none';
};

signInHideBtn.addEventListener('mousedown', show);
signInHideBtn.addEventListener('mouseup', hide);

// 비밀번호 재확인 버튼
const reConFirmBtn = document.getElementById('signup-reconfirm-btn');

const reConFirmShow = () => {
  document.getElementById('user-password-reconfirm').setAttribute('type', 'text');
  document.querySelector('.reconfi-off').style.display = 'none';
  document.querySelector('.reconfi-on').style.display = 'inline-block';
};

const reConFirmHide = () => {
  document.getElementById('user-password-reconfirm').setAttribute('type', 'password');
  document.querySelector('.reconfi-off').style.display = 'inline-block';
  document.querySelector('.reconfi-on').style.display = 'none';
};

reConFirmBtn.addEventListener('mousedown', reConFirmShow);
reConFirmBtn.addEventListener('mouseup', reConFirmHide);
