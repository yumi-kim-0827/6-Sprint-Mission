import "./Items.css";
import heart from "./images/ic_heart.png";
import { FormatCurrencyWon } from "./FormatCurrencyWon";

function ItemsAllItem({ item }) {
  return (
    <div className="items-box items-all">
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

function ItemsAll({ items }) {
  return (
    <div className="item-container">
      {items.map((item) => {
        return (
          <div className="item-box" key={item.id}>
            <ItemsAllItem item={item} />
          </div>
        );
      })}
    </div>
  );
}

export default ItemsAll;
