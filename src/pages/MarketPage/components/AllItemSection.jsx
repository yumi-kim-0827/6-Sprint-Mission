import { useEffect, useState } from "react";
import { getProduct } from "../../../api/api";
import ItemCard from "./ItemCard";
import { Link } from "react-router-dom";
import DropdownList from "../../../components/DropdownList";
//전체 상품

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    return 4;
  } else if (width < 1280) {
    return 6;
  } else {
    return 12;
  }
};

function AllItemSection() {
  const pageFromStorage = Number(sessionStorage.getItem("page")) || 1;
  const [order, setOrder] = useState("recent");
  const [page, setPage] = useState(pageFromStorage);
  const [pageSize, setPageSize] = useState(getPageSize());
  const [item, setItem] = useState([]);

  // const handleSelection = (option) => {
  //   setItem(option);
  // };

  useEffect(() => {
    sessionStorage.setItem("page", page);

    const handleResize = () => {
      setPageSize(getPageSize());
    };

    window.addEventListener("recent", handleResize);

    const fetchDate = async () => {
      const products = await getProduct({ order, page, pageSize });
      setItem(products.list);
    };
    fetchDate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [order, page, pageSize]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const onPageChange = (pageNumber) => {
  //   setPage(pageNumber);
  // };

  return (
    <div className="max-w-[1200px] m-auto">
      <div className="flex gap-[12px]">
        <h1 className="flex-1 text-[20px] font-[700] mb-[16px] mt-[24px]">
          전체 상품
        </h1>
        <input
          className="flex-none w-[325px] h-[42px] p-[10px] bg-[var(--gray100)] rounded-md"
          type="text"
          placeholder="검색할 상품을 입력해주세요"
          id="name"
        ></input>
        <button className="flex-none w-[133px] h-[42px] p-[12px 23px] gap-[10px] rounded-md bg-[var(--blue50)] text-[16px] font-[600] text-[#fff] hover:bg-[var(--blue70)]">
          <Link to="/additem">상품 등록하기</Link>
        </button>
        <div
          className="flex items-center justify-center relative w-[133px] h-[42px] text-[16px] font-[600] text-[var(--blue50)] hover:bg-[var(--blue70)]"
          onClick={toggleMenu}
        >
          드롭버튼
        </div>
        {isMenuOpen && <DropdownList toggleMenu={toggleMenu} />}
      </div>
      <div className="flex gap-[24px]">
        {item?.map((item) => (
          <ItemCard item={item} key={`best-item-${item.id}`} />
        ))}
      </div>
    </div>
  );
}

export default AllItemSection;
