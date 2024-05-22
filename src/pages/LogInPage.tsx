import { Link } from "react-router-dom";

import Logo from "../assets/sign_logo.png";
import Google from "../assets/icons/ic_google.png";
import Kakao from "../assets/icons/ic_kakao.png";

import "../styles/SignPage.css";

export default function LogInPage() {
  return (
    <div className="sign">
      <img className="logo" src={Logo} alt="로그인 페이지 로고" />
      
      <form action="">
        <label htmlFor="">이메일</label>

        <input type="email" placeholder="이메일을 입력해주세요" />

        <label htmlFor="">비밀번호</label>
        <input type="text" placeholder="비밀번호를 입력해주세요" />

        <button>로그인</button>
      </form>

      <div className="easy_login">
        <p>간편 로그인하기</p>
        <div className="icons">
          <img src={Google} alt="구글 로그인" />
          <img src={Kakao} alt="카카오톡 로그인" />
        </div>
      </div>

      <div className="go_signup">
        판다마켓이 처음이신가요? <Link to="/signup">회원가입</Link>
      </div>
    </div>
  );
}
