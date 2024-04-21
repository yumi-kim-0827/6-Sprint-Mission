function ProductListItem({ item }) {
  const { images, name, description, price } = item;

  return (
    <div className="ProductListItem">
      <img src={images} alt={name} />
      <p>{description}</p>
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
}

function ProductList({ items }) {
  return (
    <ul class="productList">
      {items.map((item) => {
        return (
          <li key={item.id}>
            <ProductListItem item={item} />
          </li>
        );
      })}
    </ul>
  );
}

export default ProductList;
