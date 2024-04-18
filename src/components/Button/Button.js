import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const Button = (props) => {
  const { children, to } = props;

  return (
    <Link className="button" to={to}>
      {children}
    </Link>
  );
};

export default Button;
