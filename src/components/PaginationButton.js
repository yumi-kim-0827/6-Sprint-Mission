import "../css/PaginationButton.css";

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
