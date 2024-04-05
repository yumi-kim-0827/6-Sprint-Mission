
document.querySelectorAll("input[data-form]").forEach((form) => {
  form.addEventListener("input", checkForm);
})

document.querySelectorAll(".chk-visibility").forEach((chk) => {
  chk.addEventListener("change", toggleVisibility);
})

function checkForm(e){
  const inputWrap = e.target.closest(".section-form__input-box");

  e.target.classList.remove("on");
  inputWrap.querySelectorAll(".alert").forEach((alert)=>{
    alert.remove();
  });
  
  const alert = document.createElement("strong");
  alert.classList.add("alert");
  alert.setAttribute("aria-live", "assertive");

  let content = "";
  let isInvalid = false;
  let isNull = false;

  switch(e.target.dataset.form){
    case "email" : 
      if(e.target.value === "") {
        isNull = true;
        content = "이메일을 입력해주세요.";
      }
      else {
        isNull = false;
        if(!e.target.checkValidity()){
          isInvalid = true;
          content = "잘못된 이메일 형식입니다.";
        }
        else {
          isInvalid = false;
        }
      }
      break;
    case "password" : 
      if(e.target.value === "") {
        isNull = true;
        content = "비밀번호를 입력해주세요.";
      }
      else {
        isNull = false;
        if(e.target.value.length < 8) {
          isInvalid = true;
          content = "비밀번호를 8자 이상 입력해주세요."
        }
        else {
          isInvalid = false;
        }
      }
      break;
    case "password-re" : 
      if(e.target.value === "") {
        isNull = true;
        content = "비밀번호를 입력해주세요.";
      }
      else {
        isNull = false;
        if (document.querySelector("#join-pw").value !== document.querySelector("#join-pw-re").value) {
          isInvalid = true;
          content = "비밀번호가 일치하지 않습니다.";
        }
        else {
          isInvalid = false;
        }
      }
      break;
    case "nickname" : 
      if(e.target.value === "") {
        isNull = true;
        content = "닉네임을 입력해주세요.";
      }
      else {
        isNull = false;
      }
      break;
    default :
      content = "";
      break;
  }
  alert.textContent = content;

  if ((isNull || isInvalid) && inputWrap.querySelectorAll(".alert").length === 0){
    e.target.classList.add("on");
    inputWrap.append(alert);
  }
  checkSubmit(e);
}

function checkSubmit(e) {
  const btnSubmit = document.querySelector("#btn-submit");
  const forms = document.querySelectorAll("input[data-form]");
  
  if (Array.from(forms).every((form) => form.value !== "") && document.querySelectorAll(".alert").length === 0){
    btnSubmit.disabled = false;
  }
  else {
    btnSubmit.disabled = true;
  }
}

function toggleVisibility(e) {
  const input = e.target.parentNode.querySelector("input[data-form='password']") ? e.target.parentNode.querySelector("input[data-form='password']") : e.target.parentNode.querySelector("input[data-form='password-re']");
  
  if(input.type === "password"){
    input.type = "text";
  }
  else {
    input.type = "password";
  }
}