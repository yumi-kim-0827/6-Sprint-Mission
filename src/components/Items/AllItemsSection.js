import { useEffect, useState } from "react";
import { MOBILE, NUM_ALL_ITEMS, RECENT } from "../../utils/constants.js";
import { getItems } from "../../api/index.js";
import ItemListNav from "./ItemListNav.js";
import ItemListNavMobile from "./ItemListNavMobile.js";
import ItemList from "./ItemList";
import Pagination from "./Pagination.js";

function AllItemsSection({ device }) {
  const [allItems, setAllItems] = useState([]);
  const [pageInfo, setPageInfo] = useState({
    currentPage: 1,
    totalCount: 0,
    totalPage: 1,
  });
  const [order, setOrder] = useState(RECENT);
  const [update, setUpdate] = useState(0); // 오버플로우 나도 상관 없음
  const [loadingError, setLoadingError] = useState(null);

  const handleLoad = async () => {
    let result;
    try {
      setLoadingError(null);
      result = await getItems({
        page: pageInfo.currentPage,
        pageSize: NUM_ALL_ITEMS[device],
        orderBy: order,
      });
    } catch (e) {
      setLoadingError(e);
      return;
    }

    const { list: newAllItems, totalCount: totalCountString } = result;
    setAllItems(newAllItems);

    const totalCount = Number(totalCountString);

    if (totalCount !== pageInfo.totalCount) {
      const totalPage = Math.ceil(totalCount / NUM_ALL_ITEMS[device]);

      setPageInfo((prevPageInfo) => ({
        ...prevPageInfo,
        totalCount,
        totalPage,
      }));
    }
  };

  const setPageInfoAndUpdate = (newPageInfo) => {
    setPageInfo(newPageInfo);
    setUpdate((prevUpdate) => prevUpdate + 1);
  };

  useEffect(() => {
    const totalPage = Math.ceil(pageInfo.totalCount / NUM_ALL_ITEMS[device]);
    setPageInfo((prevPageInfo) => ({
      ...prevPageInfo,
      currentPage: 1, // device 바뀌었으니 다시 첫페이지로
      totalPage,
    }));

    setUpdate((prevUpdate) => prevUpdate + 1);
  }, [device]);

  useEffect(() => {
    setPageInfo((prevPageInfo) => ({
      ...prevPageInfo,
      currentPage: 1, // order 바뀌었으니 다시 첫페이지로
    }));

    setUpdate((prevUpdate) => prevUpdate + 1);
  }, [order]);

  useEffect(() => {
    handleLoad();
  }, [update]);

  return (
    <section id="all-items">
      {device === MOBILE ? (
        <ItemListNavMobile order={order} setOrder={setOrder} />
      ) : (
        <ItemListNav order={order} setOrder={setOrder} />
      )}
      <ItemList items={allItems} />
      {loadingError?.message ? <p>{loadingError.message}</p> : ""}
      <Pagination pageInfo={pageInfo} setPageInfo={setPageInfoAndUpdate} />
    </section>
  );
}

export default AllItemsSection;
