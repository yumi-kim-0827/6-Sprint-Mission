import React from "react";

function CommentSection({ comments }) {
  return (
    <section>
      <p>문의하기</p>
      <div>
        <textarea />
        <button>댓글 등록</button>
      </div>
      <div>
        {comments.map((comment) => (
          <div key={id}>
            <div>
              <p>{comment.content}</p>
              <img />
            </div>
            <div>
              <p>{comment.image}</p>
              <p>{comment.nickname}</p>
              <p>{comment.updatedAt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CommentSection;
