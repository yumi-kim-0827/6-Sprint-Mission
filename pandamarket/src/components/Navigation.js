import "./Navigation.css";
import Button from "./Button";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Frame from "../assets/Frame.png";
function Navigation({ isLogin }) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [isLogin]);

  let src = logo;
  if (width < 767) {
    src = logo2;
  }

  function getLinkStyle({ isActive }) {
    return {
      color: isActive ? "#3692ff" : "#4b5563",
      textDecoration: "none",
    };
  }

  return (
    <>
      <nav>
        <div id="nav">
          <span>
            <Link to="/">
              <img src={src} alt="logo" />
            </Link>
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
        {isLogin ? (
          <img src={Frame} alt="myInfo" />
        ) : (
          <Link to="/signIn">
            <Button>로그인</Button>
          </Link>
        )}
      </nav>
      <hr />
    </>
  );
}

export default Navigation;
