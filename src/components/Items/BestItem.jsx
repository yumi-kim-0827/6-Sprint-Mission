import "../../styles/Items/BestItem.css";

const BestItem = ({ imgSrc, name, price, favoriteCount }) => {
  return (
    <div className="BestItem">
      <div className={"imgWrapper"}>
        <img src={imgSrc} alt="상품 이미지" />
      </div>
      <div className={"textWrapper"}>
        <p className={"nameText"}>{name}</p>
        <p className={"priceText"}>{price}</p>
        <p className={"likes"}>{favoriteCount}</p>
      </div>
    </div>
  );
};

export default BestItem;
