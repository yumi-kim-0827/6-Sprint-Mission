import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./AddItem.module.css";
import skeleton from "../../assets/bg-img-skeleton.svg";
import { createFormData } from "../../utils/createFormData";
import ImageUpload from "./ImageUpload";
import NameInput from "./NameInput";
import TagInput from "./TagInput";
import ProductSubmitButton from "./ProductSubmitButton";
import { allValid } from "../../utils/allValid";
import DescriptionInput from "./DescriptionInput";
import PriceInput from "./PriceInput";

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

  const handleSubmit = () => {
    createFormData({ ...propsForCreateFormData });
    formInit();
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

  const propsForNameInput = {
    productName,
    handleInputChange,
  };

  const propsForDescriptionInput = {
    productDescription,
    handleInputChange,
  };

  const propsForPriceInput = {
    price,
    handleInputChange,
  };

  const propsForTagInput = {
    tags,
    setTags,
    allValid,
  };

  const propsForSubmitButton = {
    isButtonEnabled,
    handleSubmit,
  };

  useEffect(() => {
    allValid({ ...propsForAllValid });
  }, [propsForAllValid]);

  return (
    <div className={styles.container}>
      <ProductSubmitButton {...propsForSubmitButton} />
      <ImageUpload {...propsForImageUpload} />
      <NameInput {...propsForNameInput} />
      <DescriptionInput {...propsForDescriptionInput} />
      <PriceInput {...propsForPriceInput} />
      <TagInput {...propsForTagInput} />
    </div>
  );
}
