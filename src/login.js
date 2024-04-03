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

function deleteOutLine(event) {
  const inputTarget = event.target;
  if (emailCheck(inputTarget.value)) {
    inputTarget.style.outline = "none";
  }
}

function checkEmail(event) {
  const inputTarget = event.target;
  if (!emailCheck(inputTarget.value)) {
    // 이메일 형식에 맞지 않는 경우
    emailMessage.textContent = "잘못된 이메일 형식입니다";
    inputTarget.style.margin = 0;
    inputTarget.style.outline = "2px solid #f74747";
    inputTarget.after(emailMessage);
  } else {
    // 이메일 형식을 지킨 경우
    emailMessage.remove();
    inputTarget.style.marginBottom = "24px";
    inputTarget.style.outline = "2px solid #3182f6";
  }
}

email.addEventListener("input", checkEmail);
email.addEventListener("focusout", deleteOutLine);
