import { useEffect, useState } from "react";
import ItemDetailStyles from "./ItemDetail.module.css";
import { useLocation } from "react-router-dom";
import getProductDetail from "../../api/getProductDetail";

const ItemDetail = () => {
  const [item, setItem] = useState({});
  const path = useLocation();
  const pathId = path.pathname.split("/")[2];

  useEffect(() => {
    getProductDetail(pathId).then(data => setItem(data));
  }, []);
  return (
    <div className={ItemDetailStyles.container}>
      <h2>Name: {item.name}</h2>
      <p>Description: {item.description}</p>
      <p>Price: {item.price}</p>
    </div>
  );
};

export default ItemDetail;
