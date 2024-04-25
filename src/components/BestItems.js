import { useEffect, useState } from "react";
import { getProducts } from "../api";
import Products from "./Products";
import { sortItemsByOrder } from "../utils/sort";
import styles from "../styles/BestItems.module.css";

function BestItems({ pageSize }) {
  const bestItemsListStyles = {
    list: styles.bestitemList,
    listItem: styles.bestitemListItem,
    elements: {
      listItemImg: styles.bestitemListItemImage,
      listItemTitle: styles.bestitemListItemTitle,
      listItemPrice: styles.bestitemListItemPrice,
      listItemLikeButton: styles.bestitemListItemLikebutton,
      listItemLikeCount: styles.bestitemListItemLikecount,
    },
  };

  const [order, setOrder] = useState("favorite");
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);

  const sortedItems = sortItemsByOrder(items, order);

  const handleLoad = async (options) => {
    let result;
    try {
      setIsLoading(true);
      setLoadingError(null);
      result = await getProducts(options);
    } catch (error) {
      setLoadingError(error);
      return;
    } finally {
      setIsLoading(false);
    }
    const { list } = result;
    setItems(list);
  };

  useEffect(() => {
    handleLoad({ pageSize, order });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageSize, order]);

  return (
    <>
      <div className={styles.bestitemContainer}>
        <div className={styles.bestitemTitle}>
          <h2 className={styles.bestitemTitleContent}>베스트 상품</h2>
        </div>
        <Products className={bestItemsListStyles} items={sortedItems} />
      </div>
      {loadingError?.message && <span>{loadingError.message}</span>}
    </>
  );
}

export default BestItems;
