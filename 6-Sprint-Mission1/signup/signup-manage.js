document.addEventListener("DOMContentLoaded", function () {
  const nickNameInput = document.getElementById("input-nickname");

  nickNameInput.addEventListener("focusout", function () {
    const nickname = nickNameInput.value.trim();
    const nicknameError = document.getElementById("nickname-error");
    nicknameError.textContent = "";

    if (nickname === "") {
      nicknameError.textContent = "닉네임을 입력해주세요.";
      nickNameInput.classList.add("error");
    } else {
      nickNameInput.classList.remove("error");
    }
  });

  const passwordCheckInput = document.querySelector(".password.check");

  passwordCheckInput.addEventListener("focusout", function () {
    const passwordCheck = passwordCheckInput.value.trim();
    const passwordInput = document.querySelector(".password");
    const passwordCheckError = document.getElementById("password-check-error");
    passwordCheckError.textContent = "";

    if (passwordCheck !== passwordInput.value.trim()) {
      passwordCheckError.textContent = "비밀번호가 일치하지 않습니다.";
      passwordCheckInput.classList.add("error");
    } else {
      passwordCheckInput.classList.remove("error");
    }
  });
});
