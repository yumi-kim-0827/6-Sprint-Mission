import React from "react";
import "../styles/Button.css";

const Button = ({ children, type = "", disable }) => {
  return (
    <button
      className={`Button ${disable ? "disable" : "enable"}`}
      type={type}
      disabled={disable}
    >
      {children}
    </button>
  );
};

export default Button;
