import React from "react";
import styled from "styled-components";

const MultiLineText = ({ className, children, isWrap }) => {
  const text = isWrap
    ? children.replaceAll("\\n", "\n")
    : children.replaceAll("\\n", " ");

  return (
    <>
      <Text
        className={`${className} ${isWrap ? "text-wrap" : "text-nowrap"}`}
        $isWrap={isWrap}
      >
        {text}
      </Text>
      {isWrap === "all" && (
        <Text className={`${className} text-nowrap`} $isWrap={false}>
          {text}
        </Text>
      )}
    </>
  );
};

const Text = styled.p`
  white-space: ${({ $isWrap }) => ($isWrap ? "pre-wrap" : "nowrap")};
`;

export default MultiLineText;
