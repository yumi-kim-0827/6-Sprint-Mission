import React, { useContext, useEffect, useState } from "react";

import ListTitle from "./ListTitle";
import List from "./List";
import { GetItemsContext } from "../App";

import "../css/ListSection.css";

function ListSection({ order, sort, limit }) {
  const getItems = useContext(GetItemsContext);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const ex = async () => {
      const { list, totalCount } = await getItems(order, limit, page);
      setItems(list);
    };
    ex();
  }, []);

  return (
    <section className="ListSection">
      <ListTitle sort={sort} />
      <List items={items} />
    </section>
  );
}

export default ListSection;
