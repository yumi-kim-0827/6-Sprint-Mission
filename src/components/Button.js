import { Link } from "react-router-dom";
import style from "../styles/Button.module.css";
import classNames from "classnames/bind";

const cn = classNames.bind(style);

const Button = ({ isLink = false, isActive = "on", text, onClick, href }) => {
  return (
    <>
      {isLink ? (
        <Link className={cn("Button", isActive)} to={href}>
          {text}
        </Link>
      ) : (
        <button className={cn("Button", isActive)} onClick={onClick}>
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
