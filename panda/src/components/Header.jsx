import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="flex justify-between items-center pl-20 pr-20 gap-10 border-b-2">
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <div className="grow">
        <NavLink to="/community" className="mr-10 text-xl">
          자유게시판
        </NavLink>
        <NavLink to="/market" className="text-xl">
          중고마켓
        </NavLink>
      </div>
      <Link
        to="/login"
        className="bg-blue-500 hover:bg-blue-400 px-4 py-3 text-white rounded-lg"
      >
        로그인
      </Link>
    </header>
  );
}
