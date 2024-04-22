import ItemCard from "./ItemCard";
import useItemCount from "./useItemCount";

export const ItemList = ({ items }) => {
  const maxVisibleItems = useItemCount();

  return (
    <div className="cards-container">
      {items.map((item, i) => {
        if (maxVisibleItems === 4) {
          return i >= maxVisibleItems ? null : (
            <ItemCard key={item.id} mobile item={item} />
          );
        } else if (maxVisibleItems === 6) {
          return i >= maxVisibleItems ? null : (
            <ItemCard key={item.id} tablet item={item} />
          );
        } else {
          return i >= maxVisibleItems ? null : (
            <ItemCard key={item.id} pc item={item} />
          );
        }
      })}
    </div>
  );
};
