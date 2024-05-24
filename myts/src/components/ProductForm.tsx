import { ChangeEvent, MouseEvent, SyntheticEvent, useState } from "react";
import FileInput from "./FileInput";
import "./ProductForm.css";

interface Ivalue {
  name: string;
  description: string;
  price: string;
  tags: string;
  img: File | null;
}

function ProductForm() {
  const [values, setValues] = useState<Ivalue>({
    name: "",
    description: "",
    price: "",
    tags: "",
    img: null,
  });

  const handleChange = (name: string, value: string | null) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  // submit
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form className="productForm" onSubmit={handleSubmit}>
      <p className="addProductTitle">상품 등록하기</p>
      <label htmlFor="productImg" className="inputTitle">
        상품이미지
      </label>
      <FileInput
        id="productImg"
        name="img"
        value={values.img}
        onChange={handleChange}
      />
      <label htmlFor="name" className="inputTitle">
        상품명
      </label>
      <input
        id="name"
        name="name"
        placeholder="상품명을 입력해주세요"
        value={values.name}
        onChange={handleInputChange}
      ></input>
      <label htmlFor="description" className="inputTitle">
        상품 소개
      </label>
      <input
        id="description"
        name="description"
        className="descriptionInput"
        placeholder="상품 소개를 입력해주세요"
        value={values.description}
        onChange={handleInputChange}
      ></input>
      <label htmlFor="price" className="inputTitle">
        판매가격
      </label>
      <input
        id="price"
        name="price"
        placeholder="판매 가격을 입력해주세요"
        type="text"
        pattern="[0-9]+"
        value={values.price}
        onChange={handleInputChange}
      ></input>
      <label htmlFor="tags" className="inputTitle">
        태그
      </label>
      <input
        id="tags"
        name="tags"
        placeholder="태그를 입력해주세요"
        value={values.tags}
        onChange={handleInputChange}
      ></input>
      <button className="productSubmit" type="submit">
        등록
      </button>
    </form>
  );
}

export default ProductForm;
