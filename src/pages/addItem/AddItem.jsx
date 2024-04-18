import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./AddItem.module.css";
import skeleton from "../../assets/bg-img-skeleton.svg";
import { createFormData } from "../../utils/createFormData";
import ImageUpload from "./ImageUpload";
import NameInput from "./NameInput";
import { PLACEHOLDER } from "../../utils/placeholder";
import TagInput from "./TagInput";
import ProductSubmitButton from "./ProductSubmitButton";
import { allValid } from "../../utils/allValid";

export default function AddItem() {
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);
  const [preview, setPreview] = useState(skeleton);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState([]);
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);
  const isPreview = preview !== skeleton;

  const formInit = () => {
    setProductName("");
    setProductDescription("");
    setPrice("");
    setTags([]);
    setFile(null);
    setPreview(skeleton);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case "productName":
        setProductName(value);
        break;
      case "productDescription":
        setProductDescription(value);
        break;
      case "price":
        setPrice(value);
        break;
      default:
        break;
    }
  };

  const propsForCreateFormData = {
    productName,
    productDescription,
    price,
    tags,
    file,
  };

  const propsForImageUpload = {
    fileInputRef,
    isPreview,
    preview,
    setPreview,
    setFile,
  };

  const propsForAllValid = useMemo(
    () => ({
      setIsButtonEnabled,
      productName,
      productDescription,
      price,
      tags,
    }),
    [setIsButtonEnabled, productName, productDescription, price, tags]
  );

  const propsForTagInput = {
    tags,
    setTags,
    handleInputChange,
    allValid,
  };

  useEffect(() => {
    allValid({ ...propsForAllValid });
  }, [propsForAllValid]);

  const handleSubmit = () => {
    createFormData({ ...propsForCreateFormData });
    formInit();
  };

  return (
    <div className={styles.container}>
      <ProductSubmitButton
        handleSubmit={handleSubmit}
        isButtonEnabled={isButtonEnabled}
      />

      <ImageUpload {...propsForImageUpload} />
      <NameInput
        handleInputChange={handleInputChange}
        productName={productName}
      />

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
      <TagInput {...propsForTagInput} />
    </div>
  );
}
