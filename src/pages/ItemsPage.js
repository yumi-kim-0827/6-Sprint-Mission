import { useEffect, useState } from "react";
import { MOBILE, NUM_BEST_ITEMS, NUM_ALL_ITEMS } from "../utils/magicLiterals";
import { getBestItems, getItems } from "../api";
import Nav from "../components/Nav";
import ItemList from "../components/ItemList";
import ItemListNav from "../components/ItemListNav";
import "./ItemsPage.css";
import ItemListNavMobile from "../components/ItemListNavMobile";

function ItemsPage({ device }) {
  const [bestItems, setBestItems] = useState([]);
  const [bestItemsUsing, setBestItemsUsing] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [order, setOrder] = useState("recent");

  const handleInitialLoad = async () => {
    const { list: newBestItems } = await getBestItems();
    setBestItems(newBestItems);
    setBestItemsUsing(newBestItems.slice(0, NUM_BEST_ITEMS[device]));

    handleLoad();
  };

  const handleLoad = async () => {
    const pageSize = NUM_ALL_ITEMS[device];
    const { list: newAllItems } = await getItems({
      page: pageNumber,
      pageSize,
      orderBy: order,
    });
    setAllItems(newAllItems);
  };

  useEffect(() => {
    handleInitialLoad();
  }, []);

  useEffect(() => {
    const newBestItemsUsing = bestItems.slice(0, NUM_BEST_ITEMS[device]);
    setBestItemsUsing(newBestItemsUsing);
  }, [device]);

  useEffect(() => {
    handleLoad();
  }, [device, order, pageNumber]);

  return (
    <>
      <Nav />
      <main>
        <section id="best-items">
          <h1 className="section-title">베스트 상품</h1>
          <ItemList items={bestItemsUsing} />
        </section>
        <section id="all-items">
          {device === MOBILE ? (
            <ItemListNavMobile order={order} setOrder={setOrder} />
          ) : (
            <ItemListNav order={order} setOrder={setOrder} />
          )}
          <ItemList items={allItems} />
        </section>
      </main>
    </>
  );
}

export default ItemsPage;
