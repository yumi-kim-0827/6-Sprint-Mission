import styles from "./Pagination.module.scss";
import classNames from "classnames/bind";
import ArrowLeft from "assets/icon/ic_arrow_left.svg";
import ArrowRight from "assets/icon/ic_arrow_right.svg";
import { useAtom, useAtomValue } from "jotai";
import { currentPageAtom, totalPagesAtom } from "contexts/atoms/page";

const cn = classNames.bind(styles);

function PageButton({ children, isFocus, onClick }) {
  const btnClassName = cn({
    [styles.pageBtn]: true,
    [styles.focus]: isFocus,
  });

  return (
    <div className={btnClassName} onClick={onClick}>
      {children}
    </div>
  );
}

export default function Pagination() {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  const totalPages = useAtomValue(totalPagesAtom);

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

  const handleLeftClick = () => {
    if (currentPage === 1) return;
    setCurrentPage((prev) => prev - 1);
  };

  const handleRightClick = () => {
    if (currentPage === totalPages) return;
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className={styles.pagination}>
      <PageButton onClick={handleLeftClick}>
        <img src={ArrowLeft} alt="left-arrow" />
      </PageButton>
      {new Array(totalPages).fill(null).map((_, idx) => (
        <PageButton
          key={idx}
          isFocus={idx + 1 === currentPage}
          onClick={() => handleButtonClick(idx + 1)}
        >
          {idx + 1}
        </PageButton>
      ))}
      <PageButton onClick={handleRightClick}>
        <img src={ArrowRight} alt="right-arrow" />
      </PageButton>
    </div>
  );
}
