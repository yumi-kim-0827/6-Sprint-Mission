import React from "react";
import "../styles/Button.css";

const Button = ({ text, type = "", disable }) => {
  return (
    <button
      className={`Button ${disable ? "disable" : "enable"}`}
      type={type}
      disabled={disable}
    >
      {text}
    </button>
  );
};

export default Button;
