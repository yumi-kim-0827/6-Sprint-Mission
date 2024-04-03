const email = document.querySelector("#email");
const password = document.querySelector("#password");
const inputUnderMessage = document.createElement("p");
inputUnderMessage.className = "inputUnderMessage";

// 이메일 형식 유효성 체크
function emailCheck(email_address) {
  email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  if (!email_regex.test(email_address)) {
    return false;
  } else {
    return true;
  }
}

function checkEmail(event) {
  const inputTarget = event.target;
  if (!emailCheck(inputTarget.value)) {
    // 이메일 형식에 맞지 않는 경우
    inputUnderMessage.textContent = "잘못된 이메일 형식입니다";
    inputTarget.style.margin = 0;
    inputTarget.style.outline = "2px solid #f74747";
    inputTarget.after(inputUnderMessage);
  } else {
    // 이메일 형식을 지킨 경우
    inputUnderMessage.remove();
    inputTarget.style.marginBottom = "24px";
    inputTarget.style.outline = "2px solid #3182f6";
  }
}

function deleteOutLine(event) {
  const inputTarget = event.target;
  if (!inputTarget.value) {
    inputUnderMessage.textContent = "이메일을 입력해주세요.";
    inputTarget.style.margin = 0;
    inputTarget.style.outline = "2px solid #f74747";
    inputTarget.after(inputUnderMessage);
  } else if (emailCheck(inputTarget.value)) {
    inputTarget.style.outline = "none";
  }
}

email.addEventListener("input", checkEmail);
email.addEventListener("focusout", deleteOutLine);

function checkPassword(event) {
  const inputTarget = event.target;
}

password.addEventListener("input", checkPassword);
