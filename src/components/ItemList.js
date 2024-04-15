import "./ItemList.css";
import favoriteIcon from "../assets/icon/ic_favorite.svg";

function Item({ item }) {
  const { name, images, price, favoriteCount } = item;
  const priceString = `${price.toLocaleString("ko-KR")}원`;

  return (
    <article className="item">
      <img className="item-image" src={images[0]} alt="상품 이미지" />
      <div className="item-info">
        <p className="item-title">{name}</p>
        <p className="item-price">{priceString}</p>
        <div className="item-favorite">
          <img src={favoriteIcon} alt="좋아요 아이콘" />
          {favoriteCount}
        </div>
      </div>
    </article>
  );
}

function ItemList({ items }) {
  return (
    <ol className="item-list">
      {items.map((item) => (
        <li key={item.id}>
          <Item item={item} />
        </li>
      ))}
    </ol>
  );
}

export default ItemList;
