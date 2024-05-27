import styles from "./ProductSubmitButton.module.css";
import { createItemFormData } from "./createItemFormData";
import { initialFormState } from "../../utils/initialFormState";
import { useAddItemFormValidation } from "./useAddItemFormValidation";

const ProductSubmitButton = ({ values, setValues }) => {
  const isButtonEnabled = useAddItemFormValidation(values);

  const handleSubmit = () => {
    createItemFormData({ ...values });

    setValues(initialFormState);
  };

  return (
    <div className={styles.containerSubmit}>
      <p className={styles.titleSubmit}>상품 등록하기</p>
      <button
        className={styles.btn}
        onClick={handleSubmit}
        disabled={!isButtonEnabled}
      >
        등록
      </button>
    </div>
  );
};

export default ProductSubmitButton;
