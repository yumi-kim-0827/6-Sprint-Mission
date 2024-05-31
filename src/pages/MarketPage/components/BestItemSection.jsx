import React, { useEffect, useState } from "react";
import { getProduct } from "../../../api/api";
import ItemCard from "./ItemCard";
//베스트 상품

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    return 1;
  } else if (width < 1280) {
    return 2;
  } else {
    return 4;
  }
};

function BestItemSection() {
  const pageFromStorage = Number(sessionStorage.getItem("page")) || 1;
  const [order, setOrder] = useState("favorite");
  const [item, setItem] = useState([]);
  const [page, setPage] = useState(pageFromStorage);
  const [pageSize, setPageSize] = useState(getPageSize());

  // const handleSelection = (option) => {
  //   setItem(option);
  // };

  useEffect(() => {
    sessionStorage.setItem("page", page);

    const handleResize = () => {
      setPageSize(getPageSize());
    };

    window.addEventListener("favorite", handleResize);

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
    <div className="max-w-[1200px] h-[406px]">
      <h1 className="text-[20px] font-[700]">베스트 상품</h1>
      <div className="flex gap-[24px]">
        {item?.map((item) => (
          <ItemCard item={item} key={`best-item-${item.id}`} />
        ))}
      </div>
    </div>
  );
}

export default BestItemSection;
