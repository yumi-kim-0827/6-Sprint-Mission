import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import kakao from "../../assets/images/social/kakao-logo.png";
import google from "../../assets/images/social/google-logo.png";
import eyeinvisible from "../../assets/images/icons/eye-invisible.svg";
import eyevisible from "../../assets/images/icons/eye-visible.svg";
import logo from "../../assets/images/logo/logo.svg";
import "../../styles/auth.css";
import "../../styles/global.css";

function SignupPage() {
  const [email, setEmail] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isNicknameValid, setIsNicknameValid] = useState<boolean>(false);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  const [isPasswordConfirmationValid, setIsPasswordConfirmationValid] =
    useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isPasswordConfirmationVisible, setIsPasswordConfirmationVisible] =
    useState<boolean>(false);

  useEffect(() => {
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    setIsEmailValid(emailRegex.test(email));
  }, [email]);

  useEffect(() => {
    setIsNicknameValid(nickname.length > 0);
  }, [nickname]);

  useEffect(() => {
    setIsPasswordValid(password.length >= 8);
    setIsPasswordConfirmationValid(password === passwordConfirmation);
  }, [password, passwordConfirmation]);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmationChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordConfirmation(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const togglePasswordConfirmationVisibility = () => {
    setIsPasswordConfirmationVisible(!isPasswordConfirmationVisible);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      isEmailValid &&
      isNicknameValid &&
      isPasswordValid &&
      isPasswordConfirmationValid
    ) {
      window.location.href = "/login";
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
            <label className="nickname">닉네임</label>
            <input
              id="nickname"
              name="nickname"
              type="text"
              placeholder="닉네임을 입력해 주세요"
              value={nickname}
              onChange={handleNicknameChange}
              required
            />
            {!nickname && (
              <span id="nicknameEmptyError" className="error-message">
                닉네임을 입력해 주세요
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

          <div className="input-item">
            <label className="passwordConfirmation">비밀번호 확인</label>
            <div className="input-wrapper">
              <input
                id="passwordConfirmation"
                name="passwordConfirmation"
                type={isPasswordConfirmationVisible ? "text" : "password"}
                placeholder="비밀번호를 다시 한 번 입력해 주세요"
                value={passwordConfirmation}
                onChange={handlePasswordConfirmationChange}
                required
              />
              <button
                type="button"
                className="password-toggle-button"
                aria-label={
                  isPasswordConfirmationVisible
                    ? "비밀번호 숨기기"
                    : "비밀번호 보기"
                }
                onClick={togglePasswordConfirmationVisibility}
              >
                <img
                  className="password-toggle-icon"
                  src={
                    isPasswordConfirmationVisible ? eyevisible : eyeinvisible
                  }
                  alt={
                    isPasswordConfirmationVisible
                      ? "비밀번호 숨김 상태 아이콘"
                      : "비밀번호 표시 상태 아이콘"
                  }
                />
              </button>
            </div>
            {passwordConfirmation && !isPasswordConfirmationValid && (
              <span id="passwordConfirmationError" className="error-message">
                비밀번호가 일치하지 않습니다
              </span>
            )}
          </div>

          <button
            type="submit"
            className="button pill-button full-width"
            disabled={
              !isEmailValid ||
              !isNicknameValid ||
              !isPasswordValid ||
              !isPasswordConfirmationValid
            }
          >
            회원가입
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
          이미 회원이신가요? <a href="/login">로그인</a>
        </div>
      </main>
    </div>
  );
}

export default SignupPage;
