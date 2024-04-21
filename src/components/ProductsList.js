import "./ProductsList.css";
import favoriteImg from "../assets/favorite.png";

function ProductsListItem({ product }) {
  return (
    <div className="ProductsListItem">
      <img
        className="ProductsListItem-img"
        src={product.images[0]}
        alt={product.name}
      />
      <div>
        <h3>{product.description}</h3>
        <h2>{product.price}원</h2>
        <div className="favorite-contents">
          <img src={favoriteImg} alt="favorite-img" />
          <h3>{product.favoriteCount}</h3>
        </div>
      </div>
    </div>
  );
}

function ProductsList({ products }) {
  return (
    <ul className="ProductsList">
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
