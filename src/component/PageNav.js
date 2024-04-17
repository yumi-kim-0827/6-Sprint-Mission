import React, { useEffect, useState } from "react";

const PageNav = ({ currentPage, handlePageBtn, pageNumbers }) => {



  const currentPageBlueColor = { color: "#3692FF" };



  return (
    <div>
      <button value={"<"} onClick={handlePageBtn}>{"<"}</button>
      {pageNumbers.map((pageNumber) => (
        <button
          value={pageNumber}
          key={pageNumber}
          style={pageNumber === currentPage ? currentPageBlueColor : undefined}
          onClick={handlePageBtn}
        >
          {pageNumber}
        </button>
      ))}
      <button value={">"} onClick={handlePageBtn}>{">"}</button>
    </div>
  );
};

export default PageNav;
