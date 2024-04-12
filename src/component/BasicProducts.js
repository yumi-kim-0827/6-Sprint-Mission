import { getItems } from "../Api.js";
import { useState, useEffect, React } from "react";
import ProductList from "./ProductList.js";
import { Link } from "react-router-dom";

function BasicProducts() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");

  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleOrderChange = (newOrder) => {
    setOrder(newOrder);
  };

  const productsLoad = async (options) => {
    const { list } = await getItems(options);
    setItems(list);
  };

  useEffect(() => {
    productsLoad(order);
  }, [order]);

  return (
    <div>
      <div className="basic-product-header">
        <h2>전체 상품</h2>
        <div className="basic-product-header-inner">
          <input placeholder="검색할 상품을 입력해주세요" />
          <Link to="/AddItem">
            <button>상품 등록하기</button>
          </Link>
          <select
            value={order}
            onChange={(e) => handleOrderChange(e.target.value)}
          >
            <option value="createdAt">최신순</option>
            <option value="favoriteCount">좋아요순</option>
          </select>
        </div>
      </div>
      <div className="basic-items">
        <ProductList items={sortedItems} />
      </div>
    </div>
  );
}

export default BasicProducts;
