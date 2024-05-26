import { useState } from "react";
import styled, { css } from "styled-components";
import sortIcon from "../assets/icon/sort.svg";
import arrowDownIcon from "../assets/icon/arrow_down.svg";

type Order = "createdAt" | "favoriteCount";

interface SortSelectBoxProps {
  className?: string;
  order: Order;
  onClick: (selectedOrder: Order) => void;
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

  const handleOptionClick = (selectedOrder: Order) => {
    onClick(selectedOrder);
    setIsVisible(false);
  };

  return (
    <StyledSortSelectBox className={className} $size={size}>
      <button
        className="sort-select-box__button small"
        onClick={showSortOption}>
        <i className="icon-sort"></i>
      </button>
      <button
        className="sort-select-box__button medium"
        onClick={showSortOption}>
        <p> {order === "createdAt" ? "최신순" : "좋아요순"}</p>
        <i className="icon-arrow-down"></i>
      </button>
      {isVisible && (
        <div className="sort-select-box__option-box">
          {["createdAt", "favoriteCount"].map((key) => (
            <button
              key={key}
              className="sort-select-box__option"
              onClick={() => handleOptionClick(key as Order)}>
              {key === "createdAt" ? "최신순" : "좋아요순"}
            </button>
          ))}
        </div>
      )}
    </StyledSortSelectBox>
  );
}

const sortSelectBoxSize = {
  small: css`
    .sort-select-box__button.small {
      display: inline-block;
    }

    .sort-select-box__button.medium {
      display: none;
    }
  `,
  medium: css`
    .sort-select-box__button.small {
      display: none;
    }

    .sort-select-box__button.medium {
      display: flex;
    }
  `,
};

const StyledSortSelectBox = styled.div<{ $size: "small" | "medium" }>`
  position: relative;

  button:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .sort-select-box__button {
    width: 42px;
    height: 42px;
    padding: 9px;
    border: 1px solid var(--color-gray-200);
    border-radius: 12px;
    background-color: #fff;
    font-size: 16px;
  }

  .sort-select-box__button.medium {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 140px;
    height: 42px;
    padding: 12px 20px;
  }

  i.icon-sort,
  i.icon-arrow-down {
    display: block;
    width: 24px;
    height: 24px;
    background-size: 24px 24px;
    background-repeat: no-repeat;
    background-position: center;
  }

  i.icon-sort {
    background-image: url(${sortIcon});
  }

  i.icon-arrow-down {
    background-image: url(${arrowDownIcon});
  }

  .sort-select-box__option-box {
    position: absolute;
    top: 50px;
    right: 0;
    width: 130px;
    border: 1px solid var(--color-gray-200);
    border-radius: 12px;
    background-color: #fff;
  }

  .sort-select-box__option {
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
  }

    ${(props) => sortSelectBoxSize[props.$size]}
  }
`;

export default SortSelectBox;
