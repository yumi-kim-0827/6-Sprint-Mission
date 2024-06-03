import React, { ReactNode } from 'react';
import styles from "./Container.module.css";

interface ContainerProps {
  className?: string;
  page?: boolean;
  children: ReactNode;
}


const Container: React.FC<ContainerProps> = ({
  className = "",
  page = false,
  children,
}) => {
  const classNames = `${styles.container} ${
    page ? styles.page : ""
  } ${className}`;
  return <div className={classNames}>{children}</div>;
};

export default Container;