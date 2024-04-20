import { Link } from "react-router-dom";
import LogoImg from "../images/logo.png";
import "../css/common.css";

function Header() {
  return (
    <div>
      <header>
        <div className="head_area">
          <Link to="/AddItem" id="logo">
            <img src={LogoImg} alt="로고 이미지" />
          </Link>
          <nav>
            <Link to="/Board">자유게시판</Link>
            <Link to="/" className="active">
              중고마켓
            </Link>
          </nav>
          <Link to="/login" id="login">
            로그인
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
