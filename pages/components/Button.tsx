import React from "react";
import styles from "@/styles/Home.module.scss";

type ButtonProps = {
  text: string;
  className: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ text, className, onClick }) => {
  return (
    <button className={styles[className]} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
