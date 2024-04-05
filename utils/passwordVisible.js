const togglePasswordVisible = (passwordEl, iconEl) => {
  passwordEl.type = passwordEl.type === 'password' ? 'text' : 'password';
  iconEl.src =
    passwordEl.type === 'password'
      ? '/assets/icons/visibility_off.svg'
      : '/assets/icons/visibility_on.svg';
};

export default togglePasswordVisible;
