import React, { useEffect, useState } from "react";
import "../css/pageNav.css";

const PageNav = ({ currentPage, handlePageBtn, pageNumbers }) => {
  const currentPageBlueColor = { backgroundColor: "#2F80ED", color:'white' };

  return (
    <div className="page-nation">
      <div className="page-nation-buttons">
        <button value={"<"} onClick={handlePageBtn}>
          {"<"}
        </button>
        {pageNumbers.map((pageNumber) => (
          <button
            value={pageNumber}
            key={pageNumber}
            style={
              pageNumber === currentPage ? currentPageBlueColor : undefined
            }
            onClick={handlePageBtn}
          >
            {pageNumber}
          </button>
        ))}
        <button value={">"} onClick={handlePageBtn}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default PageNav;
