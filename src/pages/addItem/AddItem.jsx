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
      <ProductSubmitButton values={values} setValues={setValues} />
      <ImageUpload preview={values.preview} setValues={setValues} />
      <NameInput productName={values.productName} setValues={setValues} />
      <DescriptionInput
        productDescription={values.productDescription}
        setValues={setValues}
      />
      <PriceInput price={values.price} setValues={setValues} />
      <TagInput tags={values.tags} setValues={setValues} />
    </div>
  );
}
