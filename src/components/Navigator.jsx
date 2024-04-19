import iconLogo from "../assets/Group 19@3x.png";
import textLogo from "../assets/logo@3x.png";
import "./Navigator.css";

function Navigator() {
  return (
    <header className="header">
      <nav className="nav">
        <div>
          <a href="/">
            <img className="icon-logo" src={iconLogo} alt="Logo" />
            <img className="text-logo" src={textLogo} alt="text-logo" />
          </a>
        </div>
        <NavMenuButtons></NavMenuButtons>
        <div className="button-box">
          <button className="button login-button">로그인</button>
        </div>
      </nav>
    </header>
  );
}

function NavMenuButtons() {
  return (
    <div className="menu-box">
      <div>
        <button className="menu-button">자유게시판</button>
      </div>
      <div>
        <button className="menu-button" style={{ color: "#3692FF" }}>
          중고마켓
        </button>
      </div>
    </div>
  );
}

export default Navigator;
