import "../../styles/Items/BestItem.css";
import { formatCurrency } from "../../utils/utils";
import iconLikes from "../../assets/Icon_likes.svg";

const BestItem = ({ imgSrc, name, price, favoriteCount }) => {
  return (
    <div className="BestItem">
      <div className="BestItem__imgWrapper">
        <img src={imgSrc} alt="상품 이미지" />
      </div>
      <div className="BestItem__textWrapper">
        <p className="BestItem__textWrapper_nameText">{name}</p>
        <p className="BestItem__textWrapper_priceText">
          {formatCurrency(price)}
        </p>
        <p className="BestItem__textWrapper_likes">
          <img src={iconLikes} alt="좋아요 아이콘" />
          {favoriteCount}
        </p>
      </div>
    </div>
  );
};

export default BestItem;
