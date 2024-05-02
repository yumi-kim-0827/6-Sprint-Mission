import { Link } from "react-router-dom";
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

  const [searchText, setSearchText] = useState("");

  const sortedProducts = products.sort((a, b) => b[order] - a[order]);

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

  const handleToggleClick = (option) => {
    if (option === "newest") {
      setOrder("createdAt");
    } else if (option === "likes") {
      setOrder("favoriteCount");
    }
  };

  return (
    <div className="products-list">
      <div>
        <h2 className="best-product">베스트 상품</h2>
        <BestProductsList products={favoriteProducts}></BestProductsList>
      </div>
      <div className="search-container">
        <h2>전체 상품</h2>
        <div className="search-bar">
          <form className="search-bar__form">
            <div className="search-bar-wrapper">
              <input
                className="search-bar-wrapper__input"
                name="keyword"
                placeholder=" 검색할 상품을 입력해주세요"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              ></input>
              {searchText ? null : (
                <img
                  className="search-bar-wrapper__image"
                  src={searchImg}
                  alt="검색"
                ></img>
              )}
            </div>
            <Link to="/additem" className="add-button">
              상품 등록하기
            </Link>
          </form>
          <ToggleMenu onClick={handleToggleClick} />
        </div>
      </div>
      <div>
        <ProductsList products={sortedProducts}></ProductsList>
      </div>
    </div>
  );
}

export default UsedMarketPage;
