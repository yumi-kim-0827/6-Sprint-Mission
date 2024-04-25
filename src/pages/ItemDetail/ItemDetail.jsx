import ItemDetailStyles from "./ItemDetail.module.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import getProductDetail from "../../api/getProductDetail";
import getProductDetailComments from "../../api/getProductDetailComments";

const ItemDetail = () => {
  const [product, setProduct] = useState({});
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const pathId = useLocation().pathname.split("/").pop();

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const data = await getProductDetail(pathId);
        setProduct(data);
        const comments = await getProductDetailComments(pathId);
        setComments(comments.list);
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
      {comments.length > 0 ? (
        comments.map(comment => (
          <>
            <p>{comment.content}</p>
            <p>{comment.writer.nickname}</p>
          </>
        ))
      ) : (
        <p>댓글이 없습니다.</p>
      )}
    </div>
  );
};

export default ItemDetail;
