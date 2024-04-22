import React from "react";
import PageButton from "./pageButton";
import arrowLeft from "../../../../assets/arrow_left.svg";
import arrowRight from "../../../../assets/arrow_right.svg";
import styled from "styled-components";

const PageNation = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
`;
export default function pageNationBar({ changePage, pageCount, activePage }) {
  const pages = createPageArray(pageCount);

  function createPageArray(pageCount) {
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  }

  const handleClick = (pageNumber) => {
    changePage(pageNumber);
  };
  return (
    <PageNation>
      <PageButton>
        <img src={arrowLeft} alt="이전페이지" />
      </PageButton>
      {pages.map((page, i) => (
        <PageButton key={i} onClick={() => handleClick(page)}>
          {page}
        </PageButton>
      ))}
      <PageButton>
        <img src={arrowRight} alt="다음페이지" />
      </PageButton>
    </PageNation>
  );
}
