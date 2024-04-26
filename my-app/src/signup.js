import "./signup.css";
import logoImg from "../assets/logo.png";
import visibilityOff from "../assets/visibility-off.png";
import googleImg from "../assets/google.png";
import kakaotalkImg from "../assets/kakaotalk.png";

const Signup = () => {
  return (
    <>
      <form className="signupForm">
        <div className="logo">
          <a href="../main/index.html" style={{ textDecorationLine: "none" }}>
            <img src={logoImg} className="logo-image" alt="판다마켓로고" />
          </a>
        </div>
        <label className="signupLabel">
          이메일
          <input
            className="signupInput"
            name="useremail"
            type="email"
            placeholder="이메일을 입력해주세요"
          />
        </label>
        <label className="signupLabel">
          닉네임
          <input
            className="signupInput"
            name="username"
            type="text"
            placeholder="닉네임을 입력해주세요"
          />
        </label>
        <label className="signupLabel">
          비밀번호
          <div className="passwordInput">
            <input
              className="signupInput"
              name="password"
              type="password"
              placeholder="비밀번호를 입력해주세요"
            />
            <img src={visibilityOff} />
          </div>
        </label>
        <label className="signupLabel">
          비밀번호 확인
          <div className="passwordInput">
            <input
              className="signupInput"
              name="passwordretry"
              type="password"
              placeholder="비밀번호를 다시 한 번 입력해주세요"
            />
            <img src={visibilityOff} />
          </div>
        </label>
        <button className="signupBtn">회원가입</button>
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
          이미 회원이신가요? <a href="../login/login.html">로그인</a>
        </p>
      </div>
    </>
  );
};
export default Signup;
