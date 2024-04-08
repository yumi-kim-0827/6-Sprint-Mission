import * as authJS from './auth.js';


authJS.inputEmail.addEventListener('focusout', authJS.showEmailErrorMessage);
authJS.inputEmail.addEventListener('focusin', authJS.removeErrorMessage);
authJS.inputEmail.addEventListener('focusout', authJS.activateSignUpButton);

authJS.inputNickname.addEventListener('focusout', authJS.showNicknameErrorMessage);
authJS.inputNickname.addEventListener('focusin', authJS.removeErrorMessage);
authJS.inputNickname.addEventListener('focusout', authJS.activateSignUpButton);

authJS.inputPassword.addEventListener('focusout', authJS.showPasswordErrorMessage);
authJS.inputPassword.addEventListener('focusin', authJS.removeErrorMessage);
authJS.inputPassword.addEventListener('focusout', authJS.activateSignUpButton);

authJS.inputPasswordConfirm.addEventListener('focusout', authJS.showConfirmPwErrorMessage);
authJS.inputPasswordConfirm.addEventListener('focusin', authJS.removeErrorMessage);
authJS.inputPasswordConfirm.addEventListener('focusout', authJS.activateSignUpButton);

authJS.invisibleButton[0].addEventListener('click', authJS.togglePasswordVisibility);
authJS.invisibleButton[1].addEventListener('click', authJS.togglePasswordVisibility);