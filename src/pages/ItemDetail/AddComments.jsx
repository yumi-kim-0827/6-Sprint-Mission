import { useState } from "react";

function AddComments() {
  const [addComments, setAddCommnets] = useState();

  const handleChange = (e) => {
    setAddCommnets(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("addComments", addComments);
  };

  return (
    <div className="addComment">
      <h2>문의하기</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="addComment-input"
          name="addComments"
          onChange={handleChange}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
      </form>
      <div className="addComment-button">
        <button type="submit">등록</button>
      </div>
    </div>
  );
}

export default AddComments;
