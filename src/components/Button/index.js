import { Link } from "react-router-dom";
import "./index.css";

function Button({ to, disabled, children }) {
  if (to) {
    return (
      <Link className="button" to={to}>
        {children}
      </Link>
    );
  }
  return (
    <button className="button" disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
