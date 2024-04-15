import { useEffect, useState } from "react";
import {
  MOBILE,
  RECENT,
  NUM_BEST_ITEMS,
  NUM_ALL_ITEMS,
} from "../utils/magicLiterals";
import { getBestItems, getItems } from "../api";
import Nav from "../components/Nav";
import ItemList from "../components/ItemList";
import ItemListNav from "../components/ItemListNav";
import "./ItemsPage.css";
import ItemListNavMobile from "../components/ItemListNavMobile";
import Pagination from "../components/Pagination";

function ItemsPage({ device }) {
  const [bestItems, setBestItems] = useState([]);
  const [bestItemsUsing, setBestItemsUsing] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [pageInfo, setPageInfo] = useState({
    currentPage: 1,
    totalCount: 0,
    totalPage: 1,
  });
  const [order, setOrder] = useState(RECENT);

  const handleInitialLoad = async () => {
    const { list: newBestItems, totalCount: totalCountString } =
      await getBestItems();
    const totalCount = Number(totalCountString);
    const totalPage = Math.ceil(totalCount / NUM_ALL_ITEMS[device]);

    setBestItems(newBestItems);
    setPageInfo((prevPageInfo) => ({
      ...prevPageInfo,
      totalCount,
      totalPage,
    }));
    setBestItemsUsing(newBestItems.slice(0, NUM_BEST_ITEMS[device]));

    handleLoad();
  };

  const handleLoad = async () => {
    const pageSize = NUM_ALL_ITEMS[device];
    const { list: newAllItems } = await getItems({
      page: pageInfo.currentPage,
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

    const totalPage = Math.ceil(pageInfo.totalCount / NUM_ALL_ITEMS[device]);
    setPageInfo((prevPageInfo) => ({
      ...prevPageInfo,
      totalPage,
    }));
  }, [device]);

  useEffect(() => {
    handleLoad();
  }, [order, pageInfo]);

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
          <Pagination pageInfo={pageInfo} setPageInfo={setPageInfo} />
        </section>
      </main>
    </>
  );
}

export default ItemsPage;
