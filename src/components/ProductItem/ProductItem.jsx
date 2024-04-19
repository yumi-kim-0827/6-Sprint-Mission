import React from "react";
import "./ProductItem.css";
import favoriteIcon from "../../assets/images/favorite_icon.svg";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  const { item } = props;
  const { name, price, images, favoriteCount } = item;
  const customPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // 숫자 가격(,) 변환

  return (
    <>
      <Link className="img-area">
        <img src={images} alt={name} />
      </Link>
      <div className="text-area">
        <Link className="title">{name}</Link>
        <p className="price">
          <span>{customPrice}</span>원
        </p>
        <div className="icon-box">
          <button className="icon-img">
            <img src={favoriteIcon} alt="좋아요" />
          </button>
          <span className="count">{favoriteCount}</span>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
