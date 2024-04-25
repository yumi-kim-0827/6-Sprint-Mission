import { Link, NavLink } from "react-router-dom";
import pandalogo from "../imgs/pandalogo.png";
import "../styles/Nav.css";

const getLickStyle = ({ isActive }) => {
  return {
    color: isActive ? "#3692FF" : undefined,
  };
};

const Nav = () => {
  return (
    <div className="navbar">
      <div className="container_nav">
        <Link to="/">
          <img src={pandalogo} alt="nav-logo" />
        </Link>
        <ul className="nav_menu">
          <NavLink className="navlink" to="/board" style={getLickStyle}>
            자유게시판
          </NavLink>
          <NavLink className="navlink" to="/items" style={getLickStyle}>
            중고마켓
          </NavLink>
        </ul>
      </div>
      <Link to="/login">
        <button>로그인</button>
      </Link>
    </div>
  );
};

export default Nav;
