import getItems from "../../../api/getAllItems";
import { useEffect, useState } from "react";
import MakeItemList from "./MakeItemList";
import { Product } from "../../../types";

const PAGESIZE = 4;

function ItemsBestSection() {
  const [items, setItems] = useState<Product[]>([]);

  const pathName = `products?pageSize=${PAGESIZE}&orderBy=favorite`;

  useEffect(() => {
    const handleLoadBest = async () => {
      try {
        const data = await getItems(pathName);
        if (data && data.list) {
          setItems(data.list);
        }
      } catch (e) {
        console.log(e);
      }
    };
    handleLoadBest();
  }, []);

  return (
    <>
      <section className="items-best">
        <div className="content-label">베스트 상품</div>
        <MakeItemList items={items} />
      </section>
    </>
  );
}

export default ItemsBestSection;
