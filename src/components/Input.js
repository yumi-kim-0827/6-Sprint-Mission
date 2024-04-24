import style from "../styles/Input.module.css";
import classNames from "classnames/bind";

const cn = classNames.bind(style);

const Input = ({ inputClass, iconClass, type, name, placeholder }) => {
  return (
    <div className={cn("input-wrapper", inputClass)}>
      <span className={cn("icon", iconClass)}></span>
      <input
        className={cn("input")}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
