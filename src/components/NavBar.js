import "./../styles/NavBar.css";
import Logo from "../assets/images/logo/logo.svg";
import { NavLink } from "react-router-dom";
function NavBar() {
  function getLinkStyle({ isActive }) {
    return { color: isActive ? "var(--primary-color)" : undefined };
  }
  return (
    <header className="header">
      <div className="nav-left-container">
        <a href="/">
          <img className="logo" src={Logo} alt="판다마켓 로고" />
        </a>

        <nav className="nav-category-container">
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
      <a className="login-btn-container" href="login">
        로그인
      </a>
    </header>
  );
}

export default NavBar;
