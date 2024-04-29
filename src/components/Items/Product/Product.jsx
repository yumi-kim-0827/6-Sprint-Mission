import iconHeart from "../../../assets/images/items/ic_heart.svg";
import { Link } from "react-router-dom";

import "./product.css";

const Product = ({ product, isAllSection }) => {
  return (
    <Link to={`./${product.id}`} className="product_wrap">
      {isAllSection ? (
        <>
          <img
            className="all_img"
            src={product.images}
            alt={product.name}
          ></img>
          <div className="all_name">{product.name}</div>
          <div className="all_price">{product.price}원</div>
          <div className="all_heart">
            <img
              className="all_heart_icon"
              src={iconHeart}
              alt="icon_heart"
            ></img>
            <span className="all_heart_count">{product.favoriteCount}</span>
          </div>
        </>
      ) : (
        <>
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
            <span className="best_heart_count">{product.favoriteCount}</span>
          </div>
        </>
      )}
    </Link>
  );
};

export default Product;
