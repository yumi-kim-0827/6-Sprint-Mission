import React, { useState } from "react";

function AddItemImg() {
  const [imageUrl, setImageUrl] = useState(null);

  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0];
    const imageUrl = URL.createObjectURL(selectedImage);
    setImageUrl(imageUrl);
  };

  const handleImageRemove = () => {
    setImageUrl(null);
  };

  return (
    <div style={{ display: "flex", marginBottom: "24px" }}>
      <input
        type="file"
        id="imageUpload"
        onChange={handleImageUpload}
        style={{ display: "none" }}
        multiple={false}
      />
      {imageUrl ? (
        <div
          style={{
            backgroundColor: "#F3F4F6",
            width: "282px",
            height: "282px",
            borderRadius: "12px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "24px",
            position: "relative",
          }}
        >
          <img
            src={imageUrl}
            alt="Uploaded"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
          <button
            onClick={handleImageRemove}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              backgroundColor: "#3692FF",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            X
          </button>
        </div>
      ) : (
        <label htmlFor="imageUpload">
          <div
            style={{
              backgroundColor: "#F3F4F6",
              width: "282px",
              height: "282px",
              borderRadius: "12px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "48px" }}>+</div>
              <div style={{ fontSize: "18px" }}>이미지 등록</div>
            </div>
          </div>
        </label>
      )}
    </div>
  );
}

export default AddItemImg;
