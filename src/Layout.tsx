import React from "react";
import {Outlet} from "react-router-dom";
import Nav from "./components/common/Nav";
import "./Layout.css";

const Layout: React.FC = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default Layout;
