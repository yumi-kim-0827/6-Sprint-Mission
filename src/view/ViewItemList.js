import { useCallback, useEffect, useState } from "react";
import { ItemList } from "../components/ItemList";
import { getItems } from "../api/api";
import { useAsync } from "../hooks/useAsync";

export function ViewItemList ({order, size, keyword}) {
  const [items, setItems] = useState([]);
  const [pageSize, setPageSize] = useState(size);
  const [isLoading, loadingError, getItemsAsync] = useAsync(getItems); //커스텀 훅

  const handleLoad = useCallback( async (options) => {
    let result = await getItemsAsync(options);
    if(!result) return;

    setItems(result);
    
    // if (options.offset === 0) {
    //   setItems(reviews);
    // }
    // else {
    //   setItems((prevItems) => [...prevItems, ...reviews]);
    // }
  }, [getItemsAsync]);

  useEffect(() => {
    handleLoad({order, pageSize, keyword});
  }, [order, keyword, handleLoad]);

  return (
    <ul className="itemlists">
      {items.map((item) => {
        return (
          <li key={item.id} className="itemlist">
            <ItemList item={item} order={order}/>
          </li>
        );
      })}
    </ul>
  );
}