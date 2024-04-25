import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/form/LoginForm";
import PandaLogo from "../assets/images/logo.png";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <AuthContainer>
      <Logo>
        <span onClick={handleLogoClick}>
          <img
            src={PandaLogo}
            className="pandamarket"
            width="296"
            alt="판다마켓 로고"
          />
        </span>
      </Logo>
      <LoginForm />
      <GoSignUp>
        판다마켓이 처음이신가요?{" "}
        <SignUpLink onClick={handleSignUpClick}>회원가입</SignUpLink>
      </GoSignUp>
    </AuthContainer>
  );
};

const AuthContainer = styled.div`
  max-width: 640px;
  margin: 0 auto;
`;

const Logo = styled.div`
  display: block;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 40px;
  cursor: pointer;
`;

const GoSignUp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
`;

const SignUpLink = styled.a`
  padding-left: 5px;
  color: #3182f6;
  cursor: pointer;
`;

export default LoginPage;
