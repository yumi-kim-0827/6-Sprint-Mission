import { useState } from "react";
import "./Inquery.css";

const Inquery = () => {
  const [value, setValue] = useState({
    Inquery: null,
  });
  const handleChange = (name, value) => {
    setValue((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  return (
    <>
      <div className="InqueryDiv">
        <form className="InqueryForm">
          <label className="InqueryLabel">문의하기</label>
          <input
            className="InqueryInput"
            name="inquery"
            type="text"
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            value={value.title}
            onChange={handleInputChange}
          />
          <button className="InqueryRegister" disabled={value.Inquery !== null}>
            등록
          </button>
        </form>
      </div>
    </>
  );
};

export default Inquery;
