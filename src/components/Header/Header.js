/* eslint-disable */
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./Header.css";

function getLinkStyle({ isActive }) {
  return {
    color: isActive ? "#3692FF" : null,
  };
}

function Header() {
  return (
    <>
      <header>
        <div className="nav">
          <div>
            <Link to="/">
              <img src={logo} alt="판다마켓 로고" className="nav-logo" />
            </Link>
          </div>

          <div className="nav-link">
            <NavLink to="/community" className="link" style={getLinkStyle}>
              자유게시판
            </NavLink>
            <NavLink to="/items" className="link" style={getLinkStyle}>
              중고마켓
            </NavLink>
          </div>
        </div>

        <Link to="/login" className="login-button link">
          로그인
        </Link>
      </header>
    </>
  );
}

export default Header;
