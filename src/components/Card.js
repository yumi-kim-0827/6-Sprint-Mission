import { useState } from "react";
import style from "../styles/Card.module.css";
import classNames from "classnames/bind";

const cn = classNames.bind(style);

const Card = ({ product }) => {
  const [isLike, setLike] = useState(false);

  const handleToggle = () => {
    setLike(!isLike);
  };

  return (
    <div className={cn("card")}>
      <img
        className={cn("product-img")}
        src={product.images}
        alt={product.name}
      />
      <div className={cn("product-desc")}>
        <h4 className={cn("product-name")}>{product.name}</h4>
        <p className={cn("product-price")}>{`${product.price
          .toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원`}</p>
        <span className={cn("product-favorite")}>
          <button
            onClick={handleToggle}
            className={cn("favorite-btn", isLike ? "on" : "")}
          ></button>
          {product.favoriteCount}
        </span>
      </div>
    </div>
  );
};

export default Card;
