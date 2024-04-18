import React from 'react';
import './style.css';

const Button = ({ title, disabled, ...props }) => {
  return (
    <button {...props} className="blue-button">
      {title}
    </button>
  );
};

export default Button;
