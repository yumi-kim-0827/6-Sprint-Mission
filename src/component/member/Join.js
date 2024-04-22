import loginLogo from "../../images/logo.png";
import pwdIcon from "../../images/login/eye.png";
import SnsLogin from "./SnsLogin";
import "../../css/member.css";
import { Link } from "react-router-dom";

function Join() {
  return (
    <div id="join">
      <div className="JoinForm">
        <Link to="/" className="login_logo">
          <img src={loginLogo} alt="로고 이미지" />
        </Link>
        <form action="" name="join" method="post">
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
            <label htmlFor="login_Name">
              닉네임
              <input
                type="text"
                name="userName"
                id="login_Name"
                data-check=""
                placeholder="닉네임을 입력해주세요."
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
              onclick="pwdShow(this)"
              alt="비밀번호 표시 여부 아이콘"
            />
          </div>
          <div className="input_area">
            <label htmlFor="login_PWD2">
              비밀번호 확인
              <input
                type="password"
                id="login_PWD2"
                data-check=""
                placeholder="비밀번호를 다시 한 번 입력해주세요."
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
            회원가입
          </button>
        </form>
        <SnsLogin />
        <div className="login_btm">
          <span>이미 회원이신가요?</span>
          <Link to="/login">로그인</Link>
        </div>
      </div>
    </div>
  );
}

export default Join;
