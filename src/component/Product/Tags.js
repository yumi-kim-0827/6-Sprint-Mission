import { useState } from "react";

function Tags(name, value, onKeyUp) {
  const [addTags, setAddTags] = useState([]);

  const handleAddTags = (e) => {
    const nextTag = e.target.value;

    if (e.key === "Enter" && nextTag !== "" && !addTags.includes(nextTag)) {
      setAddTags([...addTags, nextTag]);
      e.target.value = "";
    }
  };

  return (
    <div className="InputTags">
      <input
        type="text"
        name={name}
        value={value}
        placeholder="태그를 입력해주세요"
        onKeyUp={(e) => handleAddTags(e)}
      />
      <p>{addTags}</p>
    </div>
  );
}

export default Tags;
