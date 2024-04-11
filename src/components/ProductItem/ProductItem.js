import React from "react";
import "./ProductItem.css";
import favoriteIcon from "../../assets/images/favorite_icon.svg";

const ProductItem = (props) => {
  const { item } = props;
  const { name, price, images, favoriteCount } = item;

  return (
    <div className="product-item">
      <div className="img-area">
        <img src={images} alt={name} />
      </div>
      <div className="text-area">
        <h3 className="title">{name}</h3>
        <p className="price">{price}원</p>
        <div className="icon-box">
          <div className="icon-img">
            <img src={favoriteIcon} alt="좋아요" />
          </div>
          <span className="count">{favoriteCount}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
