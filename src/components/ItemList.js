import { useCallback, useEffect, useState } from "react";
import { ItemCard } from "./ItemCard";
import { getItems } from "../api/api";
import { useAsync } from "../hooks/useAsync";
import { Pagination } from "./Pagination";

export function ItemList ({order, size, keyword, page}) {
  const [items, setItems] = useState([]);
  const [paging, setPaging] = useState(1);
  const [isLoading, loadingError, getItemsAsync] = useAsync(getItems); //커스텀 훅 
  const [pageTotal, setPageTotal] = useState(0);
  const handleLoad = useCallback( async (options) => {
    let { list, totalCount } = await getItemsAsync(options);
    if(!list) return;
    setPageTotal(Math.ceil(totalCount / size));

    setItems(list);
  }, [getItemsAsync]);

  const handleLoadMore = (e) => {
    setPaging(Number(e.target.value));
    handleLoad({order, page : paging, pagesize : size, keyword});
  }

  useEffect(() => {
    handleLoad({order, page : paging, pageSize : size, keyword});
  }, [order, keyword, paging, handleLoad]);
  if(page) {
    return (
      <>
        <ul className="itemlists">
          {items.map((item) => {
            return (
              <li key={item.id} className="itemlist">
                <ItemCard item={item}/>
              </li>
            );
          })}
        </ul>
        <Pagination now={paging} total={pageTotal} onClick={handleLoadMore} onChange={setPaging}/>
      </>
    );
  }
  return (
    <>
      <ul className="itemlists">
        {items.map((item) => {
          return (
            <li key={item.id} className="itemlist">
              <ItemCard item={item}/>
            </li>
          );
        })}
      </ul>
    </>
  );
}