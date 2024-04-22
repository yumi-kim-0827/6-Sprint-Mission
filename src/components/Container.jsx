import React from "react";
import "../styles/Container.css";
import { Outlet } from "react-router-dom";

const Container = () => {
  return (
    <div className="Container">
      <Outlet />
    </div>
  );
};

export default Container;
