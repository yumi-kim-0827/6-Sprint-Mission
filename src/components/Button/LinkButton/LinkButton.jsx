import { Link } from "react-router-dom";
import styles from "../Button.module.scss";

export default function LinkButton({ className, children, to = "/" }) {
  return (
    <Link to={to}>
      <div className={`${styles.button} ${className}`}>{children}</div>
    </Link>
  );
}
