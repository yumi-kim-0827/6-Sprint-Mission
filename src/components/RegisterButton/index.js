import React from 'react';
import './style.css';

const RegisterButton = ({ onClick, disabled }) => {
  return (
    <button
      className={`register-button ${!disabled ? 'active' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      등록
    </button>
  );
};

export default RegisterButton;
