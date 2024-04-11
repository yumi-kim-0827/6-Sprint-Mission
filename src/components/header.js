import MainLogo from "../assets/icon/main_logo.svg";
import SmallMainLogo from "../assets/icon/main_logo_small.svg";
import { Link } from "react-router-dom";
import "../stlye/header.css";
import Button from "../common/Button";

export default function NavBar() {
  return (
    <nav className="navvar">
      <Link to="/">
        <img className="mainlogo" src={MainLogo} alt="로고" />
        <img className="mainlogo" src={SmallMainLogo} alt="로고" />
      </Link>
      <div className="menus">
        <Link to="/">
          <span>자유게시판</span>
        </Link>
        <Link to="/">
          <span className="focus">중고마켓</span>
        </Link>
      </div>
      <Button to="/">로그인</Button>
    </nav>
  );
}
