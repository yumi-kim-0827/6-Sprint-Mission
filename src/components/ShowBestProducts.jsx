import React, { useEffect, useState } from "react";
import "./ShowBestProducts.css";
import likeicon from "../assets/like-icon.png";
import debounce from "./common/debounce";
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
  const [width, setWidth] = useState(4);

  const handlePageSize = (width) => {
    if (width >= 1200) {
      return 4;
    } else if (width >= 768 && width <= 1199) {
      return 2;
    } else if (width >= 380 && width <= 767) {
      return 1;
    }
  };

  const handleResize = debounce(() => {
    setWidth(window.innerWidth);
  }, 50);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setWidth(window.innerWidth);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
                <Link to={`/Items/${item.id}`}>
                  <BestProduct {...item} />
                </Link>
              </li>
            );
          })
          .slice(0, handlePageSize(width))}
      </ul>
    </main>
  );
};

export default ShowBestProducts;
