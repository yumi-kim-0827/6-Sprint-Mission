import React from "react";
import UserForm from "../components/UserForm";
import LinkButton from "../components/LinkButton";
import IconGoogle from "../assets/icon/google-round.svg";
import IconKaKao from "../assets/icon/kakao-round.svg";
import { Link } from "react-router-dom";
import pandaLogo from "../assets/img/panda-logo.svg";
import "./LogIn.css";

const LogIn = () => {
  return (
    <div className="form-container">
      <div className="form-container__header">
        <Link to="/">
          <img src={pandaLogo} alt="판다마켓" />
        </Link>
      </div>
      <UserForm type="login" />
      <div className="social-login">
        <span>간편 로그인 하기</span>
        <div className="social-login__btn-group">
          <LinkButton
            href="https://www.google.com/"
            src={IconGoogle}
            alt="구글"
          />
          <LinkButton
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
    </div>
  );
};

export default LogIn;
