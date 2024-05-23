import { ChangeEvent, useState } from "react";
import "./styles.css";
import ic_kakao from "image/ic_kakao.png";
import ic_google from "image/ic_google.png";
import ic_hidden from "image/visibility_hidden.png";
import ic_visible from "image/visibility_visible.png";
import logo from "image/login_logo.png";
import {
  validateEmailAddress,
  validatePassword,
  validateNickName,
  validatePasswordTwice,
} from "utils/validateLogin";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState<string>("");
  const [passWord, setPassWord] = useState<string>("");
  const [passWordCheck, setPassWordCheck] = useState<string>("");
  const [nickName, setNickName] = useState<string>("");
  const [visiblePassWord, setVisiblePassWord] = useState<boolean>(false);
  const [visiblePassWordCheck, setVisiblePassWordCheck] =
    useState<boolean>(false);
  const eyeIconPassWord: string = visiblePassWord ? ic_visible : ic_hidden;
  const eyeIconPassWordCheck: string = visiblePassWordCheck
    ? ic_visible
    : ic_hidden;

  const buttonActivate: boolean =
    validateEmailAddress(email) &&
    validatePassword(passWord) &&
    validateNickName(nickName) &&
    validatePasswordTwice(passWord, passWordCheck);
  const emailErrorMessage: string =
    email === ""
      ? "이메일을 입력해주세요"
      : validateEmailAddress(email)
      ? ""
      : "잘못된 이메일 형식입니다";
  const passWordErrorMessage: string =
    passWord === ""
      ? "비밀번호 재입력해주세요"
      : validatePassword(passWord)
      ? ""
      : "비밀번호를 8자 이상 입력해주세요";
  const passWordCheckErrorMessage: string = validatePasswordTwice(
    passWord,
    passWordCheck
  )
    ? ""
    : "비밀번호가 일치하지 않습니다";

  const nickNameErrorMessage: string = validateNickName(nickName)
    ? ""
    : "닉네임을 입력해주세요";

  const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleNickNameInput = (e: ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
  };
  const handlePassWordInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPassWord(e.target.value);
  };
  const handlePassWordCheckInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPassWordCheck(e.target.value);
  };
  const handleVisiblePassWordBtn = () => {
    setVisiblePassWord((prev) => !prev);
  };
  const handleVisiblePassWordCheckBtn = () => {
    setVisiblePassWordCheck((prev) => !prev);
  };

  return (
    <>
      <div className="sign-header">
        <Link to="/">
          <img src={logo} id="Panda-market-logo" alt="판다마켓 로고" />
        </Link>
      </div>
      <main className="sign-main">
        <div className="login-content">
          <form className="login-form">
            <div className="user-input">
              <div className="user-input-section">
                <label htmlFor="userEmail">이메일</label>
                <input
                  id="userEmail"
                  type="email"
                  name="userEmail"
                  placeholder="이메일을 입력해주세요"
                  value={email}
                  onChange={handleEmailInput}
                />
              </div>
              <span className="input-err-message">{emailErrorMessage}</span>
            </div>
            <div className="user-input">
              <div className="user-input-section">
                <label htmlFor="userNickName">닉네임</label>
                <input
                  id="userNickName"
                  type="text"
                  name="userNickName"
                  placeholder="닉네임을 입력해주세요"
                  value={nickName}
                  onChange={handleNickNameInput}
                />
              </div>
              <span className="input-err-message">{nickNameErrorMessage}</span>
            </div>
            <div className="user-input">
              <div className="user-input-section">
                <label htmlFor="userPassword">비밀번호</label>
                <input
                  id="userPassword"
                  type={visiblePassWord ? "text" : "password"}
                  name="userPassword"
                  placeholder="비밀번호를 입력해주세요"
                  value={passWord}
                  onChange={handlePassWordInput}
                />
                <img
                  src={eyeIconPassWord}
                  className="password-visible-btn"
                  alt="비밀번호 숨기기 버튼"
                  onClick={handleVisiblePassWordBtn}
                />
              </div>
              <span className="input-err-message">{passWordErrorMessage}</span>
            </div>
            <div className="user-input">
              <div className="user-input-section">
                <label htmlFor="userPasswordCheck">비밀번호 확인</label>
                <input
                  id="userPasswordCheck"
                  type={visiblePassWordCheck ? "text" : "password"}
                  name="userPasswordCheck"
                  placeholder="비밀번호를 다시 한 번 입력해주세요"
                  value={passWordCheck}
                  onChange={handlePassWordCheckInput}
                />
                <img
                  src={eyeIconPassWordCheck}
                  className="password-visible-btn"
                  alt="비밀번호 숨기기 버튼"
                  onClick={handleVisiblePassWordCheckBtn}
                />
              </div>
              <span className="input-err-message">
                {passWordCheckErrorMessage}
              </span>
            </div>
            <button disabled={!buttonActivate}>회원가입</button>
          </form>
          <div className="login-easy">
            <span>간편 로그인하기</span>
            <div className="sns-icon">
              <Link to="https://www.google.com/">
                <img src={ic_google} alt="구글 아이콘" />
              </Link>
              <Link to="https://www.kakaocorp.com/page/">
                <img src={ic_kakao} alt="카카오 아이콘" />
              </Link>
            </div>
          </div>
          <div className="login-first">
            <span>이미 회원이신가요?</span>
            <Link to="signin">로그인</Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Signup;
