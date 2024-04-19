import styles from "./AddItem.module.css";
import skeleton from "../../assets/bg-img-skeleton.svg";
import { useEffect, useRef, useState } from "react";
import { allValid } from "../../utils/allValid";
import ImageUpload from "./ImageUpload";
import NameInput from "./NameInput";
import TagInput from "./TagInput";
import ProductSubmitButton from "./ProductSubmitButton";
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

  const propsForSubmitButton = {
    isButtonEnabled,
    productName,
    setProductName,
    productDescription,
    setProductDescription,
    price,
    setPrice,
    tags,
    setTags,
    file,
    setFile,
    setPreview,
  };

  const propsForImageUpload = {
    fileInputRef,
    isPreview,
    preview,
    setPreview,
    setFile,
  };

  const propsForInputs = {
    handleInputChange,
    productName,
    productDescription,
    price,
  };

  const propsForTagInput = {
    tags,
    setTags,
    allValid,
  };

  useEffect(() => {
    allValid({
      setIsButtonEnabled,
      productName,
      productDescription,
      price,
      tags,
    });
  }, [productName, productDescription, price, tags]);

  return (
    <div className={styles.container}>
      <ProductSubmitButton {...propsForSubmitButton} />
      <ImageUpload {...propsForImageUpload} />
      <NameInput {...propsForInputs} />
      <DescriptionInput {...propsForInputs} />
      <PriceInput {...propsForInputs} />
      <TagInput {...propsForTagInput} />
    </div>
  );
}
