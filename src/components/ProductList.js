function ProductListItem({ item }) {
  const { images, name, description, price } = item;

  return (
    <div className="ProductListItem">
      <img src={images} alt={name} />
      <p>{description}</p>
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  );
}

function ProductList({ items }) {
  return (
    <ul class="ProductList">
      {items.map((item) => {
        return (
          <li key={items.id}>
            <ProductListItem item={item} />
          </li>
        );
      })}
    </ul>
  );
}
export default ProductList;
