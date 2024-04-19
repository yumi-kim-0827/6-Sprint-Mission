import { useState, useEffect } from "react";
import { getDatum } from "/src/shared/api/api";
import { ItemCard } from "/src/entities/ItemCard/ItemCard";
import "./BestItemList.scss";

export const BestItemList = () => {
  const [items, setItems] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const order = "favorite";

  const getBestItems = async (options) => {
    try {
      setIsError(null);
      setIsLoading(true);
      const newItems = await getDatum(options);
      const newBestItems = newItems.list.slice(0, 4);
      options.offset === 0 ? setItems() : setItems(newBestItems);
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBestItems({ pageSize: 100, orderBy: order });
  }, []);

  return (
    <>
      <h1 className="BestItemList__title">베스트 상품</h1>
      {isError?.message && <span>{isError.message}</span>}
      {isLoading && <span>로딩 중입니다</span>}
      <div className="BestItemList__list">
        {items &&
          items.map((item) => {
            return (
              <div key={item.createdAt} className="BestItemList__card">
                <ItemCard item={item} cardType="--big" />
              </div>
            );
          })}
      </div>
    </>
  );
};
