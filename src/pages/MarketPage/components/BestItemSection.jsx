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
  const [item, setItem] = useState([]);
  const [page, setPage] = useState(pageFromStorage);
  const [pageSize, setPageSize] = useState(getPageSize());

  const fetchDate = async ({ order }) => {
    const products = await getProduct({ order, page, pageSize });
    setItem(products.list);
  };

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };
    window.addEventListener("resize", handleResize);
    fetchDate({ order: "favorite", pageSize });
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pageSize]);

  return (
    <div className="w-[1200px] h-[406px]">
      <h1 className="text-[20px] font-[700]">베스트 상품</h1>
      <div className="gap-[24px] w-[282px] h-[362px]">
        {item?.map((item) => (
          <ItemCard item={item} key={`best-item-${item.id}`} />
        ))}
      </div>
    </div>
  );
}

export default BestItemSection;
