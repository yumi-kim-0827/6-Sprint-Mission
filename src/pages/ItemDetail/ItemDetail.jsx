import ItemDetailStyles from "./ItemDetail.module.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import getProductDetail from "../../api/getProductDetail";
import getProductDetailComments from "../../api/getProductDetailComments";

const ItemDetail = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const pathId = useLocation().pathname.split("/").pop();

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const data = await getProductDetail(pathId);
        setProduct(data);
        console.log("data:", data);
        const comments = await getProductDetailComments(pathId);
        console.log("comments:", comments);
      } catch (error) {
        console.error(error);
        alert("Failed to load data. Please try again.");
      } finally {
        setLoading(false);
      }
    })();
  }, [pathId]);

  return (
    <div className={ItemDetailStyles.container}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>Name: {product.name}</h2>
          <p>Description: {product.description}</p>
          <p>Price: {product.price}</p>
        </>
      )}
      ;
    </div>
  );
};

export default ItemDetail;
