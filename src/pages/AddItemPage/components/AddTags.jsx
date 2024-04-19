import React, { useState } from "react";
import "../AddItemPage.css";

function AddTags() {
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && tagInput.trim() !== "") {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleTagRemove = (tagToRemove) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
  };
  return (
    <div>
      <p className="sectiontitle">태그</p>
      <input
        type="text"
        className="inputStyle"
        placeholder="태그를 입력해주세요"
        value={tagInput}
        onChange={(e) => setTagInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div>
        {tags.map((tag, index) => (
          <div
            key={index}
            className="tagPreview"
            style={{
              background: "#F9FAFB",
              borderRadius: "26px",
              padding: "6px 10px",
              display: "inline-flex",
              alignItems: "center",
              margin: "4px",
              padding: "12px 12px 12px 16px",
            }}
          >
            <span>{tag}</span>
            <button
              onClick={() => handleTagRemove(tag)}
              style={{
                background: "#9CA3AF",
                borderRadius: "50%",
                border: "none",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddTags;
