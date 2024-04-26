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
                  <div>updatedAt: 문의글 마지막 업데이트 시간</div>
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
