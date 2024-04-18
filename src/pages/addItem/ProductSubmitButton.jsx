import styles from "./ProductSubmitButton.module.css";
import skeleton from "../../assets/bg-img-skeleton.svg";
import { createFormData } from "../../utils/createFormData";

const SubmitButton = ({
  isButtonEnabled,
  productName,
  productDescription,
  price,
  tags,
  file,
  setFile,
  setPreview,
  setPrice,
  setProductDescription,
  setProductName,
  setTags,
}) => {
  const formInit = () => {
    setProductName("");
    setProductDescription("");
    setPrice("");
    setTags([]);
    setFile(null);
    setPreview(skeleton);
  };

  const propsForCreateFormData = {
    productName,
    productDescription,
    price,
    tags,
    file,
  };

  const handleSubmit = () => {
    createFormData({ ...propsForCreateFormData });
    formInit();
  };

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
