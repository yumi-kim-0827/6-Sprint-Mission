//네비게이션 바

import { Link, NavLink } from "react-router-dom";
import logo from "../imgs/logo/logo.svg";

function getLinkStyle({ isActive }) {
  return { color: isActive ? "var(--blue)" : undefined };
}

function Header() {
  return (
    <header>
      <div className="headerBar">
        <Link to="/">
          <img src={logo} alt="판다마켓 로고" />
        </Link>
        <li>
          <NavLink to="/freeboard" style={getLinkStyle}>
            자유게시판
          </NavLink>
        </li>
        <li>
          <NavLink to="/items" style={getLinkStyle}>
            중고마켓
          </NavLink>
        </li>
        <button className="loginButton">
          <Link to="/login">로그인</Link>
        </button>
      </div>
    </header>
  );
}

export default Header;
