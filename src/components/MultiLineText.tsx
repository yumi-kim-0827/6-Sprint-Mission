import styled from "styled-components";

interface MultiLineTextProps {
  className?: string;
  children: string;
  isWrap: boolean | "all";
}

const MultiLineText = ({ className, children, isWrap }: MultiLineTextProps) => {
  const text = isWrap
    ? children.replaceAll("\\n", "\n")
    : children.replaceAll("\\n", " ");

  return (
    <>
      <Text
        className={`${className} ${isWrap ? "text-wrap" : "text-nowrap"}`}
        $isWrap={isWrap}>
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

const Text = styled.p<{ $isWrap: boolean | "all" }>`
  white-space: ${({ $isWrap }) => ($isWrap ? "pre-wrap" : "nowrap")};
`;

export default MultiLineText;
