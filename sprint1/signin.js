import * as authJS from './auth.js';

// 이메일 이벤트
authJS.email.addEventListener('focusout', authJS.emailCheck);
authJS.email.addEventListener('focusin', authJS.resetInput);

// 비밀번호 이벤트
authJS.password.addEventListener('focusout', authJS.passwordCheck);
authJS.password.addEventListener('focusin', authJS.resetInput);
