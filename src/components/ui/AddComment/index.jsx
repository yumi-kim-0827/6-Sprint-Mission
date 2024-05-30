import Button from "../Button";
import Textarea from "../Textarea";
import styles from "./styles.module.css";

function AddComment({ content, isDisabled, handleClick, handleChange }) {
  return (
    <div className={styles.align}>
      <div className={styles.separator}>
        <div className={styles.label}>문의하기</div>
        <Textarea
          className="productDetailPage"
          content={content}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          onChange={handleChange}
          id="commentContent"
        />
      </div>
      <Button
        className="button"
        isDisabled={isDisabled}
        handleClick={handleClick}
      >
        등록
      </Button>
    </div>
  );
}

export default AddComment;
