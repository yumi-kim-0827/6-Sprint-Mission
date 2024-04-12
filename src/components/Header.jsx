/* eslint-disable */
import logo from "../assets/logo.svg";
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="nav">
        <img src={logo} alt="logo" />
        <a className="link" href="">
          자유게시판
        </a>
        <a className="link" href="">
          중고마켓
        </a>
      </div>
      <div>
        <a className="login link" href="">
          로그인
        </a>
      </div>
    </div>
  );
}

export default Header;
