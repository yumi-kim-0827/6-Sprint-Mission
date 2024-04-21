import { useState, useEffect } from "react";
import { getProducts } from "../api";
import ProductsList from "../components/ProductsList";
import BestProductsList from "../components/BestProductsList";
import "./UsedMarketPage.css";
import searchImg from "../assets/search.png";
import ToggleMenu from "../components/ToggleMenu";

function UsedMarketPage() {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  const sortedProducts = products.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder("createdAt");
  const handleBestClick = () => setOrder("favoriteCount");

  const handleLoad = async () => {
    const { list } = await getProducts();
    setProducts(list);
  };

  useEffect(() => {
    handleLoad();
  }, [order]);

  useEffect(() => {
    const sortedFavoriteProducts = [...products].sort(
      (a, b) => b.favoriteCount - a.favoriteCount
    );
    setFavoriteProducts(sortedFavoriteProducts);
  }, [products]);

  return (
    <div className="products-list">
      <div>
        <h2 className="best-product">베스트 상품</h2>
        <BestProductsList products={favoriteProducts}></BestProductsList>
      </div>
      <div className="search-container">
        <h2>전체 상품</h2>
        <div className="search-bar">
          <form className="search">
            <img src={searchImg} alt="검색"></img>
            <input
              name="keyword"
              placeholder="검색할 상품을 입력해주세요"
            ></input>
            <button className="submit-btn" type="submit">
              상품 등록하기
            </button>
          </form>
          <ToggleMenu
            onNewestClick={handleNewestClick}
            onBestClick={handleBestClick}
          />
        </div>
      </div>
      <div>
        <ProductsList products={sortedProducts}></ProductsList>
      </div>
    </div>
  );
}

export default UsedMarketPage;
