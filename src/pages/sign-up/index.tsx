import "./SignUp.css";
import React, { useState, useEffect, ChangeEvent, MouseEvent } from "react";
import { Link } from "react-router-dom";
import logoPng from "../../assets/long_logo.png";
import showIcon from "../../assets/sign-up/show.svg";
import nonShowIcon from "../../assets/sign-up/non-show.svg";
import kakaoLogo from "../../assets/sign-up/kakao-icon.svg";
import googleLogo from "../../assets/sign-up/google-icon.png";

const SignUp = () => {
  const [isSignUpBtnDisabled, setIsSignUpBtnDisabled] = useState(true);

  const [isPwShow, setIsPwShow] = useState({
    password: false,
    passwordConfirm: false,
  });

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPw, setIsValidPw] = useState(true);
  const [isPwMatch, setIsPwMatch] = useState(true);
  const [isValidNickname, setIsValidNickname] = useState(true);

  const [signUpInfo, setSignUpInfo] = useState({
    email: "",
    password: "",
    matchPassword: "",
    nickname: "",
  });

  const validOption = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    pw: /.{8,}/,
    nick: /^.+$/,
  };

  useEffect(() => {
    if (
      isValidEmail &&
      isValidPw &&
      isPwMatch &&
      isValidNickname &&
      signUpInfo.email &&
      signUpInfo.password &&
      signUpInfo.nickname &&
      signUpInfo.matchPassword
    ) {
      setIsSignUpBtnDisabled(false);
    } else {
      setIsSignUpBtnDisabled(true);
    }
  }, [isValidEmail, isPwShow, isPwMatch, isValidNickname]);

  const setInputValueToSignUpInfo = (category: string, value: string) => {
    setSignUpInfo((prevSignUpInfo) => ({
      ...prevSignUpInfo,
      [category]: value,
    }));
  };

  const checkInputValidity = (e: ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;

    if (name === "email") {
      setInputValueToSignUpInfo("email", value);
      const isValid = validOption.email.test(value);
      setIsValidEmail(isValid ? true : false);
    } else if (name === "nickname") {
      setInputValueToSignUpInfo("nickname", value);
      const isValid = validOption.nick.test(value);
      setIsValidNickname(isValid ? true : false);
    } else if (name === "pw") {
      setInputValueToSignUpInfo("password", value);
      const isValid = validOption.pw.test(value);
      setIsValidPw(isValid ? true : false);
    } else {
      setInputValueToSignUpInfo("matchPassword", value);
      const isValid = signUpInfo.password === value;
      setIsPwMatch(isValid ? true : false);
    }
  };

  const handlePwShow = (e: MouseEvent) => {
    const { className } = e.target as HTMLImageElement;
    className.includes("re")
      ? setIsPwShow((prevIsPwShow) => ({
          ...prevIsPwShow,
          passwordConfirm: !prevIsPwShow.passwordConfirm,
        }))
      : setIsPwShow((prevIsPwShow) => ({
          ...prevIsPwShow,
          password: !prevIsPwShow.password,
        }));
  };

  return (
    <div className="sign-up-container">
      <div className="sign-up-container__logo">
        <Link to="/">
          <img className="logo" src={logoPng} alt="판다마켓 로고" />
        </Link>
      </div>

      <form action="#" method="post">
        <div className="email con">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="이메일을 입력해주세요"
            onChange={checkInputValidity}
            className={isValidEmail ? "" : "wrong"}
            autoFocus
          />
          {isValidEmail || (
            <span className="wrong-email">
              {signUpInfo.email === "" ? "이메일을 입력해주세요" : "잘못된 이메일 형식입니다"}
            </span>
          )}
        </div>

        <div className="nick con">
          <label htmlFor="nickname">닉네임</label>
          <input
            type="text"
            id="nickname"
            name="nickname"
            placeholder="닉네임을 입력해주세요"
            className={isValidNickname ? "" : "wrong"}
            onChange={checkInputValidity}
          />
          {isValidNickname || (
            <span className="wrong-nick">{signUpInfo.nickname === "" && "닉네임을 입력해주세요"}</span>
          )}
        </div>

        <div className="pw con">
          <label htmlFor="pw">비밀번호</label>
          <input
            type={isPwShow.password ? "text" : "password"}
            id="pw"
            name="pw"
            placeholder="비밀번호를 입력해주세요"
            className={isValidPw ? "" : "wrong"}
            onChange={checkInputValidity}
          />
          {isPwShow.password ? (
            <img className="pw-icon" src={showIcon} onClick={handlePwShow} alt="비밀번호 보이기" />
          ) : (
            <img className="pw-icon" src={nonShowIcon} onClick={handlePwShow} alt="비밀번호 보이지 않기" />
          )}
          {isValidPw || (
            <span className="wrong-pw">
              {signUpInfo.password === "" ? "비밀번호를 입력해주세요" : "비밀번호를 8자 이상 입력해주세요"}
            </span>
          )}
        </div>

        <div className="re-pw con">
          <label htmlFor="re-pw">비밀번호 확인</label>
          <input
            type={isPwShow.passwordConfirm ? "text" : "password"}
            id="re-pw"
            name="re-pw"
            placeholder="비밀번호를 다시 한번 입력해주세요"
            className={isPwMatch ? "" : "wrong"}
            onChange={checkInputValidity}
          />
          {isPwShow.passwordConfirm ? (
            <img className="re pw-icon" src={showIcon} onClick={handlePwShow} alt="비밀번호 보이기" />
          ) : (
            <img className="re pw-icon" src={nonShowIcon} onClick={handlePwShow} alt="비밀번호 보이지 않기" />
          )}
          {isPwMatch || <span className="wrong-pw">비밀번호가 일치하지 않습니다</span>}
        </div>

        <button disabled={isSignUpBtnDisabled} className="signup-btn">
          회원가입
        </button>

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
