import "./BestProductsList.css";
import favoriteImg from "../assets/favorite.png";

function BestProductsListItem({ product }) {
  return (
    <div className="BestProductsListItem">
      <img
        className="BestProductsListItem-img"
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

function BestProductsList({ products }) {
  const limitedFavoriteProducts = products.slice(0, 4);
  return (
    <ul className="BestProductsList">
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
