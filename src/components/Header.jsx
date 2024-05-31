//네비게이션 바

import { Link, NavLink } from "react-router-dom";
import logo from "../imgs/logo/logo.svg";

function getLinkStyle({ isActive }) {
  return { color: isActive ? "var(--blue50)" : undefined };
}

function Header() {
  return (
    <header className="flex items-center">
      <div className="flex items-center list-none gap-[8px] text-[18px] font-[700] text-[#4b5563]">
        <Link to="/">
          <img src={logo} alt="판다마켓 로고" />
        </Link>
        <li className="hover:text-[var(--blue50)]">
          <NavLink to="/freeboard" style={getLinkStyle}>
            자유게시판
          </NavLink>
        </li>
        <li className="hover:text-[#3692ff]">
          <NavLink to="/items" style={getLinkStyle}>
            중고마켓
          </NavLink>
        </li>
        <button className="w-[88px] h-[42px] p-[12px 23px] gap-[10px] rounded-md bg-[#3692ff] text-[16px] font-[600] text-[#fff] hover:bg-[var(--blue70)]">
          <Link to="/login">로그인</Link>
        </button>
      </div>
    </header>
  );
}

export default Header;
