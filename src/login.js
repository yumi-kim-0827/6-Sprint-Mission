const email = document.querySelector("#email");
const emailMessage = document.createElement("p");
emailMessage.className = "inputUnderMessage";

// 이메일 형식 유효성 체크
function emailCheck(email_address) {
  email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  if (!email_regex.test(email_address)) {
    return false;
  } else {
    return true;
  }
}

email.addEventListener("focusout", function (event) {
  const inputTarget = event.target;
  if (!inputTarget.value) {
    emailMessage.textContent = "이메일을 입력해주세요";
    inputTarget.style.margin = 0;
    inputTarget.style.outline = "2px solid #f74747";
    inputTarget.after(emailMessage);
  } else if (!emailCheck(inputTarget.value)) {
    emailMessage.textContent = "잘못된 이메일 형식입니다";
    inputTarget.style.margin = 0;
    inputTarget.style.outline = "2px solid #f74747";
    inputTarget.after(emailMessage);
  }
});
