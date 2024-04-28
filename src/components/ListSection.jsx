import React, { useContext, useEffect, useState } from "react";

import ListTitle from "./ListTitle";
import List from "./List";
import { GetItemsContext } from "../App";

import "../css/ListSection.css";

function ListSection({ initialOrder, sort, limit, ispage }) {
  const getItems = useContext(GetItemsContext);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState(initialOrder);

  useEffect(() => {
    const ex = async () => {
      const { list, totalCount } = await getItems(order, limit, page);
      setItems(list);
    };
    ex();
  }, [limit, order]);

  const onChangeOrder = (e) => {
    setOrder(e.target.value);
  };

  return (
    <section className="ListSection">
      <ListTitle sort={sort} onChangeOrder={onChangeOrder} />
      <List items={items} />
    </section>
  );
}

export default ListSection;
