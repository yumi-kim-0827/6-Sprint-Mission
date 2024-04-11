import "./ProductAll.css";

import iconHeart from "../assets/items/ic_heart.svg";
import iconSearch from "../assets/items/ic_search.svg";
import iconArrow from "../assets/items/ic_arrow_down.svg";

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
    <>
      <div className="all_top_warp">
        <Desktop>
          <span className="all_title">전체 상품</span>
        </Desktop>
        <Tablet>
          <span className="all_title">판매중인 상품</span>
        </Tablet>
        <Mobile>
          <span className="all_title">판매중인 상품</span>
        </Mobile>
        <div className="all_top_main">
          <div className="all_search_wrap">
            <img
              className="all_search_icon"
              src={iconSearch}
              alt="icon_search"
            />
            <input
              className="all_search"
              placeholder="검색할 상품을 입력해주세요"
            />
          </div>

          <Link to={"/additem"} className="all_add_item blue">
            상품 등록하기
          </Link>

          <div className="all_sort_wrap">
            <select className="all_sort" onChange={handleChange}>
              <option className="sort_option sort_recent" value="recent">
                최신순
              </option>
              <option className="sort_option sort_favorite" value="favorite">
                좋아요순
              </option>
            </select>
            <img className="sort_arrow" src={iconArrow} alt="icon_arrow"></img>
          </div>
        </div>
      </div>

      <div className="all_content">
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
          {sortedProducts.slice(0, 6).map((product) => (
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
          {sortedProducts.slice(0, 4).map((product) => (
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
    </>
  );
};

export default ProductAll;
