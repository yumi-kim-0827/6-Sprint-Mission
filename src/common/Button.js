import { Link } from "react-router-dom";
import "../style/header.css";
import React from "react";

export default function LinkButton({ children, to = "/" }) {
  return (
    <Link to={to}>
      <div className="button">{children}</div>
    </Link>
  );
}
