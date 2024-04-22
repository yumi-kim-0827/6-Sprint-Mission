import { Link } from "react-router-dom";
import GoogleLogo from "../../images/login/google.png";
import KakaoLogo from "../../images/login/kakao.png";
function SnsLogin() {
  return (
    <>
      <div className="login_sns">
        <p>간편 로그인하기</p>
        <div className="sns_area">
          <Link to="https://www.google.com/" target="_blank">
            <img src={GoogleLogo} alt="구글 로그인 아이콘" />
          </Link>
          <Link to="https://www.kakaocorp.com/page" target="_blank">
            <img src={KakaoLogo} alt="카카오톡 로그인 아이콘" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default SnsLogin;
