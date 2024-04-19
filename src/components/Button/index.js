import { Link } from "react-router-dom";
import "./index.css";

function Button({ to, children }) {
  if (to) {
    return (
      <Link className="button" to={to}>
        {children}
      </Link>
    );
  }
  return <button className="button">{children}</button>;
}

export default Button;
