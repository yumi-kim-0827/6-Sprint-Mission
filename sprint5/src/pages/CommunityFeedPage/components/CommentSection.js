import React, { useState } from "react";
import "./CommentSection.css";

function CommentSection({ comments }) {
  const [commentText, setCommentText] = useState("");

  return (
    <section className="commentSection">
      <p className="comment__title">문의하기</p>
      <form className="commentInput">
        <textarea
          className="commentInput__textarea"
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button
          className="commentInput__Button"
          type="submit"
          disabled={!commentText.trim()}
        >
          등록
        </button>
      </form>
      <div className="commentContainer">
        {comments.map((comment) => (
          <div className="comment" key={comment.id}>
            <div className="comment__content">
              <p>{comment.content}</p>
            </div>
            <div className="commentInfo">
              <img className="commentInfo__img" src={comment.writer.image} />
              <div className="commentInfoItems">
                <p className="commentInfo__nickname">
                  {comment.writer.nickname}
                </p>
                <p className="commentInfo__updateAt">{comment.updatedAt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CommentSection;
