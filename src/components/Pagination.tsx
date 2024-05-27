import styled from "styled-components";
import ArrowRightIcon from "../assets/icon/arrow-right.svg?react";
import ArrowLeftIcon from "../assets/icon/arrow-left.svg?react";

interface PaginationProps {
  className?: string;
  currentPage: number;
  totalPages: number;
  goToPrevPage: () => void;
  goToNextPage: () => void;
  goToPage: (pageNumber: number) => void;
}

const Pagination = ({
  className = "",
  currentPage,
  totalPages,
  goToPrevPage,
  goToNextPage,
  goToPage,
}: PaginationProps) => {
  const renderPageButtons = () => {
    return Array.from({ length: totalPages }, (_, i) => (
      <button
        key={i + 1}
        onClick={() => goToPage(i + 1)}
        className={i + 1 === currentPage ? "active" : ""}>
        {i + 1}
      </button>
    ));
  };

  return (
    <StyledPagination className={className}>
      <button onClick={goToPrevPage} disabled={currentPage === 1}>
        <ArrowLeftIcon />
      </button>
      {renderPageButtons()}
      <button onClick={goToNextPage} disabled={currentPage === totalPages}>
        <ArrowRightIcon />
      </button>
    </StyledPagination>
  );
};

const StyledPagination = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2px;
    width: 40px;
    height: 40px;
    background-color: #fff;
    border: 1px solid #f1f1f1;
    border-radius: 100%;
    font-weight: 600;
    font-size: 16px;
    line-height: 0;
    color: var(--color-cool-gray-500);
    overflow: hidden;
  }

  .active {
    background-color: var(--color-blue);
    color: #fff;
  }
`;

export default Pagination;
