import React from 'react';
import './style.css';

const Button = ({ onClick }) => {
  return (
    <button className='register-button' onClick={onClick}>
      등록
    </button>
  );
};

export default Button;
