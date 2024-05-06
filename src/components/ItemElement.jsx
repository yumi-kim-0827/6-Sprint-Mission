import heart from "../assets/ic_heart.svg";
import "./ItemElement.css";

function ItemElement({ item }) {
  return (
    <div>
      <img className="item-img" src={item.images} alt={item.name} />
      <h1 className="item-name">{item.name}</h1>
      <div>
        <p>{item.price}</p>
        <p>
          <img src={heart} alt="하트" />
          {item.favoriteCount}
        </p>
      </div>
    </div>
  );
}

export default ItemElement;
