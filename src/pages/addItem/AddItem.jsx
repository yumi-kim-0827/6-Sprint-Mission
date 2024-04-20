import styles from "./AddItem.module.css";
import { useState } from "react";
import ImageUpload from "./ImageUpload";
import NameInput from "./NameInput";
import TagInput from "./TagInput";
import ProductSubmitButton from "./ProductSubmitButton";
import DescriptionInput from "./DescriptionInput";
import PriceInput from "./PriceInput";
import { initialFormState } from "../../utils/initialFormState";

export default function AddItem() {
  const [values, setValues] = useState(initialFormState);

  return (
    <div className={styles.container}>
      <ProductSubmitButton {...{ values, setValues }} />
      <ImageUpload {...{ values, setValues }} />
      <NameInput {...{ values, setValues }} />
      <DescriptionInput {...{ values, setValues }} />
      <PriceInput {...{ values, setValues }} />
      <TagInput {...{ values, setValues }} />
    </div>
  );
}
