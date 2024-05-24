import { Link } from "react-router-dom";
import { Item } from "interfaces/item.interface";
import HeartIconUrl from "assets/icons/icon-heart.svg";

function ItemCard({ item }: { item: Item }) {
  return (
    <div className="item-card">
      <Link to={`/items/${item.id}`}>
        <img src={item.images[0]} alt={item.name} className="item-card-img" />
      </Link>

      <div className="item-card-description">
        <Link to={`/items/${item.id}`}>
          <h2 className="item-name">{item.name}</h2>
        </Link>

        <p className="item-price">{item.price.toLocaleString()}원</p>

        <div className="item-favorite">
          <img src={HeartIconUrl} alt="하트 아이콘" />
          {item.favoriteCount}
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
