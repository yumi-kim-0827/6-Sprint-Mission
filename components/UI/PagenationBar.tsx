import { ReactComponent as LeftArrow } from "../../assets/images/icons/arrow_left.svg";
import { ReactComponent as RightArrow } from "../../assets/images/icons/arrow_right.svg";
import style from "./PagenationBar.module.scss";

interface PaginationButtonProps {
  isActive?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

function PaginationButton({
  isActive,
  disabled,
  children,
  onClick,
}: PaginationButtonProps) {
  return (
    <button
      style={{
        color: isActive ? "#fff" : "var(--gray-500)",
        backgroundColor: isActive ? "var(--blue)" : "transparent",
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? 0.5 : 1,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

interface PaginationBarProps {
  totalPageNum: number;
  activePageNum: number;
  onPageChange: (pageNumber: number) => void;
}

const PaginationBar: React.FC<PaginationBarProps> = ({
  totalPageNum,
  activePageNum,
  onPageChange,
}) => {
  const maxVisiblePages = 5;
  let startPage: number;

  if (totalPageNum <= maxVisiblePages) {
    startPage = 1;
  } else {
    startPage = Math.max(activePageNum - Math.floor(maxVisiblePages / 2), 1);
    startPage = Math.min(startPage, totalPageNum - maxVisiblePages + 1);
  }

  const pages = Array.from(
    { length: Math.min(maxVisiblePages, totalPageNum - startPage + 1) },
    (_, i) => startPage + i
  );

  return (
    <div className={style.pagination_bar_container}>
      <PaginationButton
        disabled={activePageNum === 1}
        onClick={() => onPageChange(activePageNum - 1)}
      >
        <LeftArrow />
      </PaginationButton>
      {pages.map((page) => (
        <PaginationButton
          key={page}
          isActive={activePageNum === page}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PaginationButton>
      ))}
      <PaginationButton
        disabled={activePageNum === totalPageNum}
        onClick={() => onPageChange(activePageNum + 1)}
      >
        <RightArrow />
      </PaginationButton>
    </div>
  );
};

export default PaginationBar;
