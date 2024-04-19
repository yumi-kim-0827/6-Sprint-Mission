import Item from "./Item";
import "../css/BestItems.css";

function BestItems({ className, items }) {
  return (
    <div className={className}>
      <h2 className="best-items__name-tag">베스트 상품</h2>
      <div className="best-items__layout">
        {items.map((item) => {
          return (
            <Item
              key={item.id}
              className="best-items__img-container"
              item={item}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BestItems;
