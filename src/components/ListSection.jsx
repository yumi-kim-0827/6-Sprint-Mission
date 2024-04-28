import React, { useContext, useEffect, useState } from "react";

import ListTitle from "./ListTitle";
import List from "./List";
import { GetItemsContext } from "../App";

import "../css/ListSection.css";
import PaginationList from "./PaginationNav";

function ListSection({ initialOrder, sort, limit, ispage }) {
  const getItems = useContext(GetItemsContext);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState(initialOrder);
  const [pageNumbers, setPageNumbers] = useState();

  useEffect(() => {
    const ex = async () => {
      const { list, totalCount } = await getItems(order, limit, page);
      setItems(list);
      const PaginationNumber = Math.ceil(totalCount / limit);
      setPageNumbers(PaginationNumber);
    };
    ex();
  }, [limit, order, page]);

  const onChangeOrder = (e) => {
    setOrder(e.target.value);
  };

  const onClickPaginationButton = (e) => {
    const lis = e.target.parentElement.children;
    [...lis].map((li) => li.classList.remove("active"));
    e.target.classList.add("active");
    setPage(e.target.textContent);
  };

  let title;
  if (initialOrder == "favorite") {
    title = "베스트 상품";
  } else {
    title = "전체 상품";
  }

  return (
    <section className="ListSection">
      <ListTitle title={title} sort={sort} onChangeOrder={onChangeOrder} />
      <List items={items} />
      {ispage && (
        <PaginationList
          onClickPaginationButton={onClickPaginationButton}
          pageNumbers={pageNumbers}
        />
      )}
    </section>
  );
}

export default ListSection;
