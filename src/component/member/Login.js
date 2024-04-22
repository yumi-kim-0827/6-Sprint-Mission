import SnsLogin from "./SnsLogin";
import loginLogo from "../../images/logo.png";
import pwdIcon from "../../images/login/eye.png";
import "../../css/member.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div id="login">
      <div className="LoginForm">
        <Link to="/" className="login_logo">
          <img src={loginLogo} alt="로고 이미지" className="img_responsive" />
        </Link>
        <form action="" name="login" method="post">
          <div className="input_area">
            <label htmlFor="login_ID">
              이메일
              <input
                type="email"
                name="userID"
                id="login_ID"
                data-check=""
                placeholder="이메일을 입력해주세요."
              />
              <p className="wrongText"></p>
            </label>
          </div>
          <div className="input_area">
            <label htmlFor="login_PWD">
              비밀번호
              <input
                type="password"
                name="userPWD"
                id="login_PWD"
                data-check=""
                placeholder="비밀번호를 입력해주세요."
              />
              <p className="wrongText"></p>
            </label>
            <img
              className="pwd_icon"
              src={pwdIcon}
              alt="비밀번호 표시 여부 아이콘"
            />
          </div>
          <button type="button" className="submit_btn" id="auth_btn">
            로그인
          </button>
        </form>
        <SnsLogin />
        <div className="login_btm">
          <span>판다마켓이 처음이신가요?</span>
          <Link to="/Join">회원가입</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
