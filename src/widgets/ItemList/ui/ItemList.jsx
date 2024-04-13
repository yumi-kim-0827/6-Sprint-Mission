import { ToggleList } from "../../../shared/ui/ToggleList";
import { useState, useEffect } from "react";
import { getDatum } from "../../../shared/api/api.jsx";
import { Button } from "../../../shared/ui/Button.jsx";
import { ItemCard } from "../../../entities/ItemCard/ItemCard.jsx";
import { useMediaQuery } from "react-responsive";
import searchIcon from "../../../shared/asset/searchIcon.png";

import "./ItemList.scss";

export const ItemList = () => {
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [orderBy, setOrderBy] = useState("recent");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const isMobile = useMediaQuery({ minWidth: 375, maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1199 });
  const isDesktop = useMediaQuery({ minWidth: 1200 });

  const handleRecentSort = () => {
    setOrderBy("recent");

    console.log(orderBy);
  };

  const handleFavoriteSort = () => {
    setOrderBy("favorite");

    console.log(orderBy);
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
    setSearch(e.target["search"].value);
  };

  useEffect(() => {
    handleload({
      page: 1,
      orderBy,
      search,
      pageSize: isMobile ? 4 : isTablet ? 6 : 10,
    });
  }, [page, orderBy, search, isMobile, isDesktop, isTablet]);

  return (
    <>
      <div className="ItemList__header">
        <span className="ItemList__title">
          {isDesktop ? "전체상품" : "판매 중인 상품"}
        </span>
        <form onSubmit={handleSearchSubmit}>
          <img src={searchIcon} />
          <input name="search" placeholder={"검색할 상품을 입력해주세요"} />
        </form>
        <a href="./items">
          <Button
            classNames={["button--blue", "button--small"]}
            value={"상품 등록하기"}
          />
        </a>
        <ToggleList
          options={[
            { name: "최신순", callback: handleRecentSort },
            { name: "좋아요순", callback: handleFavoriteSort },
          ]}
        />
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
    </>
  );
};
