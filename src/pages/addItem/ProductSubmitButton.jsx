import styles from "./AddItem.module.css";

const ProductSubmitButton = ({ handleSubmit, isButtonEnabled }) => {
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

export default ProductSubmitButton;
