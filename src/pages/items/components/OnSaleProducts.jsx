import "./OnSaleProducts.css";
import NavOnSaleProducts from "./NavOnSaleProducts";
import { ItemList } from "./ItemList";

export default function OnSaleProducts({ items }) {
  return (
    <div className="container-onSaleProducts">
      <NavOnSaleProducts />
      <ItemList items={items} />
    </div>
  );
}
