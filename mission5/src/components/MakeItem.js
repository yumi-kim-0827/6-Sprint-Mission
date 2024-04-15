function MakeItem({ item }) {
  return (
    <div>
      <img className="item-img" src={item.images} alt={item.name} />
      <div>
        <p>{item.name}</p>
        <p>{item.price}</p>
        <p>{item.favoriteCount}</p>
      </div>
    </div>
  );
}

export default MakeItem;
