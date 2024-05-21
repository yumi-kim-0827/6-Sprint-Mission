import "./SignUp.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoPng from "../../assets/long_logo.png";
import showIcon from "../../assets/sign-up/show.svg";
import nonShowIcon from "../../assets/sign-up/non-show.svg";
import kakaoLogo from "../../assets/sign-up/kakao-icon.svg";
import googleLogo from "../../assets/sign-up/google-icon.png";

const SignUp = () => {
  const [isSignUpBtnDisabled, setIsSignUpBtnDisabled] = useState(true);
  const [isPwShow, setIsPwShow] = useState(false);

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPw, setIsValidPw] = useState(true);
  const [isPwMatch, setIsPwMatch] = useState(true);
  const [isValidNickname, setIsValidNickname] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState("");
  const [nickname, setNickname] = useState("");

  return (
    <div className="sign-up-container">
      <div className="sign-up-container__logo">
        <a href="/">
          <img className="logo" src={logoPng} alt="판다마켓 로고" />
        </a>
      </div>

      <form action="#" method="post">
        <div className="email con">
          <label htmlFor="email">이메일</label>
          <input type="email" id="email" placeholder="이메일을 입력해주세요" />
        </div>

        <div className="nick con">
          <label htmlFor="nickname">닉네임</label>
          <input type="text" id="nickname" placeholder="닉네임을 입력해주세요" />
        </div>

        <div className="pw con">
          <label htmlFor="pw">비밀번호</label>
          <input type="password" id="pw" placeholder="비밀번호를 입력해주세요" />
          <img className="pw-icon" src="./signup/assets/non-show-pw.png" alt="비밀번호 보이기" />
        </div>

        <div className="re-pw con">
          <label htmlFor="re-pw">비밀번호 확인</label>
          <input type="password" id="re-pw" placeholder="비밀번호를 다시 한번 입력해주세요" />
          <img className="re-pw-icon" src="./login/assets/non-show-pw.png" alt="비밀번호 보이기" />
        </div>

        <button className="signup-btn">회원가입</button>

        <div className="social-login">
          <p>간편 로그인하기</p>
          <div className="social-login-logo">
            <Link to="https://accounts.google.com/signin/v2/usernamerecovery?continue=https%3A%2F%2Faccounts.google.com%2FManageAccount&hl=ko&theme=glif&ddm=0&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
              <img src={googleLogo} alt="구글 로고" />
            </Link>
            <Link to="https://accounts.kakao.com/login/?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fproxy%3DeasyXDM_Kakao_9iyy5od3l29_provider%26ka%3Dsdk%252F1.43.2%2520os%252Fjavascript%2520sdk_type%252Fjavascript%2520lang%252Fko-KR%2520device%252FWin32%2520origin%252Fhttps%25253A%25252F%25252Fwww.epis.or.kr%26origin%3Dhttps%253A%252F%252Fwww.epis.or.kr%26response_type%3Dcode%26redirect_uri%3Dkakaojs%26state%3Dlgo6gi4qr2byw694fiizh%26through_account%3Dtrue%26client_id%3D950f3ae1f2f550e5ba7ff7d9fffc7781&talk_login=hidden#login">
              <img src={kakaoLogo} alt="카카오 로고" />
            </Link>
          </div>
        </div>
        <div className="go-login-container">
          <p>이미 회원이신가요?</p>
          <Link to="/sign-in">로그인</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
