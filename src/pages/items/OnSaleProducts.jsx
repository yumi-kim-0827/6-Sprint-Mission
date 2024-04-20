import "./OnSaleProducts.css";
import NavOnSaleProducts from "./NavOnSaleProducts";
import ItemCard from "../../components/ItemCard";
import useItemCount from "../../hooks/useItemCount";

export default function OnSaleProducts({ items }) {
  let count = useItemCount();

  return (
    <div className="container-onSaleProducts">
      <NavOnSaleProducts />
      <div className="cards-container">
        {items?.map((item, i) => {
          if (count === 4) {
            return i >= count ? null : <ItemCard mb item={item} />;
          } else if (count === 6) {
            return i >= count ? null : <ItemCard tb item={item} />;
          } else {
            return i >= count ? null : <ItemCard pc item={item} />;
          }
        })}
      </div>
      <div>판매 중인 상품 영역</div>
    </div>
  );
}
