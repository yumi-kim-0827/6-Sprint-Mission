import React from "react";
import "../css/productElement.css";
import favoriteCountIcon from "../image/favorite_count_icon.png";

const ProductElement = ({ product }) => {
  return (
    <a href="/">
      <div className="product-element-section">
        <div className="product-element-image">
          <img src={product.images[0]} alt="상품 이미지"></img>
        </div>
        <div className="product-element-details">
          <span className="product-element-name">{product.name}</span>
          <span className="product-element-price">{product.price}</span>
          <div className="product-element-favoriteCount-section">
            <img
              className="product-element-favoriteCount-icon"
              src={favoriteCountIcon}
              alt="좋아요 하트 이모티콘"
            ></img>
            <span className="product-element-favoriteCount">
              {product.favoriteCount}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProductElement;
