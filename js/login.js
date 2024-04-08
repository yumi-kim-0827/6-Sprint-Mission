import * as authJS from './auth.js';


authJS.inputEmail.addEventListener('focusout', authJS.showEmailErrorMessage);
authJS.inputEmail.addEventListener('focusin', authJS.removeErrorMessage);
authJS.inputEmail.addEventListener('focusout', authJS.activateLogInButton);

authJS.inputPassword.addEventListener('focusout', authJS.showPasswordErrorMessage);
authJS.inputPassword.addEventListener('focusin', authJS.removeErrorMessage);
authJS.inputPassword.addEventListener('focusout', authJS.activateLogInButton);

authJS.invisibleButton[0].addEventListener('click', authJS.togglePasswordVisibility);