import { Link, NavLink } from "react-router-dom";
import style from "../styles/Nav.module.css";
import classNames from "classnames/bind";
import logoImg from "../assets/logo.png";
import Button from "./Button";

const cn = classNames.bind(style);

function getLinkStyle({ isActive }) {
  return {
    color: isActive ? "#3692FF" : "",
  };
}

const Nav = () => {
  return (
    <>
      <nav className={cn("nav")}>
        <h1 className={cn("logo")}>
          <Link to="/">
            <img src={logoImg} alt="판다마켓 로고" />
            <span className="sr-only">판다마켓</span>
          </Link>
        </h1>
        <ul className={cn("nav_list")}>
          <li>
            <NavLink to="/board" style={getLinkStyle}>
              자유게시판
            </NavLink>
          </li>
          <li>
            <NavLink to="/items" style={getLinkStyle}>
              중고마켓
            </NavLink>
          </li>
        </ul>
        <Button isLink={true} text={"로그인"} href={"/login"} isActive={"on"} />
      </nav>
    </>
  );
};

export default Nav;
