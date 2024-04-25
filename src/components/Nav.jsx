import iconLogo from "../assets/logo_icon.svg";
import textLogo from "../assets/logo_text.svg";
import "./Nav.css";
import { Link, NavLink } from "react-router-dom";

function activated(isActive) {}

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
        <NavMenuButtons />
        <div className="button-box">
          <Link to="login">
            <button className="button login-button">로그인</button>
          </Link>
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
          <button className="menu-button">
            <NavLink to="/feed" style={activated}>
              자유게시판
            </NavLink>
          </button>
        </Link>
      </div>
      <div>
        <Link to="/items">
          <button className="menu-button">
            <NavLink to="/items" style={activated}>
              중고마켓
            </NavLink>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
