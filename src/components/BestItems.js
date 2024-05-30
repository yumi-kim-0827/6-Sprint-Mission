import { useEffect, useState } from "react";

import { getItems } from "../api/api";
import "../css/BestItems.css";
import { calculatePageSize } from "../utils/module";
import Item from "./Item";

function BestItems({ className, pageSize }) {
  const [bestItems, setBestItems] = useState([]);

  const loadBestItems = async (options) => {
    const { list } = await getItems(options);
    setBestItems(list);
  };

  useEffect(() => {
    loadBestItems({
      order: "favorite",
      page: "1",
      pageSize: calculatePageSize("best"),
    });
  }, [pageSize]);

  return (
    <div className={className}>
      <h2 className="best-items__name-tag">베스트 상품</h2>
      <div className="best-items__layout">
        {bestItems &&
          bestItems.map((item) => {
            return <Item key={item.id} type="best-item" item={item} />;
          })}
      </div>
    </div>
  );
}

export default BestItems;
