import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductComments } from '../../../api/itemApi';

function ProductComments() {
  const { productId, commentId } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const finalCommentId = commentId || '';
      const productComment = await getProductComments(productId, finalCommentId);
      setComments(productComment);
    }
    fetchData();
  }, [productId, commentId]);

  if (comments.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h5>{comment.writer}</h5>
          <p>{comment.nickname}</p>
        </div>
      ))}
    </>
  );
}

export default ProductComments;
