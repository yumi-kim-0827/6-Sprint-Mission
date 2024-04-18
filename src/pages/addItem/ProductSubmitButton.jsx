import styles from "./ProductSubmitButton.module.css";

const SubmitButton = ({ handleSubmit, isButtonEnabled }) => {
  return (
    <div className={styles.containerSubmit}>
      <p className={styles.titleSubmit}>상품 등록하기</p>
      <button
        className={styles.btn}
        onClick={handleSubmit}
        disabled={isButtonEnabled}
      >
        등록
      </button>
    </div>
  );
};

export default SubmitButton;
