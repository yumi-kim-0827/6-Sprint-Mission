import { Link, NavLink } from "react-router-dom";
import LogoImg from "../images/logo.png";
import "../css/common.css";

function getLink({ isActive }) {
  return {
    color: isActive ? "#3182f6" : undefined,
  };
}

function Header() {
  return (
    <div>
      <header>
        <div className="head_area">
          <Link to="/" id="logo">
            <img src={LogoImg} alt="로고 이미지" />
          </Link>
          <nav>
            <NavLink to="/Board" style={getLink}>
              자유게시판
            </NavLink>
            <NavLink to="/Product" style={getLink}>
              중고마켓
            </NavLink>
          </nav>
          <Link to="/Login" id="login">
            로그인
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
