import React from 'react';
import style from './style.module.scss';

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className={style.container}>{children}</div>;
};

export default Container;
