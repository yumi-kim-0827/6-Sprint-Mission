import "../../styles/Items/Item.css";
import iconLikes from "../../assets/Icon_likes.svg";

const Item = ({ imgSrc, name, price, favoriteCount }) => {
  return (
    <div className={"Item"}>
      <div className={"imgWrapper"}>
        <img src={imgSrc} alt="상품 이미지" />
      </div>
      <div className={"textWrapper"}>
        <p className={"nameText"}>{name}</p>
        <p className={"priceText"}>{price}</p>
        <p className={"likes"}>
          <img src={iconLikes} alt="좋아요 아이콘" />
          {favoriteCount}
        </p>
      </div>
    </div>
  );
};

export default Item;
