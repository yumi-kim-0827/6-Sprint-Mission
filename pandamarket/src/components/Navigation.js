import "./Navigation.css";
import Button from "./Button";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
function Navigation() {
  const src = logo;

  function getLinkStyle({ isActive }) {
    return {
      color: isActive ? "#3692ff" : "#4b5563",
      textDecoration: "none",
    };
  }
  console.log(getLinkStyle);
  return (
    <>
      <nav>
        <div id="nav">
          <span>
            <img src={src} alt="logo" />
          </span>
          <li>
            <NavLink to="/freeboard" style={getLinkStyle}>
              자유게시판
            </NavLink>
          </li>
          <li>
            <NavLink to="/items" style={getLinkStyle}>
              중고마켓
            </NavLink>
          </li>
        </div>
        <Button>로그인</Button>
      </nav>
      <hr />
    </>
  );
}

export default Navigation;
