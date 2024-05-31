import React from "react";
const PostCard = ({ article }) => {
  return (
    <>
      <div>{article.title}</div>
      {article.image && (
        <img src={article.image} alt={article.title} width={48} height={45} />
      )}
      <div>{article.writer.nickname}</div>
      <div>{article.likeCount}</div>
      <div>----</div>
    </>
  );
};

export default PostCard;
