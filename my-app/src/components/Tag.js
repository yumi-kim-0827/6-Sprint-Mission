import { useState, useCallback } from "react";
import "./Tag.css";

const Tag = ({ onChange }) => {
  const [hashtag, setHashtag] = useState(""); // 문자열 또는 빈 문자열로 초기화
  const [hashArr, setHashArr] = useState([]); // 문자열 배열로 초기화

  const onChangeHashtag = useCallback(
    (e) => {
      const newHashtag = e.target.value;
      setHashtag(newHashtag);
      onChange(newHashtag); // 입력값을 부모 컴포넌트로 전달
    },
    [onChange]
  );

  const onKeyUp = useCallback(
    (e) => {
      if (e.keyCode === 13 && hashtag.trim() !== "") {
        setHashArr((prevHashArr) => [...prevHashArr, "#" + hashtag.trim()]);
        setHashtag("");
        onChange(""); // 입력값 초기화
      }
    },
    [hashtag, onChange]
  );

  return (
    <div className="HashWrap">
      <label>
        태그
        <input
          className="textInput"
          name="tag"
          type="text"
          placeholder="태그를 입력해주세요"
          onChange={onChangeHashtag}
          onKeyUp={onKeyUp}
          value={hashtag}
        />
      </label>
      <div className="HashWrapOuter">
        {hashArr.map((hash, index) => (
          <div
            key={index}
            className="HashWrapInner"
            onClick={() =>
              setHashArr((prevHashArr) =>
                prevHashArr.filter((_, i) => i !== index)
              )
            }
          >
            {hash}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tag;
