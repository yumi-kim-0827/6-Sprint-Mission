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
  // 화면에 따라 보여줄 제품 개수입니다.
  const productCount = useProductCountStore();
  // * 전체 api 개수 / 보여줄 제품 개수로 최종 페이지를 정하였습니다.
  const lastPage = Math.ceil(datatotalCount / productCount);

  // 페이지 클릭 시 클릭한 페이지 기준으로 렌더링 하도록 구현하였습니다.
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
