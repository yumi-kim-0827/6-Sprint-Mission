import { NavLink } from "react-router-dom";
import logo from "../assets/img/panda-logo.svg";
import logoTypo from "../assets/img/panda-logo-typo.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="Navbar">
      <NavLink exact to="/" className="Navbar__logo-section">
        <img src={logo} className="Navbar__logo" alt="판다마켓" />
        <img src={logoTypo} className="Navbar__logo-typo" alt="판다마켓" />
      </NavLink>
      <NavLink exact to="/" className="Navbar__link" activeClassName="active">
        자유게시판
      </NavLink>
      <NavLink
        exact
        to="/items"
        className="Navbar__link"
        activeClassName="active"
      >
        중고마켓
      </NavLink>
      <NavLink exact to="/signin" className="Navbar__signin">
        <button type="button" className="Navbar__button">
          로그인
        </button>
      </NavLink>
    </nav>
  );
}

export default Navbar;
