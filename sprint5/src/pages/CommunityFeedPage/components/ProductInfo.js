import React from "react";
import favoriteIcon from "../../../assets/favorite-icon.svg";
import "./ProductInfo.css";

function ProductInfo({ product }) {
  const { images, name, price, description, tags, favoriteCount } = product;

  const formatPriceWithCommas = (price) => {
    return price.toLocaleString("en-US");
  };

  return (
    <section className="productInfo">
      <img className="productInfo__img" src={images} alt={name} />
      <div className="productInfoItems">
        <h2 className="productInfoItems__name">{name}</h2>
        <h1 className="productInfoItems__price">
          {formatPriceWithCommas(price)}원
        </h1>
        <p className="productInfoItems__descriptionTitle">상품 소개</p>
        <p className="productInfoItems__description">{description}</p>
        <div className="productInfoBottomContainer">
          <p className="productInfoBottomContainer__tagsTitle">상품 태그:</p>
          <div className="productInfoBottomContainer__tags">
            {tags.map((tag) => (
              <button className="productInfoBottomContainer__tag" key={tag}>
                #{tag}
              </button>
            ))}
          </div>
          <button className="productInfoBottomContainer__favCount">
            <img src={favoriteIcon} alt="favoriteIcon" />
            <p>{favoriteCount}</p>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductInfo;
