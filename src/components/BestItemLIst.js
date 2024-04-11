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

function AllItemList({ items, handleSortedChange }) {
  return (
    <div>
      <select onChange={handleSortedChange}>
        <option value="recent">최신순</option>
        <option value="favorite">좋아요순</option>
      </select>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <BestItem item={item} />
          </div>
        );
      })}
    </div>
  );
}
export default AllItemList;
