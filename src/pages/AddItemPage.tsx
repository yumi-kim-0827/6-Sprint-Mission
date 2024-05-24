import React, { useEffect, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import FileInput from "../components/FileInut";
import Logo from "../assets/logo.png";
import Close from "../assets/icons/ic_close.png";
import "../styles/AddItemPage.css";

// input 태그로 입력받는 태그들의 값들을 interface로 정의해서 정리
interface InputValue {
  title: string;
  description: string;
  price: string;
  tag: string;
  imgFile: any; // 객체로 전달해야 되는데 일단 걍 any로 타입 지정
}

export default function AddItemPage() {
  const navigate = useNavigate();
  const idRef = useRef(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const [tags, setTags] = useState<string[]>([]);
  const [values, setValues] = useState<InputValue>({
    title: "",
    description: "",
    price: "",
    tag: "",
    imgFile: null,
  });

  const handleChange = (name: string, value: any): void => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // input 입력 이벤트를 매개변수로 받는다.
  // e의 타입은 input과 textarea에서 발생하므로 유니언 타입으로 해야 한다.
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    // 입력한 e를 name과 value로 구조분해 할당
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleAddTag = (
    // union type은 안되고 intersection type이 되는 이유?
    e: React.KeyboardEvent<HTMLDivElement> & React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter" && values.tag !== "") {
      setTags([...tags, values.tag]);
      setValues((prev) => ({ ...prev, tag: "" }));
    }
  };

  const handleDeleteTag = (val: any) => {
    const nextTags = tags.filter((tag) => tag !== val);
    setTags(nextTags);
  };

  useEffect(() => {
    const { title, description, price, tag, imgFile } = values;
    if (
      title !== "" &&
      description !== "" &&
      price !== "" &&
      tag !== "" &&
      imgFile !== null
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [values]);

  return (
    <div>
      <header>
        <nav>
          <Link to="/">
            <img src={Logo} alt="판다마켓 로고" />
          </Link>
          <span>자유게시판</span>
          <Link to="/items">
            <span>중고마켓</span>
          </Link>
        </nav>

        <button
          className="login_button"
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인
        </button>
      </header>
      <form action="" className="add_form_wrapper">
        <div className="add_form_wrapper_header">
          <h1>상품 등록하기</h1>
          <button disabled={isDisabled}>등록</button>
        </div>

        <label htmlFor="">상품 이미지</label>
        <FileInput
          name="imgFile"
          value={values.imgFile}
          onChange={handleChange}
        />

        <label htmlFor="">상품명</label>
        <input
          type="text"
          name="title"
          value={values.title}
          onChange={handleInputChange}
          placeholder="상품명을 입력해주세요"
        />

        <label htmlFor="">상품소개</label>
        <textarea
          name="description"
          value={values.description}
          onChange={handleInputChange}
          placeholder="상품 소개를 입력해주세요"
        />

        <label htmlFor="">판매가격</label>
        <input
          type="text"
          name="price"
          value={values.price}
          onChange={handleInputChange}
          placeholder="판매 가격을 입력해주세요"
        />

        <label htmlFor="">태그</label>
        <input
          type="text"
          name="tag"
          value={values.tag}
          onChange={handleInputChange}
          onKeyDown={handleAddTag}
          placeholder="태그를 입력해주세요"
        />

        <div className="tag_wrapper">
          <ul>
            {tags.map((item) => {
              return (
                <li key={idRef.current++}>
                  {item}
                  <button onClick={() => handleDeleteTag(item)}>
                    <img src={Close} alt="닫기" />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </form>
    </div>
  );
}
