import heartIcon from "../assets/icons/ic_heart.svg";
import "../css/Item.css";

function Item({ item, type }) {
  const { images, name, price, favoriteCount } = item;
  const itemType =
    type === "best-item"
      ? "best-items__img-container"
      : "all-items__img-container";

  const priceTag = `${price.toLocaleString()}원`;

  return (
    <div>
      <div className={itemType}>
        <img className="item__img" src={images[0]} alt="item"></img>
      </div>
      <div className="item__description-container">
        <div className="item__name">{name}</div>
        <div className="item__price">{priceTag}</div>
        <div className="item__favorite-container">
          <img src={heartIcon} alt="heart-icon"></img>
          <div className="item__favorite-count">{favoriteCount}</div>
        </div>
      </div>
    </div>
  );
}

export default Item;
