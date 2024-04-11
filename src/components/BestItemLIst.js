function BestItem({ item }) {
  const { description, price, favoriteCount, images, name } = item;
  return (
    <>
      <img src={images[0]} alt={name} />
      <div>
        <h3>{description}</h3>
        <p>{price}</p>
      </div>
    </>
  );
}

function AllItemList({ items }) {
  return (
    <>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <BestItem item={item} />
          </div>
        );
      })}
    </>
  );
}
export default AllItemList;
