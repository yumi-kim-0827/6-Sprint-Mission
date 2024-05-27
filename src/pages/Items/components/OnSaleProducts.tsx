import "./OnSaleProducts.css";
import NavOnSaleProducts from "./NavOnSaleProducts";
import ItemList from "./ItemList";

const OnSaleProducts: React.FC = () => {
  return (
    <div className="container-onSaleProducts">
      <NavOnSaleProducts />
      <ItemList />
    </div>
  );
};

export default OnSaleProducts;
