import "../../styles/Items/Item.css";

const Item = ({ imgSrc, name, price, favoriteCount }) => {
  return (
    <div className={"Item"}>
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

export default Item;
