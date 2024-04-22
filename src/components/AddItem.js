import "../styles/AddItem.css";

function AddItem() {
  return (
    <main className="main">
      <form className="add-item-register-container">
        <div className="form-header">
          <h3 className="form-title">상품 등록하기</h3>
          <button className="form-btn">등록</button>
        </div>
        <label htmlFor="item-img">상품 이미지</label>
        <input
          type="file"
          className="file-input"
          id="item-img"
          placeholder="상품 이미지"
        ></input>
        <label htmlFor="item-title">상품명</label>
        <input
          type="text"
          className="text-input"
          id="item-title"
          placeholder="상품명을 입력해주세요"
        ></input>
        <label htmlFor="item-description">상품 소개</label>
        <input
          type="textarea"
          className="text-input"
          id="item-description"
          placeholder="상품 상품 소개를 입력해주세요"
        ></input>
        <label htmlFor="sale-price">판매가격</label>
        <input
          type="text"
          className="text-input"
          id="sale-price"
          placeholder="상품 판매 가격을 입력해주세요"
        ></input>
        <label htmlFor="item-tag">태그</label>
        <input
          type="text"
          className="text-input"
          id="item-tag"
          placeholder="태그를 입력해주세요"
        ></input>
      </form>
    </main>
  );
}

export default AddItem;
