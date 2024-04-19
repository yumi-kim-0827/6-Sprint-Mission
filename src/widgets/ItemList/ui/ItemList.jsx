import { ToggleList } from "/src/shared/ui/ToggleList";
import { useState, useEffect } from "react";
import { getDatum } from "/src/shared/api/api.jsx";
import { Button } from "/src/shared/ui/Button.jsx";
import { ItemCard } from "/src/entities/ItemCard/ItemCard.jsx";

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

  const handleRecentSort = () => {
    setOrderBy("recent");
  };

  const handleFavoriteSort = () => {
    setOrderBy("favorite");
  };

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

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setKeyword(e.target["search"].value);
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
      <div className="ItemList__header">
        <span className="ItemList__title">
          {isDesktop ? "전체상품" : "판매 중인 상품"}
        </span>
        <form onSubmit={handleSearchSubmit} className="ItemList__form">
          <input
            name="search"
            placeholder={"검색할 상품을 입력해주세요"}
            className="ItemList__input"
          />
        </form>
        <a href="./items" className="ItemList__link">
          <Button
            classNames={["button--blue", "button--small"]}
            value={"상품 등록하기"}
          />
        </a>
        <div className="ItemList__ToggleList">
          <ToggleList
            options={[
              { name: "최신순", callback: handleRecentSort },
              { name: "좋아요순", callback: handleFavoriteSort },
            ]}
          />
        </div>
      </div>
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
