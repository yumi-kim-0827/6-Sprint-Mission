import React, { useState } from "react";

function AddItemPage() {
  const [values, setValues] = useState({
    title: "",
    content: "",
    price: 0,
    tag: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form className="AddItemForm" onSubmit={handleSubmit}>
      <input
        name="title"
        value={values.title}
        onChange={handleChange}
        placeholder="상품명을 입력해주세요"
      />
      <textarea
        name="content"
        value={values.content}
        onChange={handleChange}
        placeholder="상품 소개를 입력해주세요"
      />
      <input
        type="number"
        name="price"
        value={values.price}
        onChange={handleChange}
        placeholder="판매 가격을 입력해주세요"
      />
      <input
        name="tag"
        value={values.tag}
        onChange={handleChange}
        placeholder="태그를 입력해주세요"
      />
      <button type="submit">등록</button>
    </form>
  );
}

export default AddItemPage;
