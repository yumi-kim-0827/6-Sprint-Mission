import "./OnSaleProducts.css";
import NavOnSaleProducts from "./NavOnSaleProducts";
import { ItemList } from "./ItemList";

export default function OnSaleProducts() {
  return (
    <div className="container-onSaleProducts">
      <NavOnSaleProducts />
      <ItemList />
    </div>
  );
}
