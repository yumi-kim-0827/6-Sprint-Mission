import { NavLink } from "react-router-dom";
import "./NavMain.css";
import React from "react";

function NavMain({ site = "" }) {
  return (
    <nav className="main_nav">
      <div className="nav_menu">
        <NavLink to={"/community"} className="menu_community">
          자유게시판
        </NavLink>
        <NavLink
          to={"/Items"}
          className={`menu_used_market ${site === "/AddItem" ? "active" : ""}`}
        >
          중고마켓
        </NavLink>
      </div>
    </nav>
  );
}

export default NavMain;
