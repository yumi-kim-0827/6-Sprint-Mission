import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface BaseDropdownProps {
  className?: string;
  buttonContent: React.ReactNode;
  children: React.ReactNode;
}

const BaseDropdown = ({
  className,
  buttonContent,
  children,
}: BaseDropdownProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsVisible(!isVisible);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <StyledDropdown className={className} ref={dropdownRef}>
      <DropdownButton onClick={toggleDropdown}>{buttonContent}</DropdownButton>
      {isVisible && <DropdownContent>{children}</DropdownContent>}
    </StyledDropdown>
  );
};

const StyledDropdown = styled.div`
  position: relative;

  button:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const DropdownButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 42px;
  padding: 12px;
  border: 1px solid var(--color-gray-200);
  border-radius: 12px;
  background-color: #fff;
  font-size: 16px;
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  border: 1px solid var(--color-gray-200);
  border-radius: 12px;
  background-color: #fff;
  z-index: 2;
`;

export default BaseDropdown;
