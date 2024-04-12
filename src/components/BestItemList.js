import { useEffect, useState } from "react";

import { MOBILE, TABLET, PC } from "../utils/magicLiterals";
import { getBestItems } from "../api";

import Item from "./Item";

const numItems = {
  [MOBILE]: 1,
  [TABLET]: 2,
  [PC]: 4,
};

function BestItemList({ device }) {
  const [bestItems, setBestItems] = useState([]);
  const [bestItemsUsing, setBestItemsUsing] = useState([]);

  const handleLoad = async () => {
    const { list } = await getBestItems();
    setBestItems(list);
    setBestItemsUsing(list.slice(0, numItems[device]));
  };

  useEffect(() => {
    handleLoad();
  }, []);

  useEffect(() => {
    const newBestItemUsing = bestItems.slice(0, numItems[device]);
    setBestItemsUsing(newBestItemUsing);
  }, [device]);

  return (
    <ol className="item-list">
      {bestItemsUsing.map((item) => (
        <li key={item.id}>
          <Item item={item} />
        </li>
      ))}
    </ol>
  );
}

export default BestItemList;
