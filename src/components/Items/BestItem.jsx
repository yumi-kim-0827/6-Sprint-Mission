import "../../styles/Items/BestItem.css";

const BestItem = ({ imgSrc, name, price, favoriteCount }) => {
  return (
    <div className="BestItem">
      <div className={"BestItem__imgWrapper"}>
        <img src={imgSrc} alt="상품 이미지" />
      </div>
      <div className={"BestItem__textWrapper"}>
        <p className={"BestItem__textWrapper_nameText"}>{name}</p>
        <p className={"BestItem__textWrapper_priceText"}>{price}</p>
        <p className={"BestItem__textWrapper_likes"}>{favoriteCount}</p>
      </div>
    </div>
  );
};

export default BestItem;
