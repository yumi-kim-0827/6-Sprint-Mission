import { Link } from "react-router-dom";
import pandaLogo from "assets/images/panda-logo-text.svg";
import kakaotalk from "assets/icons/icon-kakaotalk.svg";
import google from "assets/icons/icon-google.svg";
import "styles/LoginPage.css";
import { ChangeEvent, FocusEvent, useState } from "react";
import { EMAIL_REGEX } from "constants/LoginPage/constant";

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  passwordEye?: string;
}

function LoginInput({ label, type, placeholder, passwordEye }: InputProps) {
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "email") {
      if (EMAIL_REGEX.test(e.target.value)) {
        setEmailErrorMsg("");
        setIsError(false);
      } else {
        setIsError(true);
        setErrorMsg("");
        setEmailErrorMsg("잘못된 이메일 형식입니다.");
      }
    } else {
      setIsError(false);
    }
  };
  const handleFocusOut = (e: FocusEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setIsError(true);
      setErrorMsg(
        `${e.target.type === "email" ? "이메일" : "비밀번호"}을 입력해주세요`
      );
    }
  };

  return (
    <div className="input-container">
      <label className="login-label">{label}</label>
      <input
        type={type}
        name={type}
        placeholder={placeholder}
        className={`login-input ${passwordEye ? passwordEye : ""}`}
        onChange={handleChange}
        onBlur={handleFocusOut}
      />
      {isError && <p className="error-message">{errorMsg}</p>}
      {type === "email" && emailErrorMsg && (
        <p className="error-message">{emailErrorMsg}</p>
      )}
    </div>
  );
}

export default function LoginPage() {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <Link to={"/"} className="panda-market-logo-container">
        <img
          src={pandaLogo}
          alt="판다마켓 로고 이미지"
          className="panda-market-logo"
        />
      </Link>
      <div className="wrap">
        <form>
          <LoginInput
            label="이메일"
            type="email"
            placeholder="이메일을 입력해주세요"
          />
          <LoginInput
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            passwordEye="password-eye"
          />
          <button type="submit" className="form-login-btn" disabled>
            로그인
          </button>
        </form>
        <div className="easy-login">
          <p>간편 로그인하기</p>
          <div className="easy-login-icon">
            <Link to="https://www.google.com/" className="easy-login-a">
              <img src={google} alt="간편 로그인 구글 아이콘" />
            </Link>
            <Link to="https://www.kakaocorp.com/page/" className="easy-login-a">
              <img src={kakaotalk} alt="간편 로그인 카카오톡 아이콘" />
            </Link>
          </div>
        </div>
        <div className="fanda-first">
          <p>
            판다마켓이 처음이신가요?
            <Link to="/" className="move-signup">
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
