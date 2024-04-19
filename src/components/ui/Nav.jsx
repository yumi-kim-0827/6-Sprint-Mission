import { Link } from "react-router-dom";
import "./Nav.scss";

function Nav() {
  return (
    <nav className="nav">
      <Link to="/">홈</Link>
      <div className="pages">
        <Link to="/board">자유게시판</Link>
        <Link to="/items">중고마켓</Link>
      </div>
      <Link to="/signin">로그인</Link>
    </nav>
  );
}

export default Nav;
