import styled from "styled-components";
import SortIcon from "@/public/images/ic_sort.svg";
import ArrowDownIcon from "@/public/images/ic_arrow-down.svg";
import BaseDropdown from "./BaseDropdown";
import useDeviceSize from "@/hooks/useDeviceSize";

const SortOptions = {
  recent: "최신순",
  like: "좋아요순",
};

interface SortDropdownProps {
  className?: string;
  order: keyof typeof SortOptions;
  onClick: (selectedOrder: keyof typeof SortOptions) => void;
}

const SortDropdown = ({ className, order, onClick }: SortDropdownProps) => {
  const deviceSize = useDeviceSize();

  const handleOptionClick = (selectedOrder: keyof typeof SortOptions) => {
    onClick(selectedOrder);
  };

  return (
    <BaseDropdown
      className={className}
      buttonContent={
        deviceSize === "small" ? (
          <SortIcon />
        ) : (
          <SButtonInner>
            <p>{SortOptions[order]}</p>
            <ArrowDownIcon />
          </SButtonInner>
        )
      }>
      {Object.keys(SortOptions).map((option) => (
        <Option
          key={option}
          onClick={() => handleOptionClick(option as keyof typeof SortOptions)}>
          {SortOptions[option as keyof typeof SortOptions]}
        </Option>
      ))}
    </BaseDropdown>
  );
};

const SButtonInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  padding: 0 12px;
`;

const Option = styled.button`
  display: flex;
  justify-content: center;
  width: 130px;
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

export default SortDropdown;
