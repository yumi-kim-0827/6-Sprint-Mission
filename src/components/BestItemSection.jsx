import { useState } from "react";
import { getProduct } from "../api/api";
//베스트 상품

function BestItemSection() {
  const [Item, setItem] = useState();

  const fetchDate = async ({ orderBy }) => {
    const products = await getProduct({ orderBy });
    setItem(products.list);
  };

  return (
    <div>
      <h1>베스트 상품</h1>
      <div>date</div>
    </div>
  );
}

export default BestItemSection;
