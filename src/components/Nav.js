//네비게이션 바

import { Link } from "react-router-dom";
import logo from "../imgs/logo/logo.svg";

function Nav() {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="판다마켓 로고" />
      </Link>
      <li>
        <Link>자유게시판</Link>
      </li>
      <li>
        <Link to="/items">중고마켓</Link>
      </li>
      <button>로그인</button>
    </div>
  );
}

export default Nav;
