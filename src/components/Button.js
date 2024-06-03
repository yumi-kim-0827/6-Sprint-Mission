import React from "react";
import "./Button.css";

const Button = ({ handleButtonSubmit }) => {
  return (
    <div>
      <button
        disabled={handleButtonSubmit}
        className={handleButtonSubmit ? "Button" : "Button activation"}
      >
        등록
      </button>
    </div>
  );
};

export default Button;
