import { useParams } from "react-router-dom";
import { getComments } from "services/api";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { CommentListResponse } from "interfaces/comment.interface";
import useFetch from "hooks/useFetch";

function CommentSection() {
  const { productId } = useParams();
  const fetchComments = useFetch<CommentListResponse>(
    () => getComments(productId),
    {
      list: [],
      totalCount: 0,
    }
  );
  const { list: commentList } = fetchComments;

  return (
    <div className="comment-section">
      <AddComment />
      {commentList?.map((comment) => (
        <CommentList comment={comment} key={comment.id} />
      ))}
    </div>
  );
}

export default CommentSection;
