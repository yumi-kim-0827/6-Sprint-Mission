import likeIcon from "../../shared/asset/ic_heart.png";
import "./ItemCard.scss";

export const ItemCard = ({ item, cardType }) => {
  const { images, price, name, favoriteCount } = item;
  return (
    <div className="card">
      <img
        src={images}
        alt={name}
        className={"card__image card__image" + cardType}
      />
      <h2 className="card__name">{name}</h2>
      <p className="card__price">{price}</p>
      <div className="card__footer">
        <img src={likeIcon} alt="like button" />
        <p className="card__favoriteCount">{favoriteCount}</p>
      </div>
    </div>
  );
};
