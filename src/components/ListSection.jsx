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
      // 불러온 데이터 할당
      const { list, totalCount } = await getItems(order, limit, page);
      setItems(list);

      // 페이지네이션 넘버
      const PaginationNumber = Math.ceil(totalCount / limit);
      setPageNumbers(PaginationNumber);
    };

    ex();
  }, [limit, order, page]);

  // 정렬 변경
  const onChangeOrder = (e) => {
    setOrder(e.target.value);
  };

  // pagination 버튼 클릭 시 변경
  const onClickPaginationButton = (e) => {
    const lis = e.target.parentElement.children;

    const filteredLi = [...lis].find((li) => li.classList.contains("active"));
    if (e.target.textContent === "<") {
      const previousLi = filteredLi.previousElementSibling;
      if (previousLi.textContent !== "<") {
        [...lis].map((li) => li.classList.remove("active"));
        previousLi.classList.add("active");
        setPage(previousLi.textContent);
      }
    } else if (e.target.textContent === ">") {
      const nextLi = filteredLi.nextElementSibling;
      if (nextLi.textContent !== ">") {
        [...lis].map((li) => li.classList.remove("active"));
        nextLi.classList.add("active");
        setPage(nextLi.textContent);
      }
    } else {
      [...lis].map((li) => li.classList.remove("active"));
      e.target.classList.add("active");
      setPage(e.target.textContent);
    }
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
