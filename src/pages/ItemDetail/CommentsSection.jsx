import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductComments } from "../../itemApi";

function CommentsSection() {
  const { productId } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductComments(productId);
        setComments(productData);
      } catch (error) {
        console.error("Failed to fetch comment:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <div className="commentsSection">
      {comments ? (
        <div className="commentsSection-content">
          <div>{comments.content}</div>
          <div className="commentsSection-img">
            <img src={comments.writer.image} alt="avatar" />
          </div>
          <div className="commentsSecion-detail">
            <div>{comments.writer.ninkname}</div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CommentsSection;
