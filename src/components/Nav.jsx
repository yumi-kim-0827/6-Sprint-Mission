import iconLogo from "../assets/Group 19@3x.png";
import textLogo from "../assets/logo@3x.png";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo-box">
          <Link to="/">
            <img className="icon-logo" src={iconLogo} alt="Logo" />
          </Link>
          <Link to="/">
            <img className="text-logo" src={textLogo} alt="text-logo" />
          </Link>
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
        <Link to="/feed">
          <button className="menu-button">자유게시판</button>
        </Link>
      </div>
      <div>
        <Link to="/feed">
          <button className="menu-button" style={{ color: "#3692FF" }}>
            중고마켓
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
