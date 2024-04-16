import React from "react";

const nomalStyle = {
  width: "40px",
  height: "40px",
  borderRadius: "40px",
  padding: "12.5px",
  border: "1px solid #e5e7eb",
  backgroundColor: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  color: "#6b7280",
};

const selectStyle = {
  ...nomalStyle,
  backgroundColor: "#2F80ED",
  color: "#ffffff",
  border: "none",
};

export default function PageNationButton({ children }) {
  return <button style={nomalStyle}>{children}</button>;
}
