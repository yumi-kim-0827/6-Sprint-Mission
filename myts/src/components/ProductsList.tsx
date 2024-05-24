import "./ProductsList.css";

interface Ilist {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  images: string;
  ownerId: number;
  favoriteCount: number;
  createdAt: string;
  updatedAt: string;
}
interface ProductsListItemProps {
  item: Ilist;
}

interface ProductsListProps {
  items: Ilist[];
}

function ProductsListItem({ item }: ProductsListItemProps) {
  return (
    <div className="ProductsListItem">
      <img className="ProductsListItem-img" src={item.images} alt={item.name} />
      <div>
        <h2>{item.name}</h2>
        <p>{item.price}</p>
        <p>{item.favoriteCount}</p>
      </div>
    </div>
  );
}

function ProductsList({ items }: ProductsListProps) {
  return (
    <ul className="ItemContainer">
      {items.map((item) => {
        return (
          <li key={item.id}>
            <ProductsListItem item={item} />
          </li>
        );
      })}
    </ul>
  );
}

export default ProductsList;
