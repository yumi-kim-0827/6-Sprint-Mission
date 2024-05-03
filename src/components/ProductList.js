function ProductListItem({ item }) {

  return (
    <div>
      <img src={item.images[0]} alt={item.name} />
      <div>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <p>{item.favoriteCount}</p>
        <p>{item.price}</p>
        <p>{item.content}</p>
      </div>
    </div>
  );
}

function ProductList({ items }) {
  return (
    <ul>
      {items?.map((item) => {
        return (
          <li key={item.id}>
            <ProductListItem item={item} ></ProductListItem>
          </li>
        );
      })}
    </ul>
  );
}

export default ProductList;
