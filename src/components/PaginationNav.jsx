import React from "react";
import "../css/PaginationNav.css";

function PaginationList({ onClickPaginationButton, pageNumbers }) {
  const pages = [];
  for (let i = 1; i <= pageNumbers; i++) {
    pages.push(i);
  }

  return (
    <ul className="Pagination">
      <li onClick={onClickPaginationButton}>&#60;</li>
      {pages.map((page, i) => (
        <li
          onClick={onClickPaginationButton}
          key={i}
          className={i === 0 ? `active` : ``}
        >
          {i + 1}
        </li>
      ))}
      <li onClick={onClickPaginationButton}>&#62;</li>
    </ul>
  );
}

export default PaginationList;
