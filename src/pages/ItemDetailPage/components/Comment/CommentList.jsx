function CommentList({ comment }) {
  return (
    <div>
      <img src={comment.writer.image} alt={comment.writer} />
      {comment.nickname}
      {comment.content}
    </div>
  );
}

export default CommentList;
