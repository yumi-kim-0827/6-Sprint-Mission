import { useState } from "react";
import styled from "styled-components";
import SortIcon from "../assets/icon/sort.svg?react";
import ArrowDownIcon from "../assets/icon/arrow_down.svg?react";

const ItemSortOptions = {
  createdAt: "최신순",
  favoriteCount: "좋아요순",
};

interface SortSelectBoxProps {
  className?: string;
  order: ItemSortOptionsType;
  onClick: (selectedOrder: ItemSortOptionsType) => void;
  size?: "small" | "medium";
}

function SortSelectBox({
  className,
  order,
  onClick,
  size = "medium",
}: SortSelectBoxProps) {
  const [isVisible, setIsVisible] = useState(false);

  const showSortOption = () => {
    setIsVisible(!isVisible);
  };

  const handleOptionClick = (selectedOrder: ItemSortOptionsType) => {
    onClick(selectedOrder);
    setIsVisible(false);
  };

  return (
    <StyledSortSelectBox className={className} $size={size}>
      {size === "small" ? (
        <SortButtonSmall onClick={showSortOption}>
          <SortIcon />
        </SortButtonSmall>
      ) : (
        <SortButtonMedium onClick={showSortOption}>
          <p>{ItemSortOptions[order]}</p>
          <ArrowDownIcon />
        </SortButtonMedium>
      )}

      {isVisible && (
        <OptionBox>
          {Object.keys(ItemSortOptions).map((option) => (
            <Option
              key={option}
              onClick={() => handleOptionClick(option as ItemSortOptionsType)}>
              {ItemSortOptions[option as ItemSortOptionsType]}
            </Option>
          ))}
        </OptionBox>
      )}
    </StyledSortSelectBox>
  );
}

const StyledSortSelectBox = styled.div<{ $size: "small" | "medium" }>`
  position: relative;

  button:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const SortButtonSmall = styled.button`
  width: 42px;
  height: 42px;
  padding: 9px;
  border: 1px solid var(--color-gray-200);
  border-radius: 12px;
  background-color: #fff;
  font-size: 16px;
`;

const SortButtonMedium = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 140px;
  height: 42px;
  padding: 12px 20px;
  border: 1px solid var(--color-gray-200);
  border-radius: 12px;
  background-color: #fff;
  font-size: 16px;
`;

const Option = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 9px;
  font-weight: 400;
  font-size: 16px;
  border-bottom: 1px solid var(--color-gray-200);
  background-color: transparent;
  &:first-of-type {
    border-radius: 12px 12px 0 0;
  }
  &:last-of-type {
    border: none;
    border-radius: 0 0 12px 12px;
  }
`;

const OptionBox = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  width: 130px;
  border: 1px solid var(--color-gray-200);
  border-radius: 12px;
  background-color: #fff;
`;

export default SortSelectBox;
