import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductComment } from "../../../api/api";


function QuestionWrapper() {

  const [productComment, setProductComment] = useState([]);

  const { productId } = useParams();

  const fetchData = async () => {
    const productComment = await getProductComment(productId);
    setProductComment(productComment.list);
  };

  function timeAgo(time) {
    const previous = new Date(time);
    const current = new Date();
    const elapsed = current - previous;

    const seconds = Math.floor(elapsed / 1000);

    if (seconds < 60) {
      return seconds + '초 전';
    } else if (seconds < 3600) {
      const minutes = Math.floor(seconds / 60);
      return minutes + '분 전';
    } else if (seconds < 86400) {
      const hours = Math.floor(seconds / 3600);
      return hours + '시간 전';
    } else {
      const days = Math.floor(seconds / 86400);
      return days + '일 전';
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ul>
      {productComment?.map((comment) => {
        return (
          <li key={comment.id}>
            <div className="user-comment-wrapper">
              <div className="user-content">{comment.content}</div>
              <div className="user-information">
                <img
                  src={comment.writer.image}
                  alt={comment.writer.nickname}
                />
                <div className="user-text-information">
                  <div>{comment.writer.nickname}</div>
                  <div>{timeAgo(comment.updatedAt)}</div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default QuestionWrapper;
