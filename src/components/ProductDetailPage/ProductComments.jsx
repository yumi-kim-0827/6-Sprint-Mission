import React, { useState, useEffect } from 'react';
import { getComments } from '../../api/commentsApi';

function ProductComments({ product }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      if (!product?.id) {
        return;
      }

      try {
        const commentsData = await getComments(product.id);
        setComments(commentsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching comments:', error);
        setLoading(false);
      }
    };

    fetchComments();
  }, [product]);

  if (loading) {
    return <div>Loading comments...</div>; 
  }

  return (
    <div className="product-comments">
      <h3>댓글</h3>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            {comment}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductComments;
