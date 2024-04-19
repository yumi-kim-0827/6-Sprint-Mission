import { Link, NavLink } from "react-router-dom";
import logo_main from "../icon/logo_main.png";
import "../style/Navbar.css";

function getLinkStyle({ isActive }) {
  return { color: isActive ? "var(--blue)" : undefined };
}

function Navbar() {
  return (
    <header className="navbar">
      <div className="navLeft">
        <Link to="/">
          <img src={logo_main} alt="메인로고" className="logo" />
        </Link>
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/community" style={getLinkStyle}>
                자유게시판
              </NavLink>
            </li>
            <li>
              <NavLink to="/items" style={getLinkStyle}>
                중고마켓
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Link to="/login" className="loginLink button">
        로그인
      </Link>
    </header>
  );
}

export default Navbar;
