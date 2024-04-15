import "./ProductsList.css";

function ProductsListItem({ item }) {

  return (
    <div className="ProductsListItem">
      <img className="ProductsListItem-img" src={item.images} alt={item.name} />
      <div>
        <h1>{item.name}</h1>
        <p>{item.price}</p>
        <p>{item.favoriteCount}</p>
      </div>
    </div>
  );
}

function ProductsList({ items }) {
  return (
    <ul className="ItemContainer">
      {items.map((item) => {
        return (
          <li key={item.id}>
            <ProductsListItem item={item} />
          </li>
        );
      })}
    </ul>
  );
}

export default ProductsList;
