function Item({ item }) {
  const { name, images, favoriteCount, price } = item;
  return (
    <>
      <div>{name}</div>
      <div>{price.toLocaleString()}원</div>
      <div>{favoriteCount}</div>
    </>
  );
}

function ItemList({ items }) {
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Item item={item} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ItemList;
