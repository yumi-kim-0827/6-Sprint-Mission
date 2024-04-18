import { PLACEHOLDER } from "../../utils/placeholder";
import styles from "./AddItem.module.css";

const PriceInput = ({ handleInputChange, price }) => {
  return (
    <div>
      <p className={styles.titleForms}>판매 가격</p>
      <input
        name="price"
        placeholder={PLACEHOLDER.price}
        onChange={e => {
          handleInputChange(e);
        }}
        value={price}
      />
    </div>
  );
};

export default PriceInput;
