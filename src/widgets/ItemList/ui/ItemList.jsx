import { useState, useEffect } from "react";
import { getDatum } from "/src/shared/api/api.jsx";
import { ItemCard } from "/src/entities/ItemCard/ItemCard.jsx";
import { ItemListHeader } from "/src/entities/index.jsx";

import "./ItemList.scss";
import { PageList } from "/src/widgets/PageList/index.jsx";
import { useCustomMediaQuery } from "/src/shared/hooks/useCustomMediaQuery.jsx";

export const ItemList = () => {
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [orderBy, setOrderBy] = useState("recent");
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");

  const { isMobile, isTablet, isDesktop } = useCustomMediaQuery();

  const handleload = async (options) => {
    try {
      setIsError(null);
      setIsLoading(true);
      const newItems = await getDatum(options);
      setItems(newItems);
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePagination = (e) => {
    setPage(e.target.innerText);
  };

  useEffect(() => {
    handleload({
      page,
      orderBy,
      keyword,
      pageSize: isMobile ? 4 : isTablet ? 6 : 10,
    });
  }, [page, orderBy, keyword, isMobile, isDesktop, isTablet]);

  return (
    <>
      <ItemListHeader setOrderBy={setOrderBy} setKeyword={setKeyword} />
      {isError?.message && <span>{isError.message}</span>}
      {isLoading && <span>로딩 중입니다</span>}
      <div className="ItemList__list">
        {items.list &&
          items.list.map((item) => {
            return (
              <div key={item.createdAt} className="">
                <ItemCard item={item} cardType="--small" />
              </div>
            );
          })}
      </div>
      <PageList callback={handlePagination} page={page} />
    </>
  );
};
