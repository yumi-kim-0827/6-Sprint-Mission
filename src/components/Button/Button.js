import React from "react";
import "./Button.css";

const Button = (props) => {
  const { children, href } = props;

  return (
    <a className="button" href={href}>
      {children}
    </a>
  );
};

export default Button;
