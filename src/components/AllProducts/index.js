import { useState, useEffect } from "react";
import { getProducts } from "../../api";
import ProductCard from "../ProductCard";
import Button from "../Button";
import DropDown from "../DropDown";
import "./index.css";

const ORDERS = [
  {
    id: 0,
    orderBy: "recent",
    label: "최신순",
  },
  {
    id: 1,
    orderBy: "favorite",
    label: "좋아요순",
  },
];

function AllProducts() {
  const [products, setProducts] = useState([]);

  const [order, setOrder] = useState(ORDERS[0]);

  const onSelectOrderOption = (option) => {
    setOrder(option);
  };

  const loadProducts = async (order) => {
    const allProducts = await getProducts(order, 10);
    setProducts(allProducts);
  };

  useEffect(() => {
    loadProducts(order.orderBy);
  }, [order]);

  return (
    <section className="all-product">
      <div className="all-product-header">
        <h2 className="all-product-title">전체 상품</h2>
        <div className="all-product-controls">
          <div className="all-product-search">
            <div className="all-product-search-icon">
              <img src="images/ic_search.svg" alt="검색 아이콘" />
            </div>
            <input
              className="all-product-search-input"
              placeholder="검색할 상품을 입력해주세요"
            />
          </div>
          <Button to="/addItem">상품 등록하기</Button>
          <div>
            <DropDown
              options={ORDERS}
              selectedOption={order}
              onSelectOption={onSelectOrderOption}
            />
          </div>
        </div>
      </div>
      <ul className="all-product-list">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard type="small" product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AllProducts;
