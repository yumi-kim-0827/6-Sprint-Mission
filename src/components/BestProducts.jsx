import ItemCard from "./ItemCard";
import "./BestProducts.css";
import useItemCount from "./useItemCount";

export default function BestProducts({ items }) {
  let count = useItemCount();

  const bestItems = items
    .sort((a, b) => b.favoriteCount - a.favoriteCount)
    .filter((item, index) => index < 4);

  return (
    <>
      <div className="container-best-products">
        <h1>베스트 상품</h1>
        <div className="item-cards-container">
          {count === 1 ? (
            <ItemCard items={bestItems} count={0} />
          ) : count === 2 ? (
            <>
              <ItemCard items={bestItems} count={0} />
              <ItemCard items={bestItems} count={1} />
            </>
          ) : count === 4 ? (
            <>
              <ItemCard items={bestItems} count={0} />
              <ItemCard items={bestItems} count={1} />
              <ItemCard items={bestItems} count={2} />
              <ItemCard items={bestItems} count={3} />
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}
