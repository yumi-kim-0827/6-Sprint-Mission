import React, { ComponentProps } from 'react';
import './style.css';

interface ButtonProps extends ComponentProps<'button'> {
  title: string;
  disabled?: boolean;
}

const Button = ({ title, disabled, ...props }: ButtonProps) => {
  return (
    <button {...props} disabled={disabled} className="blue-button">
      {title}
    </button>
  );
};

export default Button;
