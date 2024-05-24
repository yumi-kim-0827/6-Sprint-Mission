// CSS
import "./Comments.css";

import React, { useEffect, useState } from "react";
import { getComment } from "../../../api/product.api";
import Comment from "./Comment";

const Comments = ({ productId }) => {
  const [comments, setComments] = useState([]);

  const handleLoad = async (itemId) => {
    const { list } = await getComment(itemId);

    setComments(list);
  };

  useEffect(() => {
    handleLoad({ productId });
  }, [productId]);

  return (
    <>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
  );
};

export default Comments;
