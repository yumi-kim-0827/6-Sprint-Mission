function AllItemsItem({ item }) {
  return (
    <div>
      <div>
        <img src={item.images} alt={item.name} />
      </div>
      <div>
        <p>{item.name}</p>
        <p>{item.price}</p>
        <p>{item.favoriteCount}</p>
      </div>
    </div>
  );
}

function AllItems({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <AllItemsItem item={item} />
          </li>
        );
      })}
    </ul>
  );
}

export default AllItems;
