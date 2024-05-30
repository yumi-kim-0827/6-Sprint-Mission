import React, { ComponentProps } from 'react';
import style from './style.module.scss';

interface ButtonProps extends ComponentProps<'button'> {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return <button className={style.button}>{children}</button>;
};

export default Button;
