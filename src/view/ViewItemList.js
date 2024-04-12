import { useEffect, useState } from "react";
import { ItemList } from "../components/ItemList";

export function ViewItemList ({order, size, keyword}) {
  const [items, setItems] = useState([]);
  const [pageSize, setPageSize] = useState(size);

  async function getItems({order, pageSize, keyword=""}) {
    const query = `?orderBy=${order}&pageSize=${pageSize}&keyword=${keyword}`;
    const response = await fetch(
      `https://panda-market-api.vercel.app/products${query}`
    );
    const body = await response.json();
    const list = body.list;
  
    return list;
  }

  const loadItems = async (options) => {
    const itemList = await getItems(options);
    setItems(itemList);
  };

  useEffect(() => {
    loadItems({order, pageSize, keyword});
  }, [order, keyword]);

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