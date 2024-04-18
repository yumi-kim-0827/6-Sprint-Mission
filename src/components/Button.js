import Link from "react-router-dom";
import style from "./Button.module.css";
import classNames from "classnames/bind";

const cn = classNames.bind(style);

const Button = ({ isLink = false, text, type = "", onClick, href }) => {
  return (
    <div className={cn("Button", type)}>
      {isLink ? (
        <Link to={href}>{text}</Link>
      ) : (
        <button onClick={onClick}>{text}</button>
      )}
    </div>
  );
};

export default Button;
