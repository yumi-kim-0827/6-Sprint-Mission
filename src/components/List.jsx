import React, { useCallback, useContext, useEffect, useState } from "react";
import ListItems from "./ListItems";
import { GetItemsContext } from "../App";
import "./../css/List.css";

const Pagination = ({ page, setPage, pageList }) => {
  setPage(1);

  const Li = () => {
    return <li>안녕</li>;
  };

  return <ul className="Pagination"></ul>;
};

function List({ order, limit, gridCol, isPage }) {
  const [items, setItems] = useState();
  const [page, setPage] = useState(1);
  const [pageList, setPageList] = useState();
  const getItems = useContext(GetItemsContext);

  useEffect(() => {
    async function ex() {
      const { list, totalCount } = await getItems(order, limit, page);
      setPageList(totalCount / limit);
      setItems(list);
    }
    ex();
  }, [page]);

  return (
    <>
      <div className="List">
        <ListItems items={items} gridCol={gridCol} />
      </div>
      {isPage && (
        <Pagination page={page} setPage={setPage} pageList={pageList} />
      )}
    </>
  );
}

export default List;
