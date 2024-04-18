import ProductCard from "./ProductCard.js";
import "../item/BestProducts.css";
import { useEffect, useState } from "react";
import { getProductsInfo } from "./api.js";
function BestProductsSection({ size }) {
  const [bestProducts, setBestProducts] = useState([]);
  const [order] = useState("favorite");
  let pageSize = 0;
  if (size.width >= 1200) {
    pageSize = 4;
  } else if (size.width >= 768) {
    pageSize = 2;
  } else if (size.width >= 375) {
    pageSize = 1;
  }

  const handleLoad = async (query) => {
    const { list } = await getProductsInfo(query);
    setBestProducts(list);
  };
  useEffect(() => {
    handleLoad({ pageSize: pageSize, order: order });
  }, [order, pageSize]);

  return (
    <div className="bestProductsSection">
      <h1>베스트 상품</h1>
      <div className="bestProducts">
        {bestProducts.map((product) => (
          <ProductCard key={product.id} product={product} category="best" />
        ))}
      </div>
    </div>
  );
}

export default BestProductsSection;
