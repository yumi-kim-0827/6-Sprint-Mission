import { ReactComponent as LeftArrow } from "../../assets/icons/icon-arrow-left.svg";
import { ReactComponent as RightArrow } from "../../assets/icons/icon-arrow-right.svg";

const PaginationBar = ({ pageTotal, activePage, onPageChange }) => {
  const maxVisiblePages = 5;
  let startPage;

  if (pageTotal <= maxVisiblePages) {
    startPage = 1;
  } else {
    startPage = Math.max(activePage - Math.floor(maxVisiblePages / 2), 1);
    startPage = Math.min(startPage, pageTotal - maxVisiblePages + 1);
  }

  const pages = Array.from(
    { length: Math.min(maxVisiblePages, pageTotal - startPage + 1) },
    (_, i) => startPage + i
  );

  return (
    <div className="pagination-bar">
      <button
        className="pagination-button"
        disabled={activePage === 1}
        onClick={() => onPageChange(activePage - 1)}
      >
        <LeftArrow />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`pagination-button ${activePage === page ? "active" : ""}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className="pagination-button"
        disabled={activePage === pageTotal}
        onClick={() => onPageChange(activePage + 1)}
      >
        <RightArrow />
      </button>
    </div>
  );
};

export default PaginationBar;
