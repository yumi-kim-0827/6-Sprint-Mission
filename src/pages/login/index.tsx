import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import LoginLogoIcon from "../../assets/logo/login_logo.png";
import GoogleIcon from "../../assets/logo/ic_google.png";
import KakaotalkIcon from "../../assets/logo/ic_kakaotalk.png";
import "./login.css";

export default function Login(): JSX.Element {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [usernameError, setUsernameError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [passwordStrengthError, setPasswordStrengthError] =
    useState<string>("");

  useEffect(() => {
    function validateEmail(email: string): boolean {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email.toLowerCase());
    }

    function validatePassword(password: string): boolean {
      return password.length >= 8;
    }

    if (!username.trim()) {
      setUsernameError("이메일을 입력해주세요");
    } else if (!validateEmail(username.trim())) {
      setUsernameError("잘못된 이메일 형식입니다");
    } else {
      setUsernameError("");
    }

    if (!password.trim()) {
      setPasswordError("비밀번호를 입력해주세요");
    } else if (!validatePassword(password.trim())) {
      setPasswordError("");
      setPasswordStrengthError("비밀번호를 8자 이상 입력해주세요");
    } else {
      setPasswordError("");
      setPasswordStrengthError("");
    }
  }, [username, password]);

  function handleUsernameChange(event: ChangeEvent<HTMLInputElement>): void {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>): void {
    setPassword(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    if (!usernameError && !passwordError && !passwordStrengthError) {
      window.location.href = "../items";
    }
  }

  return (
    <div className="login-form">
      <header>
        <a href="/">
          <img className="login-logo" src={LoginLogoIcon} alt="로고" />
        </a>
      </header>

      <main className="main-login">
        <form onSubmit={handleSubmit}>
          <div className="login-email">
            <label className="input-text" htmlFor="loginid">
              이메일
              <br />
            </label>
            <input
              type="email"
              className="loginid"
              name="id"
              placeholder="이메일을 입력하세요"
              value={username}
              onChange={handleUsernameChange}
            />

            {usernameError && (
              <div className="failure-messageid message">{usernameError}</div>
            )}
          </div>
          <div className="login-password">
            <label className="input-text" htmlFor="loginpw">
              비밀번호
              <br />
            </label>
            <input
              type="password"
              className="loginpw"
              name="pw"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={handlePasswordChange}
            />

            {passwordError && (
              <div className="failure-messagepw message">{passwordError}</div>
            )}
            {passwordStrengthError && (
              <div className="strongPassword-message message">
                {passwordStrengthError}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="login-btn"
            disabled={
              !!(usernameError || passwordError || passwordStrengthError)
            }
          >
            로그인
          </button>
        </form>
        <section>
          <div className="login-simple">
            <p className="simple-text">간편 로그인하기</p>
            <div className="login-social">
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={GoogleIcon} alt="구글" />
              </a>
              <a
                href="https://www.kakaocorp.com/page/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={KakaotalkIcon} alt="카카오톡" />
              </a>
            </div>
          </div>
          <div className="login-bottom">
            <div className="join-text">판다마켓이 처음이신가요?</div>
            <a id="join-page" href="../signup">
              회원가입
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
