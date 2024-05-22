import React, { useState, useEffect } from "react";
import kakao from "../../assets/images/social/kakao-logo.png";
import google from "../../assets/images/social/google-logo.png";
import eyeinvisible from "../../assets/images/icons/eye-invisible.svg";
import eyevisible from "../../assets/images/icons/eye-visible.svg";
import logo from "../../assets/images/logo/logo.svg";
import "../../styles/auth.css";
import "../../styles/global.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  useEffect(() => {
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    setIsEmailValid(emailRegex.test(email));
  }, [email]);

  useEffect(() => {
    setIsPasswordValid(password.length >= 8);
  }, [password]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmailValid && isPasswordValid) {
      window.location.href = "/items";
    }
  };

  return (
    <div className="body">
      <main className="auth-container">
        <a href="/" className="logo-home-link" aria-label="홈으로 이동">
          <img src={logo} alt="판다마켓 로고" />
        </a>

        <form id="loginForm" method="post" onSubmit={handleSubmit}>
          <div className="input-item">
            <label className="email">이메일</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="이메일을 입력해 주세요"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {!email && (
              <span id="emailEmptyError" className="error-message">
                이메일을 입력해 주세요
              </span>
            )}
            {email && !isEmailValid && (
              <span id="emailInvalidError" className="error-message">
                잘못된 이메일 형식입니다
              </span>
            )}
          </div>

          <div className="input-item">
            <label className="password">비밀번호</label>
            <div className="input-wrapper">
              <input
                id="password"
                name="password"
                type={isPasswordVisible ? "text" : "password"}
                placeholder="비밀번호를 입력해 주세요"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <button
                type="button"
                className="password-toggle-button"
                aria-label={
                  isPasswordVisible ? "비밀번호 숨기기" : "비밀번호 보기"
                }
                onClick={togglePasswordVisibility}
              >
                <img
                  className="password-toggle-icon"
                  src={isPasswordVisible ? eyevisible : eyeinvisible}
                  alt={
                    isPasswordVisible
                      ? "비밀번호 숨김 상태 아이콘"
                      : "비밀번호 표시 상태 아이콘"
                  }
                />
              </button>
            </div>
            {!password && (
              <span id="passwordEmptyError" className="error-message">
                비밀번호를 입력해 주세요
              </span>
            )}
            {password && password.length < 8 && (
              <span id="passwordInvalidError" className="error-message">
                비밀번호를 8자 이상 입력해 주세요
              </span>
            )}
          </div>

          <button
            type="submit"
            className="button pill-button full-width"
            disabled={!isEmailValid || !isPasswordValid}
          >
            로그인
          </button>
        </form>

        <div className="social-login-container">
          <h3>간편 로그인하기</h3>
          <div className="social-login-links-container">
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="구글 로그인"
            >
              <img src={google} alt="구글 로그인" width="42" />
            </a>
            <a
              href="https://www.kakaocorp.com/page/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="카카오톡 로그인"
            >
              <img src={kakao} alt="카카오톡 로그인" width="42" />
            </a>
          </div>
        </div>

        <div className="auth-switch">
          판다마켓이 처음이신가요? <a href="/signup">회원가입</a>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
