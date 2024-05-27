import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

function Layout(props) {
  return (
    <div>
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
