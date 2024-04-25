import "./Items.css";
import heart from "../assets/ic_heart.png";
import { FormatCurrencyWon } from "../utils/formatCurrencyWon";

function ItemsBestItem({ images, name, price, favoriteCount }) {
  return (
    <div className="items-box items-best">
      <div className="image-box">
        <img className="item-image" src={images} alt={name} />
      </div>
      <div className="description-box">
        <p className="item-name">{name}</p>
        <p className="item-price">{FormatCurrencyWon(price)}</p>
        <div className="likes-box">
          <a>
            <img src={heart} alt="like-button" />
          </a>
          <p className="item-likes">{favoriteCount}</p>
        </div>
      </div>
    </div>
  );
}

function ItemsBest({ items }) {
  return (
    <div className="item-container">
      {items.map((item) => {
        return (
          <div className="item-box" key={item.id}>
            <ItemsBestItem
              images={item.images}
              name={item.name}
              price={item.price}
              favoriteCount={item.favoriteCount}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ItemsBest;
