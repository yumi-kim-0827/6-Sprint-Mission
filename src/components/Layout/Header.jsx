import { Link, NavLink } from "react-router-dom";
import logoImgUrl from "../../assets/images/logo/logo.svg";
import "./Header.scss";

function getLinkStyle({ isActive }) {
  return { color: isActive ? "var(--blue)" : undefined };
}

function Header() {
  return (
    <header>
      <div className="header-nav">
        <Link to="/" className="header-logo">
          <img src={logoImgUrl} alt="판다마켓 로고" />
        </Link>
        <nav>
          <ul>
            <li>
              <NavLink to="/board" style={getLinkStyle}>
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

      <Link to="/signin" className="btn-primary header-btn-signin">
        로그인
      </Link>
    </header>
  );
}

export default Header;
