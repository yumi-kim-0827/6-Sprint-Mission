import { ToggleList } from "../../../shared/ui/ToggleList";
import { useState, useEffect } from "react";
import { getDatum } from "../../../shared/api/api.jsx";
import { Button } from "../../../shared/ui/Button.jsx";
import { ItemCard } from "../../../entities/ItemCard/ItemCard.jsx";
import { useMediaQuery } from "react-responsive";

export const ItemList = () => {
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("recent");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const isMobile = useMediaQuery({ minWidth: 375, maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1199 });
  const isDesktop = useMediaQuery({ minWidth: 1200 });

  const handleRecentSort = () => setOrder("recent");

  const handleFavoriteSort = () => setOrder("favorite");

  const handleload = async (options) => {
    try {
      setIsError(null);
      setIsLoading(true);
      const newItems = await getDatum(options);
      setItems(newItems);
      if (options.offset === 0) {
        setItems();
      }
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleload({ page: 1, order, search });
  }, [order, search]);

  return (
    <>
      <h1></h1>
      <div>
        <ToggleList
          options={[
            { name: "최신순", callback: handleRecentSort },
            { name: "좋아요순", callback: handleFavoriteSort },
          ]}
        />
        <Button
          classNames={["button--blue", "button--small"]}
          value={"상품 등록하기"}
        />
      </div>
      {isError?.message && <span>{isError.message}</span>}
      {isLoading && <span>로딩 중입니다</span>}
      <div className="ItemList__list">
        {items.list &&
          items.list.map((item) => {
            return (
              <div key={item.createdAt} className="">
                <ItemCard item={item} cardType="--big" />
              </div>
            );
          })}
      </div>
    </>
  );
};
