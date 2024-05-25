import React from "react";
import { Link } from "react-router-dom";
import * as S from "./SignUp.style.js";
import UserForm from "../../components/UserForm.js";
import pandaLogo from "../../assets/img/panda-logo.svg";
import GoogleIcon from "../../assets/icon/google-round.svg?react";
import KaKaoIcon from "../../assets/icon/kakao-round.svg?react";

const SOCIAL_LOGIN = [
  { name: "구글", href: "https://www.google.com/", icon: <GoogleIcon /> },
  {
    name: "카카오",
    href: "https://www.kakaocorp.com/page/",
    icon: <KaKaoIcon />,
  },
];

const SignUp = () => {
  return (
    <S.FormContainer>
      <h1>
        <Link to="/">
          <img src={pandaLogo} alt="판다마켓" />
        </Link>
      </h1>
      <UserForm type="signup" />
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
      <S.AlreadyMember>
        <p>이미 회원이신가요?</p>
        <button>
          <Link to="/login">로그인</Link>
        </button>
      </S.AlreadyMember>
    </S.FormContainer>
  );
};

export default SignUp;
