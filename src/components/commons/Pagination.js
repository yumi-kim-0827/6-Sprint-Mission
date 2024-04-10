import React from "react";
import styles from "styles/commons.module.scss";
import classNames from "classnames/bind";
import ArrowLeft from "assets/icon/ic_arrow_left.svg";
import ArrowRight from "assets/icon/ic_arrow_right.svg";

const MOCK_PAGES = [true, false, false, false, false];

const cn = classNames.bind(styles);

function PageButton({ children, isFocus }) {
  const btnClassName = cn({
    [styles.pageBtn]: true,
    [styles.focus]: isFocus,
  });

  return <div className={btnClassName}>{children}</div>;
}

// TODO: 내부 구현
export default function Pagination() {
  return (
    <div className={styles.pagination}>
      <PageButton>
        <img src={ArrowLeft} alt="left-arrow" />
      </PageButton>
      {MOCK_PAGES.map((isFocus, idx) => (
        <PageButton key={idx} isFocus={isFocus}>
          {idx + 1}
        </PageButton>
      ))}
      <PageButton>
        <img src={ArrowRight} alt="right-arrow" />
      </PageButton>
    </div>
  );
}
