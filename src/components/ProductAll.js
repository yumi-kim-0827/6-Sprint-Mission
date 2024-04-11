import iconHeart from "../assets/items/ic_heart.svg";

import { useState, useEffect } from "react";

import { getProducts } from "./api";
import { Link } from "react-router-dom";
import { Desktop, Mobile, Tablet } from "./MediaQuery";

const ProductAll = () => {
  const [order, setOrder] = useState("recent");

  const [products, setProducts] = useState([]);

  const sortedProducts = products.sort((a, b) => b[order] - a[order]);

  const handleChange = (e) => {
    setOrder(e.target.value);
  };

  const handleLoad = async (orderQuery) => {
    const { list } = await getProducts(orderQuery);
    setProducts(list);
  };

  useEffect(() => {
    handleLoad(order);
  }, [order]);

  return (
    <div>
      <div className="all_top_warp">
        <span className="all_title">전체 상품</span>

        <div className="all_top_main">
          <input className="all_search" />
          <Link to={"/additem"} className="all_add_item blue">
            상품 등록하기
          </Link>
          <select onChange={handleChange}>
            <option className="sort_recent" value="recent">
              최신순
            </option>
            <option className="sort_favorite" value="favorite">
              베스트순
            </option>
          </select>
        </div>
      </div>

      <Desktop>
        {sortedProducts.slice(0, 12).map((product) => (
          <div className="all_wrap">
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
          </div>
        ))}
      </Desktop>

      <Tablet>
        {sortedProducts.slice(0, 12).map((product) => (
          <div className="all_wrap">
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
          </div>
        ))}
      </Tablet>

      <Mobile>
        {sortedProducts.slice(0, 12).map((product) => (
          <div className="all_wrap">
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
          </div>
        ))}
      </Mobile>
    </div>
  );
};

export default ProductAll;
