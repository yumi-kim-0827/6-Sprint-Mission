import { Link } from "react-router-dom";
import "../styles/BestItemList.css";
import { AllItem } from "./AllItemList";

function BestItemList({ items }) {
  return (
    <section className="best-item-list">
      <h2 className="category-title">베스트 상품</h2>
      <div className="best-item-grid">
        {items.map((item) => {
          return (
            <Link
              to={`/items/${item.id}`}
              key={item.id}
              className="item-container"
            >
              <div key={item.id}>
                <AllItem item={item} />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
export default BestItemList;
