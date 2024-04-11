import { Link } from "react-router-dom";
import "../stlye/header.css";
import React from "react";

export default function Button({ children, to = "/" }) {
  return (
    <Link to={to}>
      <div className="button">{children}</div>
    </Link>
  );
}
