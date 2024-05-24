import { ReactComponent as LeftArrow } from "assets/icons/icon-arrow-left.svg";
import { ReactComponent as RightArrow } from "assets/icons/icon-arrow-right.svg";
import "./PaginationBar.scss";

interface Props {
  pageTotal: number;
  activePage: number;
  onPageChange: (e: number) => void;
}

const PaginationBar = ({ pageTotal, activePage, onPageChange }: Props) => {
  const maxVisiblePages = 5;
  let startPage: number;

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
        className="pagination-btn"
        disabled={activePage === 1}
        onClick={() => onPageChange(activePage - 1)}
      >
        <LeftArrow />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`pagination-btn ${activePage === page ? "active" : ""}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className="pagination-btn"
        disabled={activePage === pageTotal}
        onClick={() => onPageChange(activePage + 1)}
      >
        <RightArrow />
      </button>
    </div>
  );
};

export default PaginationBar;
