import "./OnSaleProducts.css";
import NavOnSaleProducts from "./NavOnSaleProducts";
import ItemCard from "../../../components/ItemCard";
import useItemCount from "./useItemCount";

export default function OnSaleProducts({ items }) {
  const maxVisibleItems = useItemCount();

  return (
    <div className="container-onSaleProducts">
      <NavOnSaleProducts />
      <div className="cards-container">
        {items?.map((item, i) => {
          if (maxVisibleItems === 4) {
            return i >= maxVisibleItems ? null : (
              <ItemCard mobile item={item} />
            );
          } else if (maxVisibleItems === 6) {
            return i >= maxVisibleItems ? null : (
              <ItemCard tablet item={item} />
            );
          } else {
            return i >= maxVisibleItems ? null : <ItemCard pc item={item} />;
          }
        })}
      </div>
      <div>판매 중인 상품 영역</div>
    </div>
  );
}
