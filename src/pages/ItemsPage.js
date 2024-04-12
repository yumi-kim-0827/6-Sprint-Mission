import { useEffect, useState } from "react";
import { MOBILE, TABLET, PC } from "../utils/magicLiterals";
import { getBestItems } from "../api";
import Nav from "../components/Nav";
import ItemList from "../components/ItemList";
import "./ItemsPage.css";

const numBestItems = {
  [MOBILE]: 1,
  [TABLET]: 2,
  [PC]: 4,
};

function ItemsPage({ device }) {
  const [bestItems, setBestItems] = useState([]);
  const [bestItemsUsing, setBestItemsUsing] = useState([]);

  const handleLoad = async () => {
    const { list: bestItems } = await getBestItems();
    setBestItems(bestItems);
    setBestItemsUsing(bestItems.slice(0, numBestItems[device]));
  };

  useEffect(() => {
    handleLoad();
  }, []);

  useEffect(() => {
    const newBestItemUsing = bestItems.slice(0, numBestItems[device]);
    setBestItemsUsing(newBestItemUsing);
  }, [device]);

  return (
    <>
      <Nav />
      <main>
        <section id="best-items">
          <h1 className="section-title">베스트 상품</h1>
          <ItemList items={bestItemsUsing} />
        </section>
        <section id="all-items">
          <h1 className="section-title">판매 중인 상품</h1>
          <ItemList items={[]} />
        </section>
      </main>
    </>
  );
}

export default ItemsPage;
