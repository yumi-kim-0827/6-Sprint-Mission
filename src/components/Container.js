import style from "../styles/Container.module.css";
import classNames from "classnames/bind";

const cn = classNames.bind(style);

const Container = ({ className, children }) => {
  return <div className={cn("container", className)}>{children}</div>;
};

export default Container;
