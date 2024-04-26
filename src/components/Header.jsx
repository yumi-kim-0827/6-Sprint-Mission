import panda from "../assets/panda-market-logo.png";
import "./Header.css";

function Header() {
  return (
    <header className="container">
      <div className="logo-place">
        <img className="panda-logo" src={panda} alt="pandaLogo" />
        <div>
          <a href="/">자유게시판</a>
          <a href="/" className="blue">
            중고마켓
          </a>
        </div>
      </div>
      <button className="header-btn">로그인</button>
    </header>
  );
}

export default Header;
