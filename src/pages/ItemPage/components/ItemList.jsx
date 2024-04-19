function Item({ item }) {
  const { name, images, favoriteCount, price } = item;
  return (
    <>
      {/*<img src={images} />*/}
      <div>{name}</div>
      <div>{price.toLocaleString()}원</div>
      <div>{favoriteCount}</div>
    </>
  );
}

function ItemList({ items }) {
  return (
    <>
      <ul className="item-list">
        {items.map((item) => (
          <li key={item.id} className="item">
            <Item item={item} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ItemList;
