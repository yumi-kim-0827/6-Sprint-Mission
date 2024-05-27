import { NavLink } from "react-router-dom";
import "./NavMain.css";
import React from "react";

interface NavMainProps {
  site?: string;
}

const NavMain: React.FC<NavMainProps> = ({ site = "" }) => {
  return (
    <nav className="main_nav">
      <div className="nav_menu">
        {/* 자유게시판 링크 */}
        <NavLink to="/community" className="menu_community">
          자유게시판
        </NavLink>
        {/* 중고마켓 링크 */}
        <NavLink
          to="/Items"
          className={`menu_used_market ${site === "/AddItem" ? "active" : ""}`}
        >
          중고마켓
        </NavLink>
      </div>
    </nav>
  );
};

export default NavMain;
