import { AllItem } from "./AllItemList";
import "../styles/BestItemList.css";

export default function BestItemList({ items }) {
  return (
    <section className="best-item-list">
      <h2 className="category-title">베스트 상품</h2>
      <div className="best-item-grid">
        {items.map((item) => {
          return (
            <div key={item.id}>
              <AllItem item={item} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
