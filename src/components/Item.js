import heartIcon from "../assets/icons/ic_heart.svg";
import "../css/Item.css";

function Item({ item, className }) {
  const { images, name, price, favoriteCount } = item;
  // const classNames = `item ${className}`;

  const priceTag = `${price.toLocaleString()}원`;

  return (
    <div>
      <div className={className}>
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
