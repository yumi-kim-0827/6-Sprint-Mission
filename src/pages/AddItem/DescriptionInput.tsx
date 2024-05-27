import { PLACEHOLDER } from "../../constants/placeholder";
import styles from "./AddItem.module.css";
import { handleInputChange } from "../../utils/handleInputChange";

const DescriptionInput = ({ setValues, productDescription }) => {
  return (
    <div>
      <p className={styles.titleForms}>상품 소개</p>
      <input
        type="text"
        name="productDescription"
        placeholder={PLACEHOLDER.productDescription}
        onChange={handleInputChange(setValues)}
        value={productDescription}
      />
    </div>
  );
};

export default DescriptionInput;
