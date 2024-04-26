import { useEffect, useState } from "react";
import { getProduct } from "../api/api";
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
  const [item, setItem] = useState([]);
  const [pageSize, setPageSize] = useState();

  const fetchDate = async ({ order, pageSize }) => {
    const products = await getProduct({ order, pageSize });
    setItem(products.list);
  };

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize);
    };
    window.addEventListener("resize", handleResize);
    fetchDate({ order: "favorite", pageSize });
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pageSize]);

  return (
    <div>
      <h1>베스트 상품</h1>
      <div>
        {item?.map((item) => (
          <ItemCard item={item} key={`best-item-${item.id}`} />
        ))}
      </div>
    </div>
  );
}

export default BestItemSection;
