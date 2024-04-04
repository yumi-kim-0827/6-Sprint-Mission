import * as authJS from './auth.js';


authJS.inputEmail.addEventListener('focusout', authJS.emailErrorMessage);
authJS.inputEmail.addEventListener('focusin', authJS.whenFocusIn);
authJS.inputEmail.addEventListener('focusout', authJS.activateLogInButton);

authJS.inputPassword.addEventListener('focusout', authJS.passwordErrorMessage);
authJS.inputPassword.addEventListener('focusin', authJS.whenFocusIn);
authJS.inputPassword.addEventListener('focusout', authJS.activateLogInButton);

authJS.invisibleButton[0].addEventListener('click', authJS.buttonVisibleOrNot);