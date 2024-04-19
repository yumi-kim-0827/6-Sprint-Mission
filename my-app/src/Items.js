import { useEffect, useState } from "react";
import "./items.css";
import logoImg from "./assets/logo.png";
import { getProducts } from "./api";
import ProductsList from "./components/productsList";

const Items = () => {
  const [product, setProduct] = useState([]);
  const [order, setOrder] = useState("createdAt");

  const handleLoad = async () => {
    const { item } = await getProducts();
    setProduct(item);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <nav>
        <a href="../main/index.html" style={{ textDecorationLine: "none" }}>
          <img className="logoImg" src={logoImg} />
        </a>
        <p className="boardMenu">자유게시판</p>
        <p className="marketMenu">중고마켓</p>
        <a href="../login/login.html" style={{ textDecorationLine: "none" }}>
          <button className="loginButton">로그인</button>
        </a>
      </nav>
      <div className="productsList">
        <div className="bestProducts">
          <p className="productsText">베스트상품</p>
        </div>
        <div className="entireProducts">
          <div className="entireProudctsnav">
            <p className="productsText">전체 상품</p>
            <ProductsList items={product} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Items;
