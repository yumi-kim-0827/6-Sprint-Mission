import "./ProductsList.css";
import ProductsListItem from "./ProductsListItem";

function ProductsList({ products }) {
  return (
    <ul className="Products-list">
      {products.map((product) => {
        return (
          <li key={product.id}>
            <ProductsListItem product={product} />
          </li>
        );
      })}
    </ul>
  );
}

export default ProductsList;
