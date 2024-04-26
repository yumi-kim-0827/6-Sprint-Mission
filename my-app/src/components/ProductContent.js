import "./ProductContent.css";
import favoriteButton from "../assets/favorite-count-img.png";

const ProductContent = (items) => {
  const item = items.item;
  const name = item.name;
  const price = item.price;
  const description = item.description;
  const favoriteCount = item.favoriteCount;
  const images = item.images;
  console.log(images);
  const tags = item.tags;

  //태그 분리해줘야 함

  return (
    <>
      <div className="productContent">
        <img className="productImg" src={images} />
        <div className="productContentDiv">
          <p className="productTitle">{name}</p>
          <p className="productPrice">{price}원</p>
          <div className="line"></div>
          <p className="label">상품 소개</p>
          <p className="productDescription">{description}</p>
          <p className="label">상품 태그</p>
          <button className="favoriteButton">
            <img className="favoriteImg" src={favoriteButton} />
            {favoriteCount}
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductContent;
