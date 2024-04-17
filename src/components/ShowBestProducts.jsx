import React from "react";
import "./ShowBestProducts.css";
import likeicon from "../assets/like-icon.png";

function BestProduct({ item }) {
  const { name, price, favoriteCount, images } = item;
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
        {products
          .map((item) => {
            return (
              <li key={item.id}>
                <BestProduct item={item} />
              </li>
            );
          })
          .slice(0, 4)}
      </ul>
    </main>
  );
};

export default ShowBestProducts;
