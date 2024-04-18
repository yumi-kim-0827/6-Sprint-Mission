import React from "react";
import {useState} from "react"
import "../css/additemPage.css";
import AddItemForm from "../component/AddItemForm";
const AddItemPage = () => {
    //버튼 상태 체크
    const [enrollButtonDisable,setEnrollButtonDisable] = useState(true);
   
  return (
    <>
      <main className="additemPage-main">
        <div className="additemPage-main-content">
          <div className="additem-header">
            <h1>상품 등록하기</h1>
            <button disabled={enrollButtonDisable}>등록</button>
          </div>
          <AddItemForm setEnrollButtonDisable={setEnrollButtonDisable}/>
        </div>
      </main>
    </>
  );
};

export default AddItemPage;
