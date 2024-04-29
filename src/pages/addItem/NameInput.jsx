import styles from "./AddItem.module.css";
import { PLACEHOLDER } from "../../constants/placeholder";
import { handleInputChange } from "../../utils/handleInputChange";

const NameInput = ({ productName, setValues }) => {
  return (
    <div>
      <p className={styles.titleForms}>상품명</p>
      <input
        type="text"
        name="productName"
        placeholder={PLACEHOLDER.productName}
        onChange={handleInputChange(setValues)}
        value={productName}
      />
    </div>
  );
};

export default NameInput;
