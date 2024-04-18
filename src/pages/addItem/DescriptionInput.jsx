import { PLACEHOLDER } from "../../utils/placeholder";
import styles from "./AddItem.module.css";

const DescriptionInput = ({ handleInputChange, productDescription }) => {
  return (
    <div>
      <p className={styles.titleForms}>상품 소개</p>
      <input
        type="text"
        name="productDescription"
        placeholder={PLACEHOLDER.productDescription}
        onChange={e => {
          handleInputChange(e);
        }}
        value={productDescription}
      />
    </div>
  );
};

export default DescriptionInput;
