import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import UserForm from "../components/UserForm";
import ALinkImageButton from "../components/ALinkImageButton";

import pandaLogo from "../assets/img/panda-logo.svg";
import IconGoogle from "../assets/icon/google-round.svg";
import IconKaKao from "../assets/icon/kakao-round.svg";

const LogIn = () => {
  return (
    <StyledDiv className="form-container">
      <div className="form-container__header">
        <Link to="/">
          <img src={pandaLogo} alt="판다마켓" />
        </Link>
      </div>
      <UserForm type="login" />
      <div className="social-login">
        <span>간편 로그인 하기</span>
        <div className="social-login__btn-group">
          <ALinkImageButton
            href="https://www.google.com/"
            src={IconGoogle}
            alt="구글"
          />
          <ALinkImageButton
            href="https://www.kakaocorp.com/page/"
            src={IconKaKao}
            alt="카카오"
          />
        </div>
      </div>
      <div className="not-member">
        <p>판다마켓이 처음이신가요?</p>
        <button>
          <Link to="/signup">회원가입</Link>
        </button>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 100vw;
  max-width: 400px;
  margin: 0 auto;

  .user-form__btn,
  .social-login {
    width: 100%;
    max-width: 400px;
  }

  .form-container__header {
    display: flex;
    justify-content: center;
    margin: 24px 0;
    img {
      width: 198px;
      height: 66px;
    }
  }

  @media screen and (min-width: 768px) {
    max-width: 640px;

    .user-form__btn,
    .social-login {
      max-width: 640px;
    }

    .form-container__header {
      margin: 44px 0;
      img {
        width: 396px;
        height: 132px;
      }
    }
  }

  .social-login {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 640px;
    height: 74px;
    padding: 16px 23px;
    margin-top: 24px;
    background-color: #e6f2ff;
    border-radius: 8px;
    color: var(--color-cool-gray-800);

    span {
      font-weight: 500;
      font-size: 16px;
      color: var(--color-cool-gray-800);
    }
  }

  .social-login__btn-group {
    display: flex;
    gap: 16px;
  }

  .not-member {
    display: flex;
    justify-content: center;
    margin-top: 24px;
    margin-bottom: 10em;
    font-weight: 500;
    font-size: 15px;
    line-height: 17.9px;
    color: var(--color-cool-gray-800);

    button {
      margin-left: 8px;
      font-size: 15px;
      color: var(--color-blue);
      text-decoration: underline;
      background-color: transparent;
    }
  }
`;

export default LogIn;
