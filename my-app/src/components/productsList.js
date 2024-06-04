function ProductListItem({ item }) {
  const { images, tags, price, description, name } = item;

  return (
    <div className="productListItem">
      <img src={images} alt="상품이미지" />
      <div>{tags}</div>
      <div>{price}</div>
      <div>{description}</div>
      <div>{name}</div>
    </div>
  );
}

function ProductsList({ items }) {
  return (
    <ul className="productList">
      {items.map((item) => (
        <li key={item.id}>
          <ProductListItem item={item} />
        </li>
      ))}
    </ul>
  );
}

export default ProductsList;
