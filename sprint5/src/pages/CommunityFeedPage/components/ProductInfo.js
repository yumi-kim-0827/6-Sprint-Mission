import React from "react";

function ProductInfo() {
  const { images, name, price, description, tags, favoriteCount } = item;

  const formatPriceWithCommas = (price) => {
    return price.toLocaleString("en-US");
  };

  return (
    <section>
      <img src={images} alt={name} />
      <div>
        <h2>{name}</h2>
        <h1>{formatPriceWithCommas(price)}원</h1>
        <p>상품 소개</p>
        <p>{description}</p>
        <div>
          <p>상품 태그:</p>
          <div>
            {tags.map((tag) => (
              <button key={tag}>{tag}</button>
            ))}
          </div>
          <button>{favoriteCount}</button>
        </div>
      </div>
    </section>
  );
}

export default ProductInfo;
