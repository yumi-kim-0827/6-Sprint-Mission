import { useEffect, useState } from "react";
import { getProducts } from "@/api/getProducts";
import { BestProducts } from "@/components/Products";
import { sortItemsByOrder } from "@/utils/sort";
import styles from "../styles/BestItems.module.css";

interface BestItemsProps {
  pageSize: number;
}

function BestItems({ pageSize }: BestItemsProps) {
  const [order, setOrder] = useState("favorite");
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);

  const sortedItems = sortItemsByOrder(items, order);

  const handleLoad = async (options: object) => {
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
        <BestProducts items={sortedItems} counts={pageSize} />
      </div>
      {loadingError?.message && <span>{loadingError.message}</span>}
    </>
  );
}

export default BestItems;
