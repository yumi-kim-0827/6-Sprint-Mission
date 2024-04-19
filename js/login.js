document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".login__form");
  const emailInput = loginForm.querySelector("#login__input-email");

  // 에러 상태 표시 여부 저장 변수
  let emailErrorDisplayed = false;

  // 이벤트 리스너 추가
  emailInput.addEventListener("focusout", validateEmail);
  emailInput.addEventListener("focus", clearEmailError);

  // 유효성 검사 함수
  function validateEmail() {
    const email = emailInput.value.trim();

    if (email === "") {
      showError(emailInput, "이메일을 입력해주세요");
      emailErrorDisplayed = true;
    } else if (!validateEmailFormat(email)) {
      showError(emailInput, "잘못된 이메일 형식입니다");
      emailErrorDisplayed = true;
    } else {
      clearError(emailInput);
      emailErrorDisplayed = false;
    }
  }

  // 유틸리티 함수
  function validateEmailFormat(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  function showError(input, message) {
    if (!input.classList.contains("error")) {
      input.classList.add("error");
      const errorDiv = document.createElement("div");
      errorDiv.textContent = message;
      errorDiv.className = "error-message";
      input.parentNode.appendChild(errorDiv);
    }
  }

  function clearError(input) {
    input.classList.remove("error");
    const errorMessages = input.parentNode.querySelectorAll(".error-message");
    errorMessages.forEach(function (errorMessage) {
      errorMessage.remove();
    });
  }

  function clearEmailError() {
    if (emailErrorDisplayed) {
      clearError(emailInput);
      emailErrorDisplayed = false;
    }
  }
});
