import React from "react";
import "../css/additemPage.css";
import AddItemForm from "../component/AddItemForm";
const AddItemPage = () => {
  return (
    <>
      <main className="additemPage-main">
        <div className="additemPage-main-content">
          <div className="additem-header">
            <h1>상품 등록하기</h1>
            <button disabled={true}>등록</button>
          </div>
          <AddItemForm/>
        </div>
      </main>
    </>
  );
};

export default AddItemPage;
