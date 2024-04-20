import "./ProductBest.css";

import iconHeart from "../../../assets/images/items/ic_heart.svg";

import { useState, useEffect } from "react";

import { getProducts } from "../../../api/ItemsApi";
import { Desktop, Mobile, Tablet } from "../../MediaQuery";

const ProductBest = () => {
  const [products, setProducts] = useState([]);

  const handleLoad = async ({ orderBy }) => {
    const { list } = await getProducts({ orderBy });
    setProducts(list);
  };

  useEffect(() => {
    handleLoad({ orderBy: "favorite" });
  }, []);

  return (
    <>
      <Desktop>
        <span className="best_title">베스트 상품</span>
        <div className="best_content">
          {products.slice(0, 4).map((product) => (
            <div className="best_wrap" key={product.id}>
              <img
                className="best_img"
                src={product.images}
                alt={product.name}
              ></img>
              <div className="best_name">{product.name} 팝니다</div>
              <div className="best_price">{product.price}원</div>
              <div className="best_heart">
                <img
                  className="best_heart_icon"
                  src={iconHeart}
                  alt="icon_heart"
                ></img>
                <span className="best_heart_count">
                  {product.favoriteCount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Desktop>
      <Tablet>
        <span className="best_title">베스트 상품</span>
        <div className="best_content">
          {products.slice(0, 2).map((product) => (
            <div className="best_wrap" key={product.id}>
              <img
                className="best_img"
                src={product.images}
                alt={product.name}
              ></img>
              <div className="best_name">{product.name}</div>
              <div className="best_price">{product.price}원</div>
              <div className="best_heart">
                <img
                  className="best_heart_icon"
                  src={iconHeart}
                  alt="icon_heart"
                ></img>
                <span className="best_heart_count">
                  {product.favoriteCount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Tablet>
      <Mobile>
        <span className="best_title">베스트 상품</span>
        <div className="best_content">
          {products.slice(0, 1).map((product) => (
            <div className="best_wrap" key={product.id}>
              <img
                className="best_img"
                src={product.images}
                alt={product.name}
              ></img>
              <div className="best_name">{product.name}</div>
              <div className="best_price">{product.price}원</div>
              <div className="best_heart">
                <img
                  className="best_heart_icon"
                  src={iconHeart}
                  alt="icon_heart"
                ></img>
                <span className="best_heart_count">
                  {product.favoriteCount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Mobile>
    </>
  );
};

export default ProductBest;
