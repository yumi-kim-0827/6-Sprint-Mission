// import { useContext } from "react";
import "../css/PaginationButton.css";
// import PageContext from "../contexts/pageContext";

function PaginationButton({ children, value, className = "", onClick }) {
  const classNames = `pagination-button ${className}`;

  return (
    <button
      value={value}
      className={classNames}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default PaginationButton;
