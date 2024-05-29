import React from 'react';
import style from './style.module.scss';

interface TitleTextProps {
  title: string;
}

const TitleText = ({ title }: TitleTextProps) => {
  return <h2 className={style.title}>{title}</h2>;
};

export default TitleText;
