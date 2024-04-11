

export function ItemList({ item }) {
  return (
    <div className="">
      <img className="" src={item.images[0]} alt={item.name + " 이미지"}/>
      <div>
        <h2>{item.description}</h2>
      </div>
    </div>
  );
}