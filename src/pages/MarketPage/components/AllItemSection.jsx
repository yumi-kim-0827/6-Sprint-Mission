import { useEffect, useState } from "react";
import { getProduct } from "../../../api/api";
//전체 상품

function AllItemSection() {
  const [order, setOrder] = useState("recent");
  const [Item, setItem] = useState([]);

  const fetchDate = async ({ order }) => {
    const products = await getProduct({ order });
    setItem(products.list);
  };

  const handleSelection = (option) => {
    setItem(option);
  };

  return (
    <div>
      <h1>전체 상품</h1>
      <div>date</div>
    </div>
  );
}

export default AllItemSection;
