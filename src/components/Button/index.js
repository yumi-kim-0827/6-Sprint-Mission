import React from 'react';
import './style.css';

const Button = ({ title, onClick }) => {
  return (
    <button className='blue-button' onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
