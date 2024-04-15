import { Link } from "react-router-dom";
import "./index.css";

function Button({ to, children }) {
  return (
    <Link className="button" to={to}>
      {children}
    </Link>
  );
}

export default Button;
