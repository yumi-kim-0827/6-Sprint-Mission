import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  padding: 0;
  border: 1px solid #e5e7eb;
  background-color: #ffffff;
  fontsize: 16px;
  font-weight: 600;
  color: #6b7280;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function PageButton({ children, onClick }) {
  return <Button onClick={onClick}>{children}</Button>;
}
