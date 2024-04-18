import styles from "./AddItem.module.css";
import { PLACEHOLDER } from "../../utils/placeholder";

const NameInput = ({ handleInputChange, productName }) => {
  return (
    <div>
      <p className={styles.titleForms}>상품명</p>
      <input
        type="text"
        name="productName"
        placeholder={PLACEHOLDER.productName}
        onChange={e => {
          handleInputChange(e);
        }}
        value={productName}
      />
    </div>
  );
};

export default NameInput;
