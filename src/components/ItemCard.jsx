function ItemCard({ item }) {
  return (
    <div>
      <div>
        <h2>{item.name}</h2>
        <p>{item.price}원</p>
        <div>{item.favoriteCount}</div>
      </div>
    </div>
  );
}

export default ItemCard;
