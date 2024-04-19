import { useState } from "react";
import plus from "../../../assets/plus.svg";

function FileInput() {
  const [value, setValue] = useState();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    setValue(nextValue);
  };

  return (
    <div className="img-add-button">
      <label htmlFor="file-upload">
        <div className="img-add-button-align">
          <img src={plus} alt="+이미지" />
          <span>이미지 등록</span>
        </div>
      </label>

      <input
        id="file-upload"
        type="file"
        onChange={handleChange}
        className="img-add-button-hidden"
      />
    </div>
  );
}

export default FileInput;
