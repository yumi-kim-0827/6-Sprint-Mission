import "../styles/BestItem.css";
import like from "../assets/like.svg";

function BestItem(item) {
  return (
    <div className="best-item-content">
      <img src={item.img} alt={item.name} />
      <p className="best-item-title">{item.name}</p>
      <p className="best-item-price">{item.price}</p>
      <div className="best-item-likes">
        <img src={like} alt={item.name} />
        <p className="best-item-like-count">{item.favoriteCount}</p>
      </div>
    </div>
  );
}

export default BestItem;
