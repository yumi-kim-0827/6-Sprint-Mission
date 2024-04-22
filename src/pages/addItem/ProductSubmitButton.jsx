import styles from "./ProductSubmitButton.module.css";
import { createFormData } from "../../utils/createFormData";
import { initialFormState } from "../../utils/initialFormState";
import { useAddItemFormValidation } from "./useAddItemFormValidation";

const SubmitButton = ({ values, setValues }) => {
  const isButtonEnabled = useAddItemFormValidation(values);

  const handleSubmit = () => {
    createFormData({ ...values });
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

export default SubmitButton;
