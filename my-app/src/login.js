import "./login.css";
import logoImg from "./assets/logo.png";
import visibilityOff from "./assets/visibility-off.png";
import googleImg from "./assets/google.png";
import kakaotalkImg from "./assets/kakaotalk.png";

// const emailInput = document.getElementById("emailInput");
// const passwordInput = document.getElementById("passwordInput");
// const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

// function focusOutInput(event) {
//   const passwordValue = document.getElementById("passwordInput").value;
//   // const emailValue = document.getElementById("emailInput").value;

//   if (!emailValue) {
//     event.target.style.border = "2px solid red";
//     //에러 메시지 아래
//     emailInput.focus();
//     return;
//   } else if (emailValidation) {
//     event.target.style.border = "2px solid red";
//     //alert말고 밑에 에러 메시지로 바꾸기
//     emailInput.focus();
//   }
// }
// function foucsInInput(event) {
//   event.target.style.border = "2px solid #3692ff";
// }
// function emailValidation(event) {
//   // if (exptext.test(emailValue) == false) {
//   //   emailInput.focus();
//   //   return false;
//   // }
// }

// emailInput.addEventListener("focusout", focusOutInput);
// passwordInput.addEventListener("focusout", focusOutInput);

const Login = () => {
  return (
    <>
      <form id="loginForm">
        <div className="logo">
          <a href="../main/index.html" style={{ textDecorationLine: "none" }}>
            <img className="logo-image" src={logoImg} alt="판다마켓로고" />
          </a>
        </div>
        <label className="loginLabel">
          이메일
          <input
            className="loginInput"
            id="emailInput"
            name="useremail"
            type="email"
            placeholder="이메일을 입력해주세요"
          />
        </label>
        <label className="loginLabel">
          비밀번호
          <div className="passwordInput">
            <input
              className="loginInput"
              id="passwordInput"
              name="password"
              type="password"
              placeholder="비밀번호를 입력해주세요"
            />
            <img src={visibilityOff} />
          </div>
        </label>
        <button className="loginBtn">로그인</button>
      </form>
      <div className="easyLogin">
        <p>간편 로그인하기</p>
        <div className="easyLoginLogo">
          <a
            href="https://www.google.com/"
            style={{ textDecorationLine: "none" }}
          >
            <img className="easyLoginImg" src={googleImg} />
          </a>
          <a
            href="https://www.kakaocorp.com/page/"
            style={{ textDecorationLine: "none" }}
          >
            <img className="easyLoginImg" src={kakaotalkImg} />
          </a>
        </div>
      </div>
      <div className="joinText">
        <p>
          판다마켓이 처음이신가요? <a href="../signup/signup.html">회원가입</a>
        </p>
      </div>
    </>
  );
};

export default Login;
