import { useEffect, useState } from "react";
import FileInput from "./component/FileInput";
import "./AddItemPage.css";

function AddItemPage() {
  const [tags, setTags] = useState([]);
  const [disabled, setDisabled] = useState(true); 
  const [values, setValues] = useState({
    title: "",
    description: "",
    price: "",
    tag: "",
    imgFile: null,
  });

  const addTags = (e) => { // 여기서 버그 발생 : 태그만 입력하고 엔터를 누르는데 등록버튼이 활성화됨
    if (e.keyCode === 13 && values.tag !== "") {
      
      setTags([...tags, values.tag]);
      // setValues({tag: ""}) => 여기가 문제
      values.tag = '';
    }
  };


  const deleteTag = (val) =>{
    const nextTags = tags.filter((tag) => tag !== val);
    setTags(nextTags);
    
  }

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(values);
  };

  useEffect(() => { // 여기서 뭔가 문제가 있나?
    const { title, description, price } = values;
    if (title !== "" && description !== "" && price !== "") {
      console.log('등록버튼 활성화');
      setDisabled(false);
    } else {
      console.log('등록버튼 비활성화');
      setDisabled(true);
    }
  }, [values]);

  return (
    <div className="add-item-form-section">
      <form onSubmit={handleSubmit} className="add-item-form">
        <div className="add-item-form-header">
          <h1>상품 등록하기</h1>
          <button
            type="submit"
            className="add-item-form-upload-button"
            disabled={disabled}
          >
            등록
          </button>
        </div>

        <label htmlFor="img">상품 이미지</label>
        <FileInput
          name="imgFile"
          value={values.imgFile}
          onChange={handleChange}
        />

        <label htmlFor="img">상품명</label>
        <input
          type="text"
          name="title"
          id="img"
          value={values.title}
          placeholder="상품명을 입력해주세요"
          onChange={handleInputChange}
        />

        <label htmlFor="img">상품 소개</label>
        <textarea
          name="description"
          id="img"
          value={values.description}
          placeholder="상품 소개를 입력해주세요"
          onChange={handleInputChange}
          className="item-description"
        />

        <label htmlFor="img">판매 가격</label>
        <input
          name="price"
          id="img"
          value={values.price}
          placeholder="판매 가격을 입력해주세요"
          onChange={handleInputChange}
        />

        <label htmlFor="img">태그</label>
        <input
          type="text"
          name="tag"
          id="img"
          value={values.tag}
          placeholder="태그를 입력해주세요"
          onChange={handleInputChange}
          onKeyDown={addTags}
        />
        <div className="tag-input-wrapper">
          <ul>
            {tags.map((item, index) => {
              return <li key={index}>{item} <button onClick={()=> deleteTag(item)}>X</button></li>;
            })}
          </ul>
        </div>
      </form>
    </div>
  );
}

export default AddItemPage;
