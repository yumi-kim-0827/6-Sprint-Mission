import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../pages/SigninPage/SigninPage.css";
import signinLogo from "../../assets/signinLogo.svg";
import visibilityOn from "../../assets/btn_visibility_on.svg";
import visibilityOff from "../../assets/btn_visibility_off.svg";
import googleIcon from "../../assets/google_icon.svg";
import kakaoIcon from "../../assets/kaka0_icon.svg";

function SignupPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [passwordCheck, setPasswordCheck] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [nicknameError, setNicknameError] = useState<string>("");
  const [passwordCheckError, setPasswordCheckError] = useState<string>("");
  const [isSigninButtonDisabled, setIsSigninButtonDisabled] =
    useState<boolean>(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const navigate = useNavigate();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const MIN_PASSWORD_LENGTH = 8;

  const validateEmail = () => {
    if (email.trim() === "") {
      setEmailError("이메일을 입력해주세요");
      return false;
    } else if (!emailPattern.test(email.trim())) {
      setEmailError("잘못된 이메일입니다");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const validatePassword = () => {
    if (password.trim() === "") {
      setPasswordError("비밀번호를 입력해주세요");
      return false;
    } else if (password.length < MIN_PASSWORD_LENGTH) {
      setPasswordError("비밀번호를 8자 이상 입력해주세요");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  const validateNickname = () => {
    if (nickname.trim() === "") {
      setNicknameError("닉네임을 입력해주세요");
      return false;
    } else {
      setNicknameError("");
      return true;
    }
  };

  const validatePasswordCheck = () => {
    if (passwordCheck.trim() === "") {
      setPasswordCheckError("비밀번호를 다시 한 번 입력해주세요");
      return false;
    } else if (passwordCheck !== password) {
      setPasswordCheckError("비밀번호가 일치하지 않습니다");
      return false;
    } else {
      setPasswordCheckError("");
      return true;
    }
  };

  const updateSigninButton = () => {
    const isValid =
      validateEmail() &&
      validatePassword() &&
      validateNickname() &&
      validatePasswordCheck();
    setIsSigninButtonDisabled(!isValid);
  };

  useEffect(() => {
    updateSigninButton();
  }, [email, password, nickname, passwordCheck]);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handlePasswordCheckChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordCheck(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/signin");
  };

  return (
    <section className="signinWrapper">
      <div className="signupBox">
        <header>
          <Link className="logo" to="/">
            <img alt="logo" src={signinLogo} />
          </Link>
        </header>
        <form className="signinInputItems" onSubmit={handleSubmit}>
          <label className="signinLabel" htmlFor="emailInput">
            이메일
          </label>
          <input
            id="emailInput"
            className={`inputItem ${emailError ? "markInput" : ""}`}
            name="email"
            type="text"
            placeholder="이메일을 입력해주세요"
            autoFocus
            value={email}
            onChange={handleEmailChange}
            onBlur={validateEmail}
          />
          {emailError && <p className="emailError">{emailError}</p>}

          <label htmlFor="nicknameInput" className="signinLabel">
            닉네임
          </label>
          <input
            id="nicknameInput"
            className={`inputItem ${nicknameError ? "markInput" : ""}`}
            name="nickname"
            type="text"
            placeholder="닉네임을 입력해주세요"
            value={nickname}
            onChange={handleNicknameChange}
            onBlur={validateNickname}
          />
          {nicknameError && <p className="nicknameError">{nicknameError}</p>}

          <label htmlFor="password" className="signinLabel">
            비밀번호
          </label>
          <div className="passwordBox">
            <input
              id="password"
              className={`passwordInput inputItem ${
                passwordError ? "markInput" : ""
              }`}
              name="password"
              type={isPasswordVisible ? "text" : "password"}
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={handlePasswordChange}
              onBlur={validatePassword}
            />
            {passwordError && <p className="passwordError">{passwordError}</p>}

            <button
              type="button"
              className="visibility"
              onClick={togglePasswordVisibility}
            >
              <img
                className="eyeIcon"
                alt="visibility"
                src={isPasswordVisible ? visibilityOn : visibilityOff}
              />
            </button>
          </div>

          <label htmlFor="passwordCheck" className="signinLabel">
            비밀번호 확인
          </label>
          <div className="passwordBox">
            <input
              id="password-check"
              className={`passwordInput inputItem ${
                passwordCheckError ? "markInput" : ""
              }`}
              name="passwordCheck"
              type="password"
              placeholder="비밀번호를 다시 한 번 입력해주세요"
              value={passwordCheck}
              onChange={handlePasswordCheckChange}
              onBlur={validatePasswordCheck}
            />
            {passwordCheckError && (
              <p className="passwordcheckError">{passwordCheckError}</p>
            )}
            <button
              type="button"
              className="visibility"
              onClick={togglePasswordVisibility}
            >
              <img
                className="eyeIcon"
                alt="visibility"
                src={isPasswordVisible ? visibilityOn : visibilityOff}
              />
            </button>
          </div>
          <button
            className={`signinButton ${isSigninButtonDisabled ? "" : "active"}`}
            type="submit"
            disabled={isSigninButtonDisabled}
          >
            회원가입
          </button>

          <div className="snsSignin">
            <div>간편 로그인하기</div>
            <div className="sns">
              <a href="https://www.google.com/">
                <img alt="google" src={googleIcon} />
              </a>
              <a href="https://www.kakaocorp.com/">
                <img alt="kakao" src={kakaoIcon} />
              </a>
            </div>
          </div>
          <div className="btm">
            이미 회원이신가요?
            <a href="signin">로그인</a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignupPage;
