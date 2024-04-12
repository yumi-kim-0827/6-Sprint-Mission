import paginationStore from "../store/paginationStore";
import { useProductCountStore } from "../store/productCountStore";

import arrowleft from "../images/arrow_left.png";
import arrowright from "../images/arrow_right.png";

function PageButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="flex h-10 w-10 items-center justify-center rounded-full border"
    >
      {children}
    </button>
  );
}

export default function Pagination({ datatotalCount }) {
  const setCurrentPage = paginationStore((state) => state.setCurrentPage);
  const productCount = useProductCountStore();

  const lastPage = Math.ceil(datatotalCount / productCount);

  const handlePage = (currentPage) => {
    setCurrentPage(currentPage);
  };

  return (
    <div className="mt-10 flex justify-center gap-x-1">
      <PageButton>
        <img src={arrowleft} alt="arrowleft" />
      </PageButton>
      {lastPage >= 0 &&
        new Array(lastPage).fill().map((_, idx) => {
          return (
            <PageButton key={idx} onClick={() => handlePage(idx + 1)}>
              {idx + 1}
            </PageButton>
          );
        })}
      <PageButton>
        <img src={arrowright} alt="arrowright" />
      </PageButton>
    </div>
  );
}
