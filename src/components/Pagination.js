import "../css/Pagination.css";
import PaginationButton from "./PaginationButton";
import leftArrowIcon from "../assets/icons/ic_arrow_left.svg";
import rightArrowIcon from "../assets/icons/ic_arrow_right.svg";
import { useContext } from "react";
import PageContext from "../contexts/pageContext";

function Pagination({ className }) {
  const { page, setPage } = useContext(PageContext);

  const calculateSelectedButton = (num) =>
    num === page ? "pagination-button--selected" : "";

  const handlePaginationClick = (e) => {
    if (e.currentTarget.value === "nextPage") {
      if (page !== "5") {
        const nextPage = String(Number(page) + 1);
        setPage(nextPage);
      }
    } else if (e.currentTarget.value === "previousPage") {
      if (page !== "1") {
        // 위 조건에 and로 추가하면 아닌 경우 else가 실행돼서 따로처리
        const previousPage = String(Number(page) - 1);
        setPage(previousPage);
      }
    } else {
      setPage(e.currentTarget.value);
    }
  };

  return (
    <div className={className}>
      <PaginationButton
        value="previousPage"
        className="pagination-button--image"
        onClick={handlePaginationClick}
      >
        <img src={leftArrowIcon} alt="leftArrow"></img>
      </PaginationButton>
      {["1", "2", "3", "4", "5"].map((num) => {
        return (
          <PaginationButton
            key={num}
            value={num}
            onClick={handlePaginationClick}
            className={calculateSelectedButton(num)}
          >
            {num}
          </PaginationButton>
        );
      })}
      <PaginationButton
        value="nextPage"
        className="pagination-button--image"
        onClick={handlePaginationClick}
      >
        <img src={rightArrowIcon} alt="rightArrow"></img>
      </PaginationButton>
    </div>
  );
}

export default Pagination;
