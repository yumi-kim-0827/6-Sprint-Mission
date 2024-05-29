import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SigninPage.css";
import signinLogo from "../../assets/signinLogo.svg";
import visibilityOn from "../../assets/btn_visibility_on.svg";
import visibilityOff from "../../assets/btn_visibility_off.svg";
import googleIcon from "../../assets/google_icon.svg";
import kakaoIcon from "../../assets/kaka0_icon.svg";

function SigninPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [isSigninButtonDisabled, setIsSigninButtonDisabled] =
    useState<boolean>(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const navigate = useNavigate();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const MIN_PASSWORD_LENGTH = 8;

  const validateEmail = (email: string) => {
    if (email.trim() === "") {
      setEmailError("이메일을 입력해주세요");
    } else if (!emailPattern.test(email.trim())) {
      setEmailError("잘못된 이메일 입니다");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (password: string) => {
    if (password.trim() === "") {
      setPasswordError("비밀번호를 입력해주세요");
    } else if (password.length < MIN_PASSWORD_LENGTH) {
      setPasswordError("비밀번호를 8자 이상 입력해주세요");
    } else {
      setPasswordError("");
    }
  };

  const updateSigninButton = () => {
    if (
      email.trim() !== "" &&
      password.trim() !== "" &&
      password.length >= MIN_PASSWORD_LENGTH
    ) {
      setIsSigninButtonDisabled(false);
    } else {
      setIsSigninButtonDisabled(true);
    }
  };

  useEffect(() => {
    updateSigninButton();
  }, [email, password]);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/items");
  };

  return (
    <section className="signinWrapper">
      <div className="signinBox">
        <header>
          <a className="logo" href="/">
            <img alt="logo" src={signinLogo} />
          </a>
        </header>
        <form className="signinInputItems" onSubmit={handleSubmit}>
          <label className="signinLabel" htmlFor="email-input">
            로그인
          </label>
          <input
            className={`inputItem ${emailError ? "markInput" : ""}`}
            name="email"
            type="text"
            placeholder="이메일을 입력해주세요"
            id="email-input"
            autoFocus
            value={email}
            onChange={handleEmailChange}
            onBlur={() => validateEmail(email)}
          />
          {emailError && <p className="emailError">{emailError}</p>}

          <label className="signinLabel" htmlFor="password">
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
              onBlur={() => validatePassword(password)}
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
          <button
            className={`signinButton ${isSigninButtonDisabled ? "" : "active"}`}
            type="submit"
            disabled={isSigninButtonDisabled}
          >
            로그인
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
            판다마켓이 처음이신가요?
            <a href="signup">회원가입</a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SigninPage;
