import React from "react";
import styled from "styled-components";

const MultiLineText = ({ className, children, isWrap }) => {
  const texts = children.split(",");

  const renderWrapText = () => (
    <Text className={`${className} text-wrap`}>
      {texts.reduce((acc, text) => `${acc}\n${text}`)}
    </Text>
  );

  const renderNoWrapText = () => (
    <Text className={`${className} text-nowrap`}>
      {texts.reduce((acc, text) => `${acc} ${text}`)}
    </Text>
  );

  return (
    <>
      {isWrap === "all" ? (
        <>
          {renderWrapText()}
          {renderNoWrapText()}
        </>
      ) : (
        <>
          {isWrap && renderWrapText()}
          {!isWrap && renderNoWrapText()}
        </>
      )}
    </>
  );
};

const Text = styled.p`
  white-space: pre-wrap;
`;

export default MultiLineText;
