import * as authJS from './auth.js';


authJS.inputEmail.addEventListener('focusout', authJS.emailErrorMessage);
authJS.inputEmail.addEventListener('focusin', authJS.whenFocusIn);
authJS.inputEmail.addEventListener('focusout', authJS.activateSignUpButton);

authJS.inputNickname.addEventListener('focusout', authJS.nicknameErrorMessage);
authJS.inputNickname.addEventListener('focusin', authJS.whenFocusIn);
authJS.inputNickname.addEventListener('focusout', authJS.activateSignUpButton);

authJS.inputPassword.addEventListener('focusout', authJS.passwordErrorMessage);
authJS.inputPassword.addEventListener('focusin', authJS.whenFocusIn);
authJS.inputPassword.addEventListener('focusout', authJS.activateSignUpButton);

authJS.inputPasswordConfirm.addEventListener('focusout', authJS.confirmPwErrorMessage);
authJS.inputPasswordConfirm.addEventListener('focusin', authJS.whenFocusIn);
authJS.inputPasswordConfirm.addEventListener('focusout', authJS.activateSignUpButton);

authJS.invisibleButton[0].addEventListener('click', authJS.buttonVisibleOrNot);
authJS.invisibleButton[1].addEventListener('click', authJS.buttonVisibleOrNot);