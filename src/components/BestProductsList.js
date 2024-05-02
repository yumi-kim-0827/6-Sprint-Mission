import "./BestProductsList.css";
import BestProductsListItem from "./BestProductsListItem";

function BestProductsList({ products }) {
  const limitedFavoriteProducts = products.slice(0, 4);
  return (
    <ul className="best-products-list">
      {limitedFavoriteProducts.map((product) => {
        return (
          <li key={product.id}>
            <BestProductsListItem product={product} />
          </li>
        );
      })}
    </ul>
  );
}

export default BestProductsList;
