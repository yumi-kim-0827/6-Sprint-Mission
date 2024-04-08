const email = document.getElementById('email');
const email_no_value = document.getElementById('email-no-value');
const email_invalid = document.getElementById('email-invalid');

const nickname = document.getElementById('nickname');
const nickname_no_value = document.getElementById('nickname-no-value');

const password = document.getElementById('password');
const password_no_value = document.getElementById('password-no-value');
const password_invalid = document.getElementById('password-invalid');

const password_confirmation = document.getElementById('password-confirmation');
const password_mismatch = document.getElementById('password-mismatch');

const submit_button = document.getElementById('submit-button');

let isValidEmail = false;
let isValidNickname = false;
let isValidPassword = false;
let isValidPasswordConfirmation = false;

const hideErrorMessage = (elem) => {
    if(!elem.classList.contains('disabled')) {
        elem.classList.add('disabled');
    }
}

const showErrorMessage = (elem) => {
    if(elem.classList.contains('disabled')) {
        elem.classList.remove('disabled');
    }
}

const emailFocusInHandler = (e) => {
    hideErrorMessage(email_no_value);
    hideErrorMessage(email_invalid);
}

const emailFocusOutHandler = (e) => {
    if(e.target.value.length === 0) {
        showErrorMessage(email_no_value);
        isValidEmail = false;
        return;
    }
    if(!e.target.checkValidity()) {
        showErrorMessage(email_invalid);
        isValidEmail = false;
        return;
    }
    isValidEmail = true;
    onChangeOfAllInputHandler(e);
}

email.addEventListener('focusin', emailFocusInHandler);
email.addEventListener('focusout', emailFocusOutHandler);

const nicknameFocusInHandler = (e) => {
    hideErrorMessage(nickname_no_value);
}

const nicknameFocusOutHandler = (e) => {
    if(e.target.value.length === 0) {
        showErrorMessage(nickname_no_value);
        isValidNickname = false;
        return;
    }
    isValidNickname = true;
    onChangeOfAllInputHandler(e);
}

nickname.addEventListener('focusin', nicknameFocusInHandler);
nickname.addEventListener('focusout', nicknameFocusOutHandler);

const passwordFocusInHandler = (e) => {
    hideErrorMessage(password_no_value);
    hideErrorMessage(password_invalid);
}

const passwordFocusOutHandler = (e) => {
    if(e.target.value.length === 0) {
        showErrorMessage(password_no_value);
        isValidPassword = false;
        return;
    } else if(e.target.value.length < 8) {
        showErrorMessage(password_invalid);
        isValidPassword = false;
        return;
    }
    isValidPassword = true;
    onChangeOfAllInputHandler(e);
}

password.addEventListener('focusin', passwordFocusInHandler);
password.addEventListener('focusout', passwordFocusOutHandler);

const passwordConfirmationFocusInHandler = (e) => {
    hideErrorMessage(password_mismatch);
}

const passwordConfirmationFocusOutHandler = (e) => {
    if(password.value !== password_confirmation.value) {
        showErrorMessage(password_mismatch);
        isValidPasswordConfirmation = false;
        return
    }
    isValidPasswordConfirmation = true;
    onChangeOfAllInputHandler(e);
}

password_confirmation.addEventListener('focusin', passwordConfirmationFocusInHandler);
password_confirmation.addEventListener('focusout', passwordConfirmationFocusOutHandler);

const onChangeOfAllInputHandler = (e) => {
    if(isValidEmail && isValidNickname && isValidPassword && isValidPasswordConfirmation) {
        if(submit_button.classList.contains('disabled')) {
            submit_button.classList.remove('disabled');
        }
        return;
    } else {
        if(!submit_button.classList.contains('disabled')) {
            submit_button.classList.add('disabled');
        }
        return;
    }
}