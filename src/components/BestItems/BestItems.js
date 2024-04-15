import { useEffect, useState } from "react";
import { getProducts } from "../../utils/api";
import Products from "../Products/Products";
import { sortItems } from "../../utils/sort";
import "./BestItems.css";

function BestItems({ pageSize }) {
  const bestItemsListStyles = {
    list: "bestitem-list",
    listItem: "bestitem-list--item",
    elements: {
      listItemImg: "bestitem-list--item__image",
      listItemTitle: "bestitem-list--item__title",
      listItemPrice: "bestitem-list--item__price",
      listItemLikeButton: "bestitem-list--item__likebutton",
      listItemLikeCount: "bestitem-list--item__likecount",
    },
  };

  const [order, setOrder] = useState("favorite");
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);

  const sortedItems = sortItems(items, order);

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
      <div className="bestitem-container">
        <div className="bestitem-title">
          <h2 className="bestitem-title--content">베스트 상품</h2>
        </div>
        <Products className={bestItemsListStyles} items={sortedItems} />
      </div>
      {loadingError?.message && <span>{loadingError.message}</span>}
    </>
  );
}

export default BestItems;
