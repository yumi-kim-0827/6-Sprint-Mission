import { useEffect, useState } from "react";

import AddProductImage from "../ui/AddProductImage";

function AddProductImageContainer() {
  const [preview, setPreview] = useState(null);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    setValue(nextValue);
  };

  const handleDeleteClick = () => {
    setPreview(null);
    setValue("");
  };

  useEffect(() => {
    if (!value) return;
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);
  }, [value]);

  return (
    <AddProductImage
      preview={preview}
      value={value}
      handleChange={handleChange}
      handleDeleteClick={handleDeleteClick}
    />
  );
}

export default AddProductImageContainer;
