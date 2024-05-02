import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import LogoMobile from "../assets/images/logo_m.png";
import Profile from "../assets/images/profile.png";
import "../styles/Header.css";

function getLinkStyle({ isActive }) {
  return {
    color: isActive ? "#3692FF" : undefined,
  };
}

function Header() {
  return (
    <header className="header">
      <div className="header_left">
        <Link to="/" className="header_logo">
          <img src={Logo} alt="로고" className="pc_ver" />
          <img src={LogoMobile} alt="모바일 로고" className="mobile_ver" />
        </Link>
        <nav>
          <ul className="gnb">
            <li>
              <NavLink to="/board" style={getLinkStyle}>
                자유게시판
              </NavLink>
            </li>
            <li>
              <NavLink to="/additem" style={getLinkStyle}>
                중고마켓
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Link to="#">
        <img src={Profile} alt="프로필 아이콘" />
      </Link>
    </header>
  );
}

export default Header;
