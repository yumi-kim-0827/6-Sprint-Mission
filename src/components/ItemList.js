import Item from "./Item";
import "./ItemList.css";

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
