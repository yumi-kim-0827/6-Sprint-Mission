import Card from "./Card";
import "./../css/ListItems.css";

function ListItems({ items, gridCol }) {
  const className = `ListItems ${gridCol}`;
  return (
    <ul className={className}>
      {items &&
        items.map((item) => {
          return (
            <li key={item.id}>
              <Card item={item} />
            </li>
          );
        })}
    </ul>
  );
}

export default ListItems;
