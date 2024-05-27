import { Link } from "react-router-dom";
import * as S from "./Login.style.js";
import UserForm from "../../components/UserForm.js";
import pandaLogo from "../../assets/img/panda-logo.svg";
import SOCIAL_LOGIN from "../../constants/socialLogin.js";

const LogIn = () => {
  return (
    <S.FormContainer>
      <h1>
        <Link to="/">
          <img src={pandaLogo} alt="판다마켓" />
        </Link>
      </h1>
      <UserForm type="login" />
      <S.SocialLogin>
        <span>간편 로그인 하기</span>
        <div>
          {SOCIAL_LOGIN.map(({ name, href, icon }) => (
            <a key={name} href={href} target="_blank" rel="noopener noreferrer">
              {icon}
            </a>
          ))}
        </div>
      </S.SocialLogin>
      <S.NotMember>
        <p>판다마켓이 처음이신가요?</p>
        <button>
          <Link to="/signup">회원가입</Link>
        </button>
      </S.NotMember>
    </S.FormContainer>
  );
};

export default LogIn;
