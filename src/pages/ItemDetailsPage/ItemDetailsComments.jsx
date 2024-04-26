import { useEffect, useState } from "react";
import getItems from "../../api/getItems";
import { formatTimeAgo } from "../../utils/formatTimeAgo";
import noInquiry from "../../assets/Img_inquiry_empty.svg";

const COMMENTS_MAX = 5;

function ItemDetailsComments({ itemID }) {
  const [comments, setComments] = useState([]);
  const queryData = `products/${itemID}/comments?limit=${COMMENTS_MAX}`;

  useEffect(() => {
    const handleLoad = async () => {
      try {
        const data = await getItems(queryData);
        if (data && data.list) {
          setComments(data.list);
        }
      } catch (e) {
        console.log(e);
      }
    };
    handleLoad();
  }, []);

  if (comments.length >= 1) {
    return (
      <section className="comment__content">
        {comments.map((comment) => {
          return (
            <div className="comment__content-box" key={comment.id}>
              <div className="comment__content-text">{comment.content}</div>
              <div className="comment__content-user-info">
                <div className="comment-user-image-box">
                  <img
                    className="comment-user-image"
                    src={comment.writer.image}
                    alt="프로필이미지"
                  />
                </div>
                <div>
                  <div className="comment-user-name">
                    {comment.writer.nickname}
                  </div>
                  <div className="comment-created-time">
                    {formatTimeAgo(comment.createdAt)}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    );
  } else {
    return (
      <section className="comment__content-noInquiry">
        <img
          className="comment__content-noInquiry-image"
          src={noInquiry}
          alt="상품문의없음"
        />
        아직 문의가 없습니다.
      </section>
    );
  }
}

export default ItemDetailsComments;
