import React, { useEffect } from "react";
import styles from "styles/commons.module.scss";
import classNames from "classnames/bind";
import ArrowLeft from "assets/icon/ic_arrow_left.svg";
import ArrowRight from "assets/icon/ic_arrow_right.svg";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentPageState, totalPagesState } from "context/atoms/page";
import useDeviceState from "features/hooks/layout/useDeviceState";

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
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  const totalPages = useRecoilValue(totalPagesState);
  const deviceState = useDeviceState();

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [deviceState]);

  return (
    <div className={styles.pagination}>
      <PageButton>
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
      <PageButton>
        <img src={ArrowRight} alt="right-arrow" />
      </PageButton>
    </div>
  );
}
