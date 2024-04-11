import { useEffect, useState } from "react";
import { ItemList } from "../components/ItemList";



export function ViewItemList ({order}) {
  const [items, setItems] = useState([]);
 
  async function getItems(order) {
    const query = `?orderBy=${order}`;
    const response = await fetch(
      `https://panda-market-api.vercel.app/products${query}`
    );
    const body = await response.json();
    const list = body.list;
  
    return list;
  }

  const loadItems = async (order) => {
    const itemList = await getItems(order);
    setItems(itemList);
  };

  useEffect(() => {
    loadItems(order);
  }, [order]);

  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <ItemList item={item} order={order}/>
          </li>
        );
      })}
    </ul>
  );
}