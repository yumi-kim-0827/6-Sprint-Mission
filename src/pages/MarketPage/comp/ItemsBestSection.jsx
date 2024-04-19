import { GetBestItems } from "../api/GetBestItems";
import { useEffect, useState } from "react";
import MakeItemList from "./MakeItemList";

function ItemsBestSection() {
  const [bestItems, setBestItems] = useState([]);

  const handleLoadBest = async () => {
    const { list } = await GetBestItems();
    setBestItems(list);
  };

  useEffect(() => {
    handleLoadBest();
  }, []);

  return (
    <>
      <section className="products-best">
        <div className="content-label">베스트 상품</div>
        <MakeItemList items={bestItems} />
      </section>
    </>
  );
}

export default ItemsBestSection;
