import { useState } from "react";

import AddProductForm from "../ui/AddProductForm";

function AddProductFormContainer() {
  const [tags, setTags] = useState([]);
  const [inputTagValue, setInputTagValue] = useState("");
  const [collectedInfo, setCollectedInfo] = useState({
    name: "",
    introduction: "",
    price: "",
  });

  const handleInputChange = (e) => {
    setCollectedInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleTagInputChange = (e) => {
    setInputTagValue(e.target.value);
  };

  const handleKeyUp = (e) => {
    if (
      e.target.value &&
      e.keyCode === 13 &&
      !tags.find((tag) => tag === e.target.value)
    ) {
      setTags((prevTags) => [e.target.value, ...prevTags]);
      setInputTagValue("");
    }
  };

  const handleDelete = (tagName) => {
    setTags((prevTags) => prevTags.filter((tag) => tagName !== tag));
  };

  return (
    <AddProductForm
      collectedInfo={collectedInfo}
      tags={tags}
      handleInputChange={handleInputChange}
      handleTagInputChange={handleTagInputChange}
      handleKeyUp={handleKeyUp}
      handleDelete={handleDelete}
      inputTagValue={inputTagValue}
    />
  );
}
export default AddProductFormContainer;
