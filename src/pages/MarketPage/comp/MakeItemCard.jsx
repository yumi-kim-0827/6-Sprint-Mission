import React from "react";
import heart from "../../../assets/ic_heart.png";
import { FormatCurrencyWon } from "../../../utils/FormatCurrencyWon";

function MakeItemCard({ item }) {
  return (
    <div className="items-box">
      <div className="image-box">
        <img className="item-image" src={item.images} alt={item.name} />
      </div>
      <div className="description-box">
        <p className="item-name">{item.name}</p>
        <p className="item-price">{FormatCurrencyWon(item.price)}</p>
        <div className="likes-box">
          <a>
            <img src={heart} alt="like-button" />
          </a>
          <p className="item-likes">{item.favoriteCount}</p>
        </div>
      </div>
    </div>
  );
}

export default MakeItemCard;
