import React from "react";
import heart from "../../../assets/ic_heart.svg";
import { formatCurrencyWon } from "../../../utils/formatCurrencyWon";
import { Link } from "react-router-dom";
import { Product } from "../../../types";

interface MakeItemCardProps {
  item: Product;
}

const MakeItemCard: React.FC<MakeItemCardProps> = ({ item }) => {
  return (
    <div className="items-box">
      <div className="image-box">
        <Link to={`/items/${item.id}`}>
          <img className="item-image" src={item.images} alt={item.name} />
        </Link>
      </div>
      <div className="description-box">
        <p className="item-name">
          <Link to={`/items/${item.id}`}>{item.name}</Link>
        </p>
        <p className="item-price">{formatCurrencyWon(item.price)}</p>
        <div className="likes-box">
          <a>
            <img src={heart} alt="like-button" />
          </a>
          <p className="item-likes">{item.favoriteCount}</p>
        </div>
      </div>
    </div>
  );
};

export default MakeItemCard;
