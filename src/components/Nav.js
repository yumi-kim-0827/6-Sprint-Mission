import { Link, NavLink } from "react-router-dom";
import logoImg from "../assets/logo/panda_logo.png";
import "./Nav.css";

function Nav() {
  const getLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "var(--point-blue)" : "#4b5563",
    };
  };

  return (
    <nav className="home-nav">
      <div className="container-menu">
        <Link to="/">
          <img className="logo" alt="판다마켓 로고" src={logoImg} />
        </Link>
        <ul className="menu">
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
        </ul>
      </div>
      <Link className="button button-login" to="/login">
        로그인
      </Link>
    </nav>
  );
}

export default Nav;
