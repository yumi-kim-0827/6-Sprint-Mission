import styles from "./ProductSubmitButton.module.css";
import { createFormData } from "../../utils/createFormData";
import { initialFormState } from "../../utils/initialFormState";
import { useValidation } from "../../hooks/useValidation";

const SubmitButton = ({ values, setValues }) => {
  const isButtonEnabled = useValidation(values);

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
