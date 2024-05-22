import React, { useEffect } from "react";
import { useState } from "react";
import "./additemPage.css";
import AddItemForm from "./AddItemForm";

const AddItemPage = () => {
  //버튼 상태
  const [enrollButtonDisable, setEnrollButtonDisable] = useState(true);

  //상품 정보 담은 객체
  const [values, setValues] = useState({
    images: null,
    name: "",
    description: "",
    price: "",
    tags: [],
  });

  const isEnrollButtonEnabled = () => {
    return (
      values.images &&
      values.name &&
      values.description &&
      values.price &&
      values.tags.length > 0
    );
  };

  useEffect(() => {
    setEnrollButtonDisable(!isEnrollButtonEnabled());
  }, [values]);

  // 위 코드 적절한 코드인가요?

  //정보 입력
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (e.target.type === "number") {
      setValues((prevValues) => ({
        ...prevValues,
        [name]: Number(value),
      }));
      return;
    }
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  //사진 입력
  const upLoadImg = (e) => {
    const { name, files } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: files[0],
    }));
  };
  //사진 삭제
  const cancelUPLoadImg = () => {
    setValues((prevValues) => ({
      ...prevValues,
      images: null,
    }));
  };

  // 태그 리스트 추가
  const addTagList = (tag) => {
    const duplicationCheck = values.tags.every((element) => {
      return element !== tag;
    });

    if (duplicationCheck) {
      setValues((prevValues) => ({
        ...prevValues,
        tags: [...prevValues.tags, tag],
      }));
    } else {
      alert("이미 존재하는 태그입니다");
    }
  };
  //태그 리스트 삭제
  const deleteTagList = (targetTag) => {
    const newList = values.tags.filter((tag) => {
      return tag !== targetTag;
    });
    setValues((prevValues) => ({
      ...prevValues,
      tags: newList,
    }));
  };

  return (
    <>
      <main className="additemPage-main">
        <div className="additemPage-main-content">
          <div className="additem-header">
            <h1>상품 등록하기</h1>
            <button disabled={enrollButtonDisable}>등록</button>
          </div>
          <AddItemForm
            onChange={handleInputChange}
            upLoadImg={upLoadImg}
            cancelUPLoadImg={cancelUPLoadImg}
            addTagList={addTagList}
            deleteTagList={deleteTagList}
            values={values}
          />
        </div>
      </main>
    </>
  );
};
export default AddItemPage;
