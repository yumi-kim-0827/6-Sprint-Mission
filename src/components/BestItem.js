import React from "react";
import Item from "./Item";

function getBestItems(itemsList, n) {
  const bestItems = itemsList.sort((a, b) => b.favoriteCount - a.favoriteCount);
  return bestItems.slice(0, n);
}

function BestItems({ items }) {
  const bestItems = getBestItems(items.list, 4);

  return (
    <div className="bestItems">
      <h1>베스트상품</h1>
      <div className="bestItems-list">
        {bestItems.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            tags={item.tags}
            images={item.images}
            ownerId={item.ownerId}
            favoriteCount={item.favoriteCount}
            updatedAt={item.updatedAt}
            BestItem={true}
          />
        ))}
      </div>
    </div>
  );
}

export default BestItems;
