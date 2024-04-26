import { useState } from 'react';

export default function CommentInput() {
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const isButtonDisabled = comment.trim() === '';

  return (
    <div className="my-6">
      <h1 className="font-semibold">문의하기</h1>
      <textarea
        name="comment"
        id="comment"
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        className="mt-4 w-full resize-none rounded-xl bg-[var(--cool-gray100)] px-6 py-4"
        value={comment}
        onChange={handleCommentChange}
      ></textarea>
      <div className="flex justify-end">
        <button
          className={`mt-4 rounded-lg px-7 py-3 text-white ${isButtonDisabled ? 'bg-[var(--cool-gray400)]' : 'bg-[var(--btn-blue1)]'}`}
          disabled={isButtonDisabled}
        >
          등록
        </button>
      </div>
    </div>
  );
}
