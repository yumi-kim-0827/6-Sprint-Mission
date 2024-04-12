import Item from "./Item";
import "./BestItemList.css";

function BestItemList({ items }) {
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

export default BestItemList;
