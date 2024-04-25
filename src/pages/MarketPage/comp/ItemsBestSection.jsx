import getItems from "../../../api/getItems";
import { useEffect, useState } from "react";
import MakeItemList from "./MakeItemList";

const PAGESIZE = 4;

function ItemsBestSection() {
  const [items, setItems] = useState([]);

  const query = `products?pageSize=${PAGESIZE}&orderBy=favorite`;

  useEffect(() => {
    const handleLoadBest = async () => {
      try {
        const data = await getItems(query);
        if (data && data.list) {
          setItems(data.list);
          console.log(data.list);
        }
      } catch (e) {
        console.log(e);
      }
    };
    handleLoadBest();
  }, []);

  return (
    <>
      <section className="products-best">
        <div className="content-label">베스트 상품</div>
        <MakeItemList items={items} />
      </section>
    </>
  );
}

export default ItemsBestSection;
