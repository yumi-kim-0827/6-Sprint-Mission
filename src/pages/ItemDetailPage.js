import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../services/api";

export default function ItemDetailPage() {
  const { itemId } = useParams();
  const [item, setItem] = useState({});

  const handLoadItem = async () => {
    const itemDetail = await getItem(itemId);
    setItem(itemDetail);
    console.log(itemDetail);
  };

  useEffect(() => {
    handLoadItem(itemId);
  }, [itemId]);

  return (
    <>
      <div>
        <p>테스트</p>
        <p>{item.name}</p>
      </div>
    </>
  );
}
