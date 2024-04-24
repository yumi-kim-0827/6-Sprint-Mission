import React from "react";
import "./ShowBestProducts.css";
import likeicon from "../assets/like-icon.png";
import { Link } from "react-router-dom";

function BestProduct({ name, price, favoriteCount, images }) {
  const formatedPrice = price.toLocaleString();

  return (
    <div className="BestProductItem">
      <img className="BestProductItem-Img" src={images} alt={name} />
      <div className="BestProductItem-Name">{name} 팝니다</div>
      <div className="BestProductItem-Price">{formatedPrice}원</div>
      <div className="BestProductItem-Favorite">
        <img src={likeicon} alt="좋아요" />
        <p>{favoriteCount}</p>
      </div>
    </div>
  );
}

const ShowBestProducts = ({ products }) => {
  return (
    <main className="Main">
      <div className="best">
        <h2>베스트 상품</h2>
      </div>

      <ul className="BestProductsList">
        {products.map((item) => {
          return (
            <li key={item.id}>
              <Link to={`/Items/${item.id}`}>
                <BestProduct {...item} />
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default ShowBestProducts;
