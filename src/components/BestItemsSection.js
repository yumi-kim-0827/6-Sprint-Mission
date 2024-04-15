import { useEffect, useState } from "react";
import { getBestItems } from "../api";
import { NUM_BEST_ITEMS } from "../utils/magicLiterals";
import ItemList from "./ItemList";

function BestItemsSection({ device }) {
  const [bestItems, setBestItems] = useState([]);
  const [bestItemsUsing, setBestItemsUsing] = useState([]);

  const handleInitialLoad = async () => {
    const { list: newBestItems } = await getBestItems();

    setBestItems(newBestItems);
    setBestItemsUsing(newBestItems.slice(0, NUM_BEST_ITEMS[device]));
  };

  useEffect(() => {
    handleInitialLoad();
  }, []);

  useEffect(() => {
    const newBestItemsUsing = bestItems.slice(0, NUM_BEST_ITEMS[device]);
    setBestItemsUsing(newBestItemsUsing);
  }, [device]);

  return (
    <section id="best-items">
      <h1 className="section-title">베스트 상품</h1>
      <ItemList items={bestItemsUsing} />
    </section>
  );
}

export default BestItemsSection;
