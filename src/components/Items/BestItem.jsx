import "../../styles/Items/BestItem.css";
import { formatCurrency } from "../../utils/utils";
import iconLikes from "../../assets/Icon_likes.svg";

const BestItem = ({ imgSrc, name, price, favoriteCount }) => {
  return (
    <div className="bestItem">
      <div className="bestItem__img-frame">
        <img src={imgSrc} alt="상품 이미지" />
      </div>
      <div className="bestItem__text-wrapper">
        <p className="bestItem__name">{name}</p>
        <p className="bestItem__price">{formatCurrency(price)}</p>
        <p className="bestItem__likes">
          <img src={iconLikes} alt="좋아요 아이콘" />
          {favoriteCount}
        </p>
      </div>
    </div>
  );
};

export default BestItem;
