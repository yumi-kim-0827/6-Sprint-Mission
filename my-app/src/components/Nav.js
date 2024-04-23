import "./Nav.css";
import logoImg from "../assets/logo.png";
import { BrowserRouter, Link, NavLink } from "react-router-dom";

function getMenuStyle({ isActive }) {
  return {
    color: isActive ? "#3292FF" : "Black",
  };
}

const Nav = () => {
  return (
    <nav>
      <BrowserRouter>
        <div className="logoCategoryDiv">
          <img className="logoImg" src={logoImg} />
          <div className="category">
            <NavLink to="/">
              <p className="boardMenu">자유게시판</p>
            </NavLink>
            <NavLink to="/additem" style={getMenuStyle}>
              <p className="marketMenu">중고마켓</p>
            </NavLink>
          </div>
        </div>
        <button className="loginButton">로그인</button>
      </BrowserRouter>
    </nav>
  );
};

export default Nav;
