import { NavLink } from "react-router-dom";
import logo from "../assets/img/panda-logo.svg";
import logoTypo from "../assets/img/panda-logo-typo.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="Navbar">
      <NavLink to="/" className="Navbar__logo-section">
        <img src={logo} className="Navbar__logo" alt="판다마켓" />
        <img src={logoTypo} className="Navbar__logo-typo" alt="판다마켓" />
      </NavLink>
      <NavLink
        to="/community"
        className={({ isActive }) =>
          isActive ? "active Navbar__link" : "Navbar__link"
        }
      >
        자유게시판
      </NavLink>
      <NavLink
        to="/items"
        className={({ isActive }) =>
          isActive ? "active Navbar__link" : "Navbar__link"
        }
      >
        중고마켓
      </NavLink>
      <NavLink to="/login" className="Navbar__login">
        <button type="button" className="Navbar__button">
          로그인
        </button>
      </NavLink>
    </nav>
  );
}

export default Navbar;
